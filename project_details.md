# Decorate3D: Smart C2C Used-Furniture & Interior Design Marketplace
## Detailed Project Document for Team Collaboration

This document provides a detailed breakdown of the proposed project, **Decorate3D**, a web application designed to revolutionize the peer-to-peer (C2C) second-hand furniture marketplace. It is built using the **MERN (MongoDB, Express, React, Node.js) stack** and features advanced integrations including Augmented Reality (AR), Artificial Intelligence (AI), Geospatial mapping, and secure Escrow transactions.

---

## 1. Project Overview & Problem Statement

### The Problem in C2C Used-Furniture Sales:
Buying second-hand furniture online (e.g., via Facebook Marketplace, Craigslist, or local classifieds) is plagued by four major friction points:
1. **Spatial Uncertainty**: Buyers cannot visualize if a sofa or wardrobe will physically fit in their room or match their current interior design.
2. **Quality/Condition Transparency**: Sellers often misrepresent the condition of items. Scratches, structural damage, and tears are hidden, and fair valuation is hard to establish.
3. **Logistical Hassles**: Transporting bulky furniture is expensive and complex. Buyers have to manually find pick-up trucks or couriers, with no upfront cost estimates.
4. **Transaction Scams**: C2C transactions suffer from high fraud rates—buyers are afraid of prepaying, and sellers are afraid of delivery disputes.

### The Solution:
**Decorate3D** solves these problems by providing an all-in-one ecosystem that embeds **AI-driven damage scanning**, **WebXR-based interactive 3D/AR spatial planning**, **automated distance-based logistics matchmaking**, and a **safe escrow financial clearing system**.

---

## 2. The 4 Unique Features (The "Wow" Factors)

Each group member owns one core technological "unique feature" along with the supporting features to form a complete module:

### Feature A: AI Furniture Condition & Damage Assessor (Member 1)
*   **How it Works**: Sellers upload high-resolution photos of the furniture item during listing. The system passes these images to an AI Vision API (e.g., Google Cloud Vision, OpenAI GPT-4o, or HuggingFace Diffusion models). The AI scans the images for tears, scratches, stains, or structural deformations, generates a localized visual bounding box overlay of the damage, and outputs a structured "Damage Report card" with a conditional grade (e.g., *Fair / Good / Excellent*).
*   **Value Proposition**: Instills buyer trust by providing an objective, AI-audited inspection report.

### Feature B: WebXR Augmented Reality (AR) Camera Overlay (Member 2)
*   **How it Works**: Utilizing WebXR Device API and Three.js in the browser (no mobile app download required), the buyer can open the listing on their smartphone and click "View in my Room". The mobile camera opens, tracks the floor plane, and overlays a scale-accurate 3D model of the furniture in their physical space.
*   **Value Proposition**: Allows buyers to check sizing and style compatibility in real-time, removing the risk of buying furniture that doesn't fit.

### Feature C: Dynamic Distance-Based Delivery Price Calculator (Member 3)
*   **How it Works**: Integrates with the Google Distance Matrix API. Upon viewing an item, the system calculates the exact transit distance and travel time from the seller's verified address to the buyer's location. It computes real-time pricing quotes using weight/dimension configurations and automatically requests bids from verified local logistics providers.
*   **Value Proposition**: Removes delivery pricing ambiguity, allowing buyers to check total cost (Item Price + Delivery) before checking out.

### Feature D: Automated Escrow Safe-Deposit Lock (Member 4)
*   **How it Works**: Using Stripe Connect/Stripe Escrow, when a buyer purchases an item, their payment is charged but held securely in the platform's escrow account. The funds are only transferred to the seller's bank account once delivery is confirmed via a secure OTP/QR exchange between the courier and buyer. If a dispute is raised, funds are locked until mediator resolution.
*   **Value Proposition**: Eradicates payment scams and ensures that both buyers and sellers are financially protected.

---

## 3. Technology Stack (MERN Stack)

*   **Language**: JavaScript
*   **Frontend**: React.js
*   **Styling**: Tailwind CSS & DaisyUI (DaisyUI is an open-source component plugin for Tailwind that speeds up styling for the group)
*   **Backend**: Node.js & Express.js
*   **Database**: MongoDB (MongoDB Atlas cloud)
*   **ODM**: Mongoose
*   **Deployment**: Vercel (Frontend and Backend serverless deployment)

---

## 4. Group Members Feature Allocation (16 Features)

To comply with the course guidelines:
1. **SSO Login, Sign Up, Profile, and Admin Activities** are excluded from the 16 features (handled as collaborative baseline code).
2. Each member implements **4 features**: 1 in Module 1, 1 in Module 2, and 2 in Module 3.
3. Each member has at least **1 external API integration**.

### Detailed Allocation Table:

| Module | Member 1 (AI Lead) | Member 2 (AR Lead) | Member 3 (Logistics Lead) | Member 4 (Financial Lead) |
| :--- | :--- | :--- | :--- | :--- |
| **Module 1** (Lab 5) | **F1: AI Furniture Damage Assessor**<br>*(API: OpenAI/Gemini Vision)* | **F5: Web-Based Interactive 3D Model Viewer** | **F9: Geo-Radius Seller & Item Map Finder**<br>*(API: Google Maps)* | **F13: Secure Stripe Checkout & Commission Split**<br>*(API: Stripe API)* |
| **Module 2** (Lab 6) | **F2: AI Smart Pricing & Valuation Engine** | **F6: Grid-Based 3D Visual Room Planner** | **F10: Dynamic Delivery Price Calculator**<br>*(API: Google Distance Matrix)* | **F14: Automated Escrow Safe-Deposit Lock** |
| **Module 3** (Lab 7) | **F3: Image-to-Furniture Semantic Visual Search** | **F7: WebXR AR Camera Overlay Visualizer**<br>*(API: WebXR/Three.js)* | **F11: Local Delivery Courier Bidding & Dispatch Hub** | **F15: OTP/QR Delivery Verification & Invoice Generator**<br>*(API: PDFKit)* |
| | **F4: Automatic Product Cataloging & Labeling** | **F8: AR Measurement Fit Validation Tool** | **F12: Live Courier Route GPS Tracker**<br>*(API: Google Directions)* | **F16: Interactive Escrow Dispute & Resolution Dashboard** |

---

## 5. Summary of Member Core API Integrations

*   **Member 1 (AI)**: Integrates **OpenAI GPT-4o Vision / Gemini API** to analyze listing images, identifying structural/cosmetic damage and outputting standard structured grades.
*   **Member 2 (AR)**: Integrates **WebXR Device API** alongside **Three.js** to access hardware-accelerated AR camera views directly in standard mobile browsers.
*   **Member 3 (Logistics)**: Integrates **Google Maps API suite** (JavaScript Maps, Distance Matrix, and Directions API) for radius searching, dynamic transport quote calculations, and live courier tracking.
*   **Member 4 (Finance)**: Integrates **Stripe / Stripe Connect APIs** to execute escrow holds, capture credit cards, partition platform commission, and release seller payouts.

---

## 6. Implementation Guide: Building Advanced Features for Free

As undergraduate students, you can build all 16 features on 100% free developer tiers without spending any real money. Here is the step-by-step technical plan for each member:

### Member 1: AI-Powered Used-Furniture Valuation & Quality Assessment (AI Lead)
1.  **F1 (AI Damage Assessor)**: Register for a free developer key at **Google AI Studio** to access the **Gemini 1.5 Flash API**. In your Express backend, write a controller that receives listing photos, forwards them to the Gemini API with a system instruction (prompting the model to find damages like scratches and tears), and requests structured JSON outputs. Gemini's developer tier is completely free (up to 15 requests/minute).
2.  **F2 (AI Valuation Engine)**: Implement a simple linear/multivariate regression formula in vanilla JavaScript in your backend. It takes the item age, original price, and the Gemini-audited condition grade (converted into numbers, e.g., Excellent=3, Good=2, Fair=1) to dynamically calculate a recommended selling price range.
3.  **F3 (Semantic Visual Search)**: Use **MongoDB Atlas Vector Search** (which is fully included in the free database tier). During listing, generate a visual embedding vector of the listing photo using a free NPM library like `@xenova/transformers` (running local inference) or Gemini's embedding models, and store it in MongoDB. For search, query the vector space to return similar styles.
4.  **F4 (Auto Tagging)**: Reuse the Gemini 1.5 Flash API. Send the image to the model and ask it to output tags (e.g. `["sofa", "leather", "brown"]`) to automatically fill database properties.

### Member 2: Augmented Reality & 3D Spatial Planning (AR Lead)
1.  **F5 (3D Model Viewer)**: Use **Three.js** or **React Three Fiber** (both are completely free, open-source JS packages) to load 3D models (GLTF/GLB files) on your React website. You can find free 3D furniture models on repositories like Sketchfab or TurboSquid for development.
2.  **F6 (3D Room Planner)**: Create a standard React canvas element. Represent the room dimensions as a grid (using basic HTML5 Canvas or Three.js objects) and bind user click-and-drag mouse events to update the X and Y coordinates of your furniture objects on the database.
3.  **F7 (WebXR AR Projection)**: Use standard client-side browser API: **WebXR Device API** supported by modern Android Chrome and iOS (via free WebXR Viewer apps or polyfills). It accesses the mobile camera feed directly and anchors the Three.js model onto a detected floor plane. No paid software needed.
4.  **F8 (AR Fit Tool)**: Access depth sensing estimates from the WebXR controller to measure distances, comparing bounding box width of the 3D model with mapped floor points to flag overlay warnings.

### Member 3: Geospatial Logistics & Carrier Dispatcher (Logistics Lead)
1.  **F9 (Seller Map Finder)**: Create a developer account on **Google Cloud Console** and activate the Google Maps JavaScript API. Google provides **$200 in free monthly credits**, which yields 28,000 free map loads every month. To prevent charges, set a budget cap of $0 in your Google developer settings.
2.  **F10 (Delivery Price Calculator)**: Use the **Google Distance Matrix API** (also covered by the $200 free monthly credit). Query it from your backend with the seller's and buyer's zip codes to get the routing distance and calculate a shipping quote (e.g., $1.50 per mile).
3.  **F11 (Courier Bidding Hub)**: Build a simple React component that displays "logistics requests" stored in your MongoDB database. Express controllers handle the driver's database update when they click "Accept Route".
4.  **F12 (Live GPS Tracker)**: Use the **Google Directions API** and the HTML5 Geolocation API (`navigator.geolocation`) in the driver's browser. It streams coordinates to your Express backend via WebSockets (using the free `socket.io` library) and displays the moving icon on the buyer's map.

### Member 4: Secure Transaction, Escrow, and Dispute Coordinator (Financial Lead)
1.  **F13 & F14 (Stripe Checkout & Escrow Lock)**: Register a developer account at **Stripe**. Use **Stripe Test Mode** (100% free), which provides standard sandbox API endpoints. When a buyer checks out, trigger a payment intent to hold funds in Stripe's free test accounts, releasing them to the seller's mock card only when delivery triggers.
2.  **F15 (OTP/QR Verification & Invoice)**: Use standard free packages on NPM: `qrcode` (to generate QR codes on the buyer's browser) and `pdfkit` (a free, lightweight node package to generate and email PDF invoice attachments).
3.  **F16 (Dispute Dashboard)**: Create a standard MERN CRUD model. Allow buyers to upload dispute images (saved for free in MongoDB using Base64 strings or free cloud storage like Cloudinary's free tier) and trigger message logs.
