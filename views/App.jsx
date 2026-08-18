import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar.jsx';
import { Footer } from './components/Footer.jsx';
import { MarketplacePage } from './pages/MarketplacePage.jsx';
import { ProductDetailPage } from './pages/ProductDetailPage.jsx';
import { ProfilePage } from './pages/ProfilePage.jsx';
import { CartPage } from './pages/CartPage.jsx';
import { Viewer3DModal } from './components/Viewer3DModal.jsx';
import { RoomPlannerPreview } from './components/RoomPlannerPreview.jsx';
import { AuthModal } from './components/AuthModal.jsx';
import { SellerListingModal } from './components/SellerListingModal.jsx';
import { CenteredNotification } from './components/CenteredNotification.jsx';
import { CheckoutPage } from './features/f13-checkout/CheckoutPage.jsx';
import { GeoMapPage } from './features/f9-geo-map/GeoMapPage.jsx';
import { EscrowVaultPage } from './features/f14-escrow-holding/EscrowVaultPage.jsx';
import { SellerEscrowPanel } from './features/f14-escrow-holding/SellerEscrowPanel.jsx';
import { CourierDispatchBoard } from './features/f11-courier-dispatch/CourierDispatchBoard.jsx';
import { LiveTrackingMap } from './features/f12-live-tracking/LiveTrackingMap.jsx';

import { seedProductsData } from '../models/seedData.js';
import { Box, ShieldCheck, MapPin, Truck, Grid, Lock, CheckCircle, Trash2 } from 'lucide-react';

export default function App() {
  const [products, setProducts] = useState(seedProductsData);
  const [selectedProduct, setSelectedProduct] = useState(seedProductsData[0]);
  const [activeTab, setActiveTab] = useState('marketplace');
  const [activeRoleRoute, setActiveRoleRoute] = useState('buyer'); // 'buyer', 'seller', 'courier', 'admin'
  
  // Modals & Drawers
  const [is3DInspectorOpen, setIs3DInspectorOpen] = useState(false);
  const [isRoomPlannerOpen, setIsRoomPlannerOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isSellerListingOpen, setIsSellerListingOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isStripeCheckoutOpen, setIsStripeCheckoutOpen] = useState(false);
  const [trackingJob, setTrackingJob] = useState(null); // F12 — Live Tracking
  
  // Centered Notification Dialog
  const [notification, setNotification] = useState(null);

  // User Authentication State
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('decorate3d_user');
    return saved ? JSON.parse(saved) : null;
  });

  const [cart, setCart] = useState([]);

  const showCenteredNotification = (type, title, message) => {
    setNotification({ type, title, message });
  };

  // URL Path Synchronization & Role Route Parser (/buyer, /seller, /courier, /admin)
  useEffect(() => {
    const syncRouteFromPath = () => {
      const path = window.location.pathname.toLowerCase();
      let targetRole = 'buyer';

      if (path.includes('/seller')) {
        targetRole = 'seller';
      } else if (path.includes('/courier')) {
        targetRole = 'courier';
      } else if (path.includes('/admin')) {
        targetRole = 'admin';
      } else {
        targetRole = 'buyer';
      }

      // Check stored user session vs target URL role
      const savedUserStr = localStorage.getItem('decorate3d_user');
      const currentUser = savedUserStr ? JSON.parse(savedUserStr) : null;

      if (currentUser && currentUser.role !== targetRole) {
        setUser(null);
        localStorage.removeItem('decorate3d_user');
        setNotification({
          type: 'info',
          title: 'Role Route Switched via URL',
          message: `Switched web address to /${targetRole}. Active ${currentUser.role.toUpperCase()} session has been logged out.`
        });
        setIsAuthModalOpen(true);
      } else if (!currentUser && targetRole !== 'buyer') {
        setIsAuthModalOpen(true);
      }

      if (targetRole === 'seller') {
        setActiveTab('seller_dashboard');
      } else if (targetRole === 'courier') {
        setActiveTab('logistics');
      } else if (targetRole === 'admin') {
        setActiveTab('admin_dashboard');
      } else {
        setActiveTab(prev => (prev === 'seller_dashboard' || prev === 'admin_dashboard' || prev === 'logistics' ? 'marketplace' : prev));
      }

      setActiveRoleRoute(targetRole);
    };

    syncRouteFromPath();
    window.addEventListener('popstate', syncRouteFromPath);
    return () => window.removeEventListener('popstate', syncRouteFromPath);
  }, []);

  // Persist user session
  useEffect(() => {
    if (user) {
      localStorage.setItem('decorate3d_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('decorate3d_user');
    }
  }, [user]);

  // Fetch real backend products
  const fetchProducts = () => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => {
        if (data.success && data.data && data.data.length > 0) {
          setProducts(data.data);
        }
      })
      .catch(() => {});
  };

  useEffect(() => {
    fetchProducts();
  }, [activeTab, user]);

  const open3DInspector = (productToInspect = null) => {
    if (productToInspect) {
      setSelectedProduct(productToInspect);
    }
    setIs3DInspectorOpen(true);
  };

  const close3DInspector = () => {
    setIs3DInspectorOpen(false);
  };

  const openRoomPlanner = () => {
    setIsRoomPlannerOpen(false);
    setIsRoomPlannerOpen(true);
  };

  const closeRoomPlanner = () => {
    setIsRoomPlannerOpen(false);
  };

  const handleOpenCart = () => {
    if (!user) {
      setIsAuthModalOpen(true);
      showCenteredNotification(
        'info',
        'Login Required',
        'Please log in to view your Escrow Cart and proceed to checkout.'
      );
    } else {
      setIsCartOpen(true);
    }
  };

  const handleAddToCart = (productToAdd) => {
    if (!user) {
      setIsAuthModalOpen(true);
      showCenteredNotification(
        'info',
        'Login Required',
        'Please log in to add items to your Escrow Cart.'
      );
      return;
    }
    setCart(prev => [...prev, productToAdd]);
    setIsCartOpen(true);
    showCenteredNotification(
      'success',
      'Item Added to Escrow Cart',
      `"${productToAdd.title}" ($${productToAdd.price}) has been placed in your safe escrow cart.`
    );
  };

  const handleRemoveFromCart = (index) => {
    setCart(prev => prev.filter((_, i) => i !== index));
  };

  const handleCheckout = () => {
    if (!user) {
      setIsCartOpen(false);
      setIsAuthModalOpen(true);
      showCenteredNotification(
        'info',
        'Login Required',
        'Please log in to complete your Stripe Escrow payment.'
      );
      return;
    }
    setIsStripeCheckoutOpen(true);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('decorate3d_user');
    setActiveTab('marketplace');
    showCenteredNotification('info', 'Logged Out', 'You have been successfully logged out of your account.');
  };

  const handleDeleteProduct = async (productId) => {
    try {
      await fetch(`/api/products/${productId}`, { method: 'DELETE' });
    } catch (err) {
      console.warn('API delete error, clearing locally:', err);
    }
    setProducts(prev => prev.filter(p => p._id !== productId));
    if (selectedProduct && selectedProduct._id === productId) {
      setSelectedProduct(null);
    }
    showCenteredNotification('success', 'Furniture Listing Deleted', 'The selected product has been removed from your seller listings.');
  };

  const handleUpdateProfile = (updatedUser) => {
    setUser(updatedUser);
    localStorage.setItem('decorate3d_user', JSON.stringify(updatedUser));
    showCenteredNotification('success', 'Profile Updated', 'Your profile details have been saved successfully.');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#1E232A]">
      
      {/* Centered Display Notification Dialog */}
      <CenteredNotification
        notification={notification}
        onClose={() => setNotification(null)}
      />

      {/* Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        cartCount={cart.length}
        openAuthModal={() => setIsAuthModalOpen(true)}
        user={user}
        onLogout={handleLogout}
        openCart={handleOpenCart}
        openSellerListingModal={() => setIsSellerListingOpen(true)}
      />

      {/* Main Body View Switching */}
      <main className="flex-1">
        {activeTab === 'marketplace' && (
          <MarketplacePage
            products={products}
            onSelectProduct={(p) => {
              setSelectedProduct(p);
              setActiveTab('product_detail');
            }}
            open3DInspector={open3DInspector}
          />
        )}

        {activeTab === 'product_detail' && (
          <ProductDetailPage
            product={selectedProduct}
            open3DInspector={open3DInspector}
            onAddToCart={handleAddToCart}
            onLaunchRoomPlanner={openRoomPlanner}
          />
        )}

        {/* SELLER DASHBOARD VIEW (/seller) */}
        {activeTab === 'seller_dashboard' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 animate-fadeIn">
            <div className="bg-[#1E232A] text-white rounded-3xl p-8 border border-[#A17A16]/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <span className="gold-badge text-xs px-3 py-1 rounded-full uppercase">SELLER PORTAL (/seller)</span>
                <h1 className="font-serif text-3xl font-bold mt-2">Furniture Seller 3D Inventory Hub</h1>
                <p className="text-sm text-gray-300 mt-1 max-w-xl">
                  Upload multi-angle photos or snap with your device camera to generate interactive 360° 3D models for buyers.
                </p>
              </div>
              <button
                onClick={() => setIsSellerListingOpen(true)}
                className="gold-gradient-btn px-6 py-3.5 rounded-xl font-bold text-sm shadow-xl flex items-center space-x-2 whitespace-nowrap"
              >
                <Box className="w-5 h-5" />
                <span>+ LIST NEW ITEM WITH 3D SCANNER</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-[#E5DEC9] shadow-sm">
                <span className="text-xs font-mono text-gray-400 font-bold block">ACTIVE LISTINGS</span>
                <span className="font-serif text-3xl font-bold text-gray-900 mt-1 block">{products.length} Items</span>
                <span className="text-xs text-emerald-600 font-bold mt-2 inline-block">100% 3D Model Verified</span>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-[#E5DEC9] shadow-sm">
                <span className="text-xs font-mono text-gray-400 font-bold block">TOTAL BIDS / INQUIRIES</span>
                <span className="font-serif text-3xl font-bold text-[#A17A16] mt-1 block">18 Offers</span>
                <span className="text-xs text-gray-500 mt-2 inline-block">Escrow Locked Bids</span>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-[#E5DEC9] shadow-sm">
                <span className="text-xs font-mono text-gray-400 font-bold block">SELLER ACCOUNT ROLE</span>
                <span className="font-serif text-2xl font-bold text-gray-900 mt-1 block">{user?.role === 'seller' ? user.name : 'Seller Account Required'}</span>
                <span className="text-xs text-gray-500 mt-2 inline-block">Role Isolated Database Token</span>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-[#E5DEC9] shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-xl font-bold text-gray-900">Your Listed 3D Furniture Items</h3>
                <span className="text-xs font-mono text-gray-500">{products.length} active listings</span>
              </div>

              {products.length === 0 ? (
                <div className="py-12 text-center text-xs text-gray-400 font-mono">
                  No furniture items listed yet. Click "+ LIST NEW ITEM WITH 3D SCANNER" above to list your first item.
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {products.map(p => (
                    <div key={p._id} className="border border-[#E5DEC9] rounded-2xl p-3 space-y-2.5 bg-[#FBF9F5] flex flex-col justify-between">
                      <div className="space-y-2">
                        <div className="relative">
                          <img src={p.images[0]} alt={p.title} className="w-full h-36 object-cover rounded-xl" />
                          <span className="absolute top-2 right-2 gold-badge text-[9px] px-2 py-0.5 rounded-full uppercase">
                            {p.category}
                          </span>
                        </div>
                        <h4 className="font-serif font-bold text-sm text-gray-900 truncate">{p.title}</h4>
                        <div className="flex justify-between items-center text-xs font-mono">
                          <span className="font-bold text-[#A17A16]">${p.price}</span>
                          <span className="text-gray-400">{p.conditionGrade || 'GOOD'}</span>
                        </div>
                      </div>

                      <div className="space-y-1.5 pt-2 border-t border-[#E5DEC9]/60">
                        <button
                          onClick={() => open3DInspector(p)}
                          className="w-full bg-white hover:bg-gray-100 text-xs font-bold py-2 rounded-xl border border-[#E5DEC9] flex items-center justify-center space-x-1 transition-colors"
                        >
                          <Box className="w-3.5 h-3.5 text-[#A17A16]" />
                          <span>INSPECT 3D MODEL</span>
                        </button>

                        {/* Delete Seller Item Button */}
                        <button
                          onClick={() => {
                            if (window.confirm(`Are you sure you want to delete listing "${p.title}"?`)) {
                              handleDeleteProduct(p._id);
                            }
                          }}
                          className="w-full bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-bold py-2 rounded-xl border border-rose-200 flex items-center justify-center space-x-1.5 transition-colors"
                          title="Delete this listed furniture item"
                        >
                          <Trash2 className="w-3.5 h-3.5 text-rose-600" />
                          <span>DELETE ITEM</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* COURIER / DRIVER DASHBOARD VIEW (/courier) */}
        {activeTab === 'logistics' && (
          <div className="space-y-0 animate-fadeIn">
            {/* Existing header banner */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-2">
              <div className="bg-[#1E232A] text-white rounded-3xl p-8 border border-[#A17A16]/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <span className="gold-badge text-xs px-3 py-1 rounded-full uppercase">COURIER PORTAL (/courier)</span>
                  <h1 className="font-serif text-3xl font-bold mt-2">Logistics &amp; Geo-Radius Bidding Hub</h1>
                  <p className="text-sm text-gray-300 mt-1 max-w-xl">
                    Connect local courier drivers, calculate distance matrix quotes, and verify delivery with OTP handshake codes.
                  </p>
                </div>
                <button
                  onClick={() => showCenteredNotification('info', 'Courier Bid Placed', 'Submitted $45 delivery bid for local Dhaka zone dispatch.')}
                  className="gold-gradient-btn px-6 py-3.5 rounded-xl font-bold text-sm shadow-xl flex items-center space-x-2 whitespace-nowrap"
                >
                  <Truck className="w-5 h-5" />
                  <span>BID ON OPEN DELIVERIES</span>
                </button>
              </div>
            </div>
            {/* F11 — Courier Dispatch Board (Injamamul Haque Fahim) */}
            <CourierDispatchBoard
              user={user}
              onNotify={showCenteredNotification}
              onTrackJob={(job) => setTrackingJob(job)}
            />
          </div>
        )}

        {/* ADMIN DASHBOARD VIEW (/admin) */}
        {activeTab === 'admin_dashboard' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 animate-fadeIn">
            <div className="bg-white rounded-3xl p-8 border border-[#E5DEC9] shadow-xl space-y-6">
              <span className="gold-badge text-xs px-3 py-1 rounded-full uppercase">ADMIN PORTAL (/admin)</span>
              <h1 className="font-serif text-3xl font-bold text-gray-900">System Administrator Audit Hub</h1>
              <p className="text-sm text-gray-600">
                Audits platform security, monitors Escrow transactions, and manages role-isolated database accounts.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                <div className="p-4 bg-[#F9F4E9] rounded-2xl border border-[#E9D3A4]">
                  <span className="text-xs font-mono text-[#A17A16] font-bold block">SYSTEM STATUS</span>
                  <span className="text-lg font-bold text-gray-900 mt-1 block">JWT & Nodemailer 2FA Active</span>
                </div>
                <div className="p-4 bg-[#F9F4E9] rounded-2xl border border-[#E9D3A4]">
                  <span className="text-xs font-mono text-[#A17A16] font-bold block">ROLE ISOLATION</span>
                  <span className="text-lg font-bold text-gray-900 mt-1 block">Strict (email, role) Compound Key</span>
                </div>
                <div className="p-4 bg-[#F9F4E9] rounded-2xl border border-[#E9D3A4]">
                  <span className="text-xs font-mono text-[#A17A16] font-bold block">3D VOLUMETRIC ENGINE</span>
                  <span className="text-lg font-bold text-gray-900 mt-1 block">Three.js 360° Texture Map Ready</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'profile' && (
          <ProfilePage
            user={user}
            onUpdateProfile={handleUpdateProfile}
            onLogout={handleLogout}
            openAuthModal={() => setIsAuthModalOpen(true)}
          />
        )}

        {activeTab === 'room_planner' && (
          <div className="max-w-7xl mx-auto px-4 py-12 text-center space-y-6">
            <div className="bg-white rounded-3xl p-12 border border-[#E5DEC9] shadow-sm max-w-2xl mx-auto space-y-4">
              <span className="gold-badge text-xs px-3 py-1 rounded-full">3D SPATIAL CANVAS</span>
              <h2 className="font-serif text-3xl font-bold">Virtual 3D Room Floor Planner</h2>
              <p className="text-sm text-gray-600">
                Interactive room grid editor for testing spatial furniture placement before buying.
              </p>
              <button
                onClick={openRoomPlanner}
                className="gold-gradient-btn px-8 py-3.5 rounded-xl font-bold text-sm shadow-md"
              >
                OPEN SPATIAL 3D PLANNER CANVAS
              </button>
            </div>
          </div>
        )}


        {/* Geo Map Finder: Local Radius Search */}
        {activeTab === 'geo_map' && (
          <GeoMapPage
            onSelectProduct={(p) => {
              setSelectedProduct(p);
              setActiveTab('product_detail');
            }}
          />
        )}

        {/* Escrow Vault & Holding Tracker — Buyer side */}
        {activeTab === 'escrow_vault' && (
          <EscrowVaultPage user={user} />
        )}

        {/* Seller Escrow Release Panel — Seller enters buyer OTP to unlock funds */}
        {activeTab === 'seller_escrow' && (
          <SellerEscrowPanel user={user} />
        )}
      </main>

      {/* 360° Volumetric 3D Inspector Modal */}
      <Viewer3DModal
        product={selectedProduct}
        isOpen={is3DInspectorOpen}
        onClose={close3DInspector}
        onAddToCart={handleAddToCart}
        onLaunchAR={openRoomPlanner}
      />

      {/* Room Planner Modal */}
      <RoomPlannerPreview
        product={selectedProduct}
        isOpen={isRoomPlannerOpen}
        onClose={closeRoomPlanner}
        initialMarketplaceProducts={products}
      />

      {/* Role-Aware Auth Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        initialRole={activeRoleRoute}
        onClose={() => setIsAuthModalOpen(false)}
        onLoginSuccess={(authenticatedUser) => {
          setUser(authenticatedUser);
          showCenteredNotification(
            'success',
            'Authentication Complete',
            `Welcome back, ${authenticatedUser.name}! Verified as ${authenticatedUser.role.toUpperCase()}.`
          );
        }}
      />

      {/* Cart Drawer */}
      <CartPage
        cart={cart}
        onRemoveFromCart={handleRemoveFromCart}
        onCheckout={handleCheckout}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />

      {/* F13 (Member 4) — Stripe Checkout Modal */}
      <CheckoutPage
        cart={cart}
        buyerUser={user}
        isOpen={isStripeCheckoutOpen}
        onClose={() => setIsStripeCheckoutOpen(false)}
        onPaymentSuccess={(summary) => {
          setCart([]);
          setIsCartOpen(false);
          showCenteredNotification(
            'success',
            'Stripe Escrow Lock Successful',
            `Payment of $${summary.summary?.totalPrice} processed via Stripe Test Mode! Funds locked in Escrow.`
          );
        }}
      />

      {/* Seller Multi-Angle 3D Listing Modal */}
      <SellerListingModal
        user={user}
        isOpen={isSellerListingOpen}
        onClose={() => setIsSellerListingOpen(false)}
        onAddProduct={(newProd) => {
          setProducts(prev => [newProd, ...prev]);
          setSelectedProduct(newProd);
          fetchProducts();
          showCenteredNotification(
            'success',
            '3D Model Generated & Item Published',
            `"${newProd.title}" multi-angle photos converted to 3D spatial mesh texture map!`
          );
          open3DInspector(newProd);
        }}
      />

      {/* F12 — Live Delivery Tracking Modal (Injamamul Haque Fahim) */}
      <LiveTrackingMap
        job={trackingJob}
        isOpen={!!trackingJob}
        onClose={() => setTrackingJob(null)}
        viewerRole={user?.role || 'buyer'}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
