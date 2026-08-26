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
import { DisputeDashboard } from './features/f16-disputes/DisputeDashboard.jsx';
import { WebXRARModal } from '../features/f7-f8-ar-visualizer/WebXRARModal.jsx';
import { ARFitValidationModal } from '../features/f7-f8-ar-visualizer/ARFitValidationModal.jsx';

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
  const [isARModalOpen, setIsARModalOpen] = useState(false);
  const [isFitModalOpen, setIsFitModalOpen] = useState(false);
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

  // URL Path & Tab Route Mapper
  const TAB_URL_MAP = {
    marketplace: '/',
    room_planner: '/room-planner',
    geo_map: '/map-search',
    seller_dashboard: '/seller',
    logistics: '/courier',
    admin_dashboard: '/admin',
    admin_disputes: '/admin-disputes',
    escrow_vault: '/escrow-vault',
    seller_escrow: '/seller-escrow',
    profile: '/profile'
  };

  const getTabFromPath = (pathStr) => {
    const p = (pathStr || '/').toLowerCase();
    if (p.includes('/admin-disputes')) return 'admin_disputes';
    if (p.includes('/seller-escrow')) return 'seller_escrow';
    if (p.includes('/seller')) return 'seller_dashboard';
    if (p.includes('/courier')) return 'logistics';
    if (p.includes('/admin')) return 'admin_dashboard';
    if (p.includes('/room-planner')) return 'room_planner';
    if (p.includes('/map-search') || p.includes('/geo')) return 'geo_map';
    if (p.includes('/escrow-vault')) return 'escrow_vault';
    if (p.includes('/profile')) return 'profile';
    if (p.includes('/product/')) return 'product_detail';
    return 'marketplace';
  };

  const changeTab = (newTab, productToSet = null, pushToHistory = true) => {
    setActiveTab(newTab);
    if (productToSet) {
      setSelectedProduct(productToSet);
    }

    if (pushToHistory) {
      let targetUrl = TAB_URL_MAP[newTab] || '/';
      if (newTab === 'product_detail' && (productToSet?._id || selectedProduct?._id)) {
        const idToUse = productToSet?._id || selectedProduct?._id;
        targetUrl = `/product/${idToUse}`;
      }
      if (window.location.pathname !== targetUrl) {
        window.history.pushState({ tab: newTab, productId: productToSet?._id }, '', targetUrl);
      }
    }
  };

  // URL Path Synchronization & Browser History (Back/Forward Popstate Listener)
  useEffect(() => {
    const syncRouteFromPath = () => {
      const path = window.location.pathname;
      const targetTab = getTabFromPath(path);

      if (path.includes('/product/')) {
        const prodId = path.split('/product/')[1];
        if (prodId && products && products.length > 0) {
          const found = products.find(p => String(p._id) === String(prodId));
          if (found) setSelectedProduct(found);
        }
      }

      if (targetTab === 'seller_dashboard') {
        setActiveRoleRoute('seller');
      } else if (targetTab === 'logistics') {
        setActiveRoleRoute('courier');
      } else if (targetTab === 'admin_dashboard' || targetTab === 'admin_disputes') {
        setActiveRoleRoute('admin');
      } else if (targetTab === 'marketplace') {
        setActiveRoleRoute('buyer');
      }

      setActiveTab(targetTab);
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

  // Fetch real backend products & sync persistent local custom products
  const fetchProducts = () => {
    const sanitizeProductGlb = (p) => {
      if (!p) return p;
      let url = p.model3D?.url || p.modelUrl || p.model3DUrl || p.url || '';
      if (!url || url.startsWith('blob:') || (p.title || '').toLowerCase().includes('divan')) {
        url = '/uploads/models/victorian_lounge_sofa-1785965996790-766675802.glb';
      }
      return {
        ...p,
        modelUrl: url,
        model3D: {
          ...(p.model3D || {}),
          url: url
        }
      };
    };

    fetch('/api/products')
      .then(res => res.json())
      .then(data => {
        let apiProds = (data.success && data.data && data.data.length > 0) ? data.data : seedProductsData;
        apiProds = apiProds.map(sanitizeProductGlb);
        setProducts(prev => {
          const existingIds = new Set(apiProds.map(p => String(p._id)));
          const savedCustomProds = localStorage.getItem('decorate3d_custom_products');
          let customList = [];
          if (savedCustomProds) {
            try { customList = (JSON.parse(savedCustomProds) || []).map(sanitizeProductGlb); } catch(e){}
          }
          const stateCustom = (prev || []).filter(p => !seedProductsData.some(sp => String(sp._id) === String(p._id)));
          const allCustom = [...stateCustom, ...customList].map(sanitizeProductGlb);
          const uniqueCustom = allCustom.filter((cp, idx, self) =>
            !existingIds.has(String(cp._id)) && self.findIndex(t => String(t._id) === String(cp._id)) === idx
          );
          return [...uniqueCustom, ...apiProds];
        });
      })
      .catch(() => {
        const savedCustomProds = localStorage.getItem('decorate3d_custom_products');
        if (savedCustomProds) {
          try {
            const customList = JSON.parse(savedCustomProds);
            if (Array.isArray(customList) && customList.length > 0) {
              setProducts(prev => {
                const existingIds = new Set(seedProductsData.map(p => String(p._id)));
                const stateCustom = (prev || []).filter(p => !existingIds.has(String(p._id)));
                const allCustom = [...stateCustom, ...customList];
                const uniqueCustom = allCustom.filter((cp, idx, self) =>
                  !existingIds.has(String(cp._id)) && self.findIndex(t => String(t._id) === String(cp._id)) === idx
                );
                return [...uniqueCustom, ...seedProductsData];
              });
            }
          } catch (e) {}
        }
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const open3DInspector = (productToInspect = null) => {
    if (productToInspect) {
      setSelectedProduct(productToInspect);
    }
    setIs3DInspectorOpen(true);
  };

  const close3DInspector = () => {
    setIs3DInspectorOpen(false);
  };

  const openARCamera = (productToView = null) => {
    if (productToView) {
      setSelectedProduct(productToView);
    }
    setIsARModalOpen(true);
  };

  const closeARCamera = () => {
    setIsARModalOpen(false);
  };

  const openFitValidation = (productToView = null) => {
    if (productToView) {
      setSelectedProduct(productToView);
    }
    setIsFitModalOpen(true);
  };

  const closeFitValidation = () => {
    setIsFitModalOpen(false);
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
        setActiveTab={(tab) => changeTab(tab)}
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
              changeTab('product_detail', p);
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
            onOpenARCamera={openARCamera}
            onOpenFitValidation={openFitValidation}
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
          <CourierDispatchBoard
            user={user}
            onNotify={showCenteredNotification}
            onTrackJob={(job) => setTrackingJob(job)}
          />
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
          <EscrowVaultPage user={user} onTrackJob={(job) => setTrackingJob(job)} />
        )}

        {/* Seller Escrow Release Panel — Seller enters buyer OTP to unlock funds */}
        {activeTab === 'seller_escrow' && (
          <SellerEscrowPanel user={user} onTrackJob={(job) => setTrackingJob(job)} />
        )}

        {/* Admin Disputes — F16 Dispute & Mediation Dashboard */}
        {activeTab === 'admin_disputes' && (
          <DisputeDashboard />
        )}
      </main>

      {/* 360° Volumetric 3D Inspector Modal */}
      <Viewer3DModal
        product={selectedProduct}
        isOpen={is3DInspectorOpen}
        onClose={close3DInspector}
        onAddToCart={handleAddToCart}
        onLaunchAR={() => {
          close3DInspector();
          openARCamera(selectedProduct);
        }}
      />

      {/* Module 3 Feature 3 (F7) — WebXR AR Camera Overlay Visualizer */}
      <WebXRARModal
        product={selectedProduct}
        isOpen={isARModalOpen}
        onClose={closeARCamera}
        onOpenFitValidation={(p) => {
          closeARCamera();
          openFitValidation(p);
        }}
      />

      {/* Module 3 Feature 4 (F8) — AR Measurement Fit Validation Tool */}
      <ARFitValidationModal
        product={selectedProduct}
        isOpen={isFitModalOpen}
        onClose={closeFitValidation}
        onLaunchAROverlay={(p) => {
          closeFitValidation();
          openARCamera(p);
        }}
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
          if (authenticatedUser.role === 'courier') {
            setActiveTab('logistics');
            setActiveRoleRoute('courier');
            window.history.pushState(null, '', '/courier');
          } else if (authenticatedUser.role === 'seller') {
            setActiveTab('seller_dashboard');
            setActiveRoleRoute('seller');
            window.history.pushState(null, '', '/seller');
          } else if (authenticatedUser.role === 'admin') {
            setActiveTab('admin_dashboard');
            setActiveRoleRoute('admin');
            window.history.pushState(null, '', '/admin');
          }
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
        onNavigateToMarketplace={() => changeTab('marketplace')}
        onAddProduct={(newProd) => {
          try {
            const existingCustom = localStorage.getItem('decorate3d_custom_products');
            let list = existingCustom ? JSON.parse(existingCustom) : [];
            list = [newProd, ...list.filter(p => String(p._id) !== String(newProd._id))];
            localStorage.setItem('decorate3d_custom_products', JSON.stringify(list));
          } catch (e) {}
          setProducts(prev => [newProd, ...prev]);
          setSelectedProduct(newProd);
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
