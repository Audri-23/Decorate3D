import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, ShieldCheck, Box, Eye, Heart, Share2, ShoppingCart, MapPin, Truck, ChevronRight, MessageCircle, X, Smartphone, Ruler } from 'lucide-react';
import { ShippingQuoteWidget } from '../features/f10-shipping-quote/ShippingQuoteWidget.jsx';

export const ProductDetailPage = ({ product, open3DInspector, onAddToCart, onLaunchRoomPlanner, onOpenARCamera, onOpenFitValidation }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // AI Assistant Chat States
  const [chatMessages, setChatMessages] = useState([
    { role: 'assistant', content: `Hello! I am your AI assistant for this listing. You can ask me anything about the ${product.title}, its materials, condition grade, or negotiate its price! I am also here to guide you to checkout.` }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Auto-scrolling Ref
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (isChatOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatMessages, isTyping, isChatOpen]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userMessage = { role: 'user', content: chatInput };
    const updatedMessages = [...chatMessages, userMessage];
    setChatMessages(updatedMessages);
    setChatInput('');
    setIsTyping(true);

    try {
      const res = await fetch('/api/modules/m3/ai-assistant/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          productId: product._id,
          messages: updatedMessages
        })
      });
      const data = await res.json();
      if (data.success && data.reply) {
        setChatMessages(prev => [...prev, { role: 'assistant', content: data.reply }]);
      } else {
        setChatMessages(prev => [...prev, { role: 'assistant', content: 'Sorry, I encountered an error. Please try again.' }]);
      }
    } catch (err) {
      console.error(err);
      setChatMessages(prev => [...prev, { role: 'assistant', content: 'Sorry, I cannot connect to the server right now.' }]);
    } finally {
      setIsTyping(false);
    }
  };

  if (!product) return null;

  const images = product.images && product.images.length > 0
    ? product.images
    : ["https://images.unsplash.com/photo-1580481072645-022f9a6d1276?w=800&auto=format&fit=crop&q=80"];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fadeIn">
      
      {/* Breadcrumb Navigation */}
      <div className="flex items-center space-x-2 text-xs font-mono text-gray-500 mb-6">
        <span>Marketplace</span>
        <ChevronRight className="w-3 h-3" />
        <span>{product.category}</span>
        <ChevronRight className="w-3 h-3" />
        <span className="text-[#A17A16] font-semibold">{product.title}</span>
      </div>

      {/* Main 2-Column Product Grid matching Screenshot 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Image & 3D Interactive Hero Preview (Cols 1-7) */}
        <div className="lg:col-span-7 space-y-4">
          
          {/* Main Clean Product Image Viewport */}
          <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-[#1E232A] shadow-xl border border-[#E5DEC9]">
            {/* Main Product Image */}
            <img
              src={images[selectedImageIndex] || images[0]}
              alt={product.title}
              className="w-full h-full object-cover transition-opacity duration-300"
            />

            {/* Top Left Badge: 3D Model & WebXR AR Ready */}
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#E5DEC9] flex items-center space-x-2 shadow-sm">
              <Smartphone className="w-4 h-4 text-[#A17A16]" />
              <span className="text-xs font-bold text-gray-800 tracking-wide">WebXR 1:1 AR Ready</span>
            </div>
          </div>

          {/* Action Buttons below Hero Image */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              onClick={() => open3DInspector(product)}
              className="gold-gradient-btn py-3.5 px-4 rounded-2xl font-mono text-xs font-bold tracking-wider flex items-center justify-center space-x-2 shadow-lg hover:scale-[1.01] transition-all border border-[#E9D3A4]/50"
            >
              <Box className="w-4 h-4 text-gray-900 animate-pulse" />
              <span>360° 3D INSPECTOR</span>
            </button>

            <button
              onClick={() => onOpenARCamera(product)}
              className="bg-[#1E232A] hover:bg-black text-[#E9D3A4] py-3.5 px-4 rounded-2xl font-mono text-xs font-bold tracking-wider flex items-center justify-center space-x-2 shadow-lg border border-[#E9D3A4]/40 hover:scale-[1.01] transition-all"
            >
              <Smartphone className="w-4 h-4 text-[#E9D3A4] animate-bounce" />
              <span>VIEW IN MY ROOM (AR)</span>
            </button>
          </div>

          {/* Thumbnail Gallery Row */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {images.map((imgUrl, index) => (
              <button
                key={index}
                onClick={() => setSelectedImageIndex(index)}
                className={`w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 transition-all relative ${
                  selectedImageIndex === index ? 'border-[#A17A16] ring-2 ring-[#A17A16]/20' : 'border-[#E5DEC9] opacity-70 hover:opacity-100'
                }`}
              >
                <img src={imgUrl} alt={`Angle ${index + 1}`} className="w-full h-full object-cover" />
                <span className="absolute bottom-0 right-0 bg-black/60 text-white text-[9px] px-1 font-mono">
                  {index === 0 ? 'Front' : (index === 1 ? 'Back' : (index === 2 ? 'Side' : 'Top'))}
                </span>
              </button>
            ))}

            {/* 3D Launch Thumbnail Button */}
            <button
              onClick={() => open3DInspector(product)}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl border-2 border-[#E5DEC9] hover:border-[#A17A16] bg-white flex flex-col items-center justify-center text-gray-700 hover:text-[#A17A16] transition-all group"
              title="Launch 3D Model Inspector"
            >
              <Box className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:scale-110" />
              <span className="text-[9px] sm:text-[10px] font-mono font-bold mt-1">3D VIEW</span>
            </button>

            {/* AR Launch Thumbnail Button */}
            <button
              onClick={() => onOpenARCamera(product)}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl border-2 border-[#E9D3A4] hover:border-[#A17A16] bg-[#F9F4E9] flex flex-col items-center justify-center text-[#A17A16] transition-all group shadow-sm"
              title="Launch WebXR AR Camera Overlay"
            >
              <Smartphone className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:scale-110" />
              <span className="text-[9px] sm:text-[10px] font-mono font-bold mt-1">AR VIEW</span>
            </button>

            {/* Room Planner Thumbnail Button */}
            <button
              onClick={onLaunchRoomPlanner}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl border-2 border-[#E5DEC9] hover:border-[#A17A16] bg-white flex flex-col items-center justify-center text-gray-700 hover:text-[#A17A16] transition-all group"
              title="Launch 3D Room Planner"
            >
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:scale-110 text-[#A17A16]" />
              <span className="text-[9px] sm:text-[10px] font-mono font-bold mt-1">PLANNER</span>
            </button>
          </div>
        </div>

        {/* Right Column: Product Metadata & Purchasing Info matching Screenshot 1 (Cols 8-12) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Top Badges Row matching Screenshot 1 */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="gold-badge text-[11px] px-3 py-1 rounded-md uppercase">
              AI VERIFIED CONDITION: {product.conditionGrade || 'GOOD'}
            </span>
            {product.isRareFind && (
              <span className="bg-[#F9F4E9] text-[#A17A16] border border-[#E9D3A4] text-[11px] font-bold px-3 py-1 rounded-md uppercase">
                RARE FIND
              </span>
            )}
          </div>

          {/* Product Title matching Screenshot 1 */}
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E232A] leading-tight">
            {product.title}
          </h1>

          {/* Price Row matching Screenshot 1 */}
          <div className="flex items-baseline space-x-4 border-b border-[#E5DEC9] pb-6">
            <span className="font-serif text-4xl font-bold text-[#A17A16]">
              ${product.price}
            </span>
            {product.estimatedNewPrice && (
              <span className="text-sm font-sans text-gray-500 line-through">
                ${product.estimatedNewPrice} Est. New
              </span>
            )}
          </div>

          {/* Craftsmanship Details Card matching Screenshot 1 */}
          <div className="bg-white rounded-2xl p-6 border border-[#E5DEC9] shadow-sm space-y-4">
            <h3 className="text-xs font-mono font-bold text-[#A17A16] uppercase tracking-wider">
              CRAFTSMANSHIP & PHYSICAL DIMENSIONS
            </h3>

            <p className="text-sm text-gray-600 leading-relaxed">
              {product.description}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-[#E5DEC9]/60 text-xs font-mono">
              <div className="bg-[#F9F4E9] p-2.5 rounded-xl border border-[#E9D3A4]">
                <span className="text-gray-500 font-bold uppercase block text-[9px]">WIDTH</span>
                <span className="font-bold text-[#A17A16] text-sm">{product.dimensions?.width || '32 in'}</span>
              </div>
              <div className="bg-[#F9F4E9] p-2.5 rounded-xl border border-[#E9D3A4]">
                <span className="text-gray-500 font-bold uppercase block text-[9px]">DEPTH</span>
                <span className="font-bold text-[#A17A16] text-sm">{product.dimensions?.depth || '35 in'}</span>
              </div>
              <div className="bg-[#F9F4E9] p-2.5 rounded-xl border border-[#E9D3A4]">
                <span className="text-gray-500 font-bold uppercase block text-[9px]">HEIGHT</span>
                <span className="font-bold text-[#A17A16] text-sm">{product.dimensions?.height || '34 in'}</span>
              </div>
            </div>
          </div>

          {/* Seller & Escrow Trust Details */}
          <div className="p-4 bg-[#F9F4E9] rounded-xl border border-[#E9D3A4] flex items-center justify-between text-xs">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-full bg-[#1E232A] text-white font-bold flex items-center justify-center font-serif text-sm">
                MA
              </div>
              <div>
                <span className="font-bold text-gray-900 block">{product.seller?.name || 'Muhtasim Ahmed'}</span>
                <span className="text-gray-500">Seller • {product.seller?.location || 'Dhaka, Bangladesh'}</span>
              </div>
            </div>
            <div className="flex items-center space-x-1 text-[#A17A16] font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>Escrow Protected</span>
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="space-y-3 pt-2">
            <button
              onClick={() => onAddToCart(product)}
              className="w-full gold-gradient-btn py-4 rounded-xl font-bold text-sm tracking-wide shadow-lg flex items-center justify-center space-x-2"
            >
              <ShoppingCart className="w-5 h-5" />
              <span>ADD TO CART (ESCROW SECURED)</span>
            </button>

            {/* F7 - WebXR AR View in My Room Button */}
            <button
              onClick={() => onOpenARCamera(product)}
              className="w-full bg-[#1E232A] hover:bg-black text-[#E9D3A4] font-mono font-bold py-3.5 rounded-xl text-sm border border-[#E9D3A4]/40 transition-all flex items-center justify-center space-x-2 shadow-lg"
            >
              <Smartphone className="w-4 h-4 text-[#E9D3A4]" />
              <span>VIEW IN MY ROOM (WEBXR 1:1 AR)</span>
            </button>

            {/* F8 - AR Measurement Fit Tool Button */}
            <button
              onClick={() => onOpenFitValidation(product)}
              className="w-full bg-white hover:bg-[#F9F4E9] text-gray-900 font-mono font-bold py-3.5 rounded-xl text-sm border border-[#E5DEC9] transition-all flex items-center justify-center space-x-2 shadow-sm"
            >
              <Ruler className="w-4 h-4 text-[#A17A16]" />
              <span>MEASURE &amp; VALIDATE ROOM FIT</span>
            </button>
          </div>

          <ShippingQuoteWidget product={product} />

        </div>
      </div>

      {/* Floating Chat Assistant Trigger Button */}
      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed bottom-6 right-6 z-50 bg-[#1E232A] hover:bg-black text-[#E9D3A4] p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center border border-[#E9D3A4]/30 hover:rotate-6 group"
        title="Chat with AI Shop Assistant"
      >
        <MessageCircle className="w-6 h-6 text-[#E9D3A4]" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-32 group-hover:ml-2 font-mono text-[10px] font-bold tracking-wider transition-all duration-300 uppercase whitespace-nowrap text-white">
          AI Assistant
        </span>
      </button>

      {/* Sliding AI Shop Assistant Drawer */}
      <div className={`fixed top-0 right-0 h-full w-96 max-w-full bg-white border-l border-[#E5DEC9] z-50 shadow-2xl flex flex-col transition-all duration-300 ease-in-out transform ${
        isChatOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Drawer Header */}
        <div className="bg-[#1E232A] text-white p-4 flex items-center justify-between border-b border-[#E9D3A4]/30 shadow-md">
          <div className="flex items-center space-x-2.5">
            <Sparkles className="w-4 h-4 text-[#E9D3A4] animate-pulse" />
            <div>
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#E9D3A4]">
                AI Shop Assistant
              </h3>
              <span className="text-[10px] text-gray-400 font-mono">Negotiator & Info Desk</span>
            </div>
          </div>
          <button
            onClick={() => setIsChatOpen(false)}
            className="text-gray-400 hover:text-white p-1 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages Viewport */}
        <div className="flex-1 p-4 space-y-4 overflow-y-auto bg-[#FBF9F5] text-xs flex flex-col scrollbar-thin">
          {chatMessages.map((msg, index) => (
            <div key={index} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
              <span className="text-[9px] font-mono text-gray-400 mb-0.5">{msg.role === 'user' ? 'You' : 'Assistant'}</span>
              <div className={`p-3.5 rounded-2xl max-w-[85%] leading-relaxed shadow-sm ${
                msg.role === 'user'
                  ? 'bg-[#1E232A] text-white rounded-tr-none'
                  : 'bg-white text-gray-800 rounded-tl-none border border-[#E5DEC9]'
              }`}>
                {msg.content}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex items-center space-x-1.5 text-gray-400 font-mono text-[10px] pl-1 animate-pulse">
              <span>AI is formulating a reply</span>
              <span className="animate-bounce">.</span>
              <span className="animate-bounce delay-100">.</span>
              <span className="animate-bounce delay-200">.</span>
            </div>
          )}
          {/* Scroll target */}
          <div ref={chatEndRef} />
        </div>

        {/* Footer Chat Input */}
        <form onSubmit={handleSendMessage} className="p-4 border-t border-[#E5DEC9] bg-white flex gap-2">
          <input
            type="text"
            value={chatInput}
            onChange={(e) => setChatInput(e.target.value)}
            placeholder="Ask about dimensions or negotiate price..."
            className="flex-1 bg-[#FBF9F5] border border-[#E5DEC9] px-3.5 py-2.5 rounded-xl text-xs focus:outline-none focus:border-[#A17A16]"
            disabled={isTyping}
          />
          <button
            type="submit"
            disabled={isTyping || !chatInput.trim()}
            className="bg-[#1E232A] hover:bg-black text-[#E9D3A4] px-4 rounded-xl text-xs font-bold font-mono transition-all disabled:opacity-50 flex items-center justify-center"
          >
            Send
          </button>
        </form>
      </div>

      {/* Backdrop Overlay when drawer is open */}
      {isChatOpen && (
        <div
          onClick={() => setIsChatOpen(false)}
          className="fixed inset-0 bg-black/45 backdrop-blur-sm z-45 transition-opacity duration-300 animate-fadeIn"
        />
      )}

    </div>
  );
};
