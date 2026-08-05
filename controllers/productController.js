import { seedProductsData } from '../models/seedData.js';
import { ProductModel } from '../models/ProductModel.js';

export const getProducts = async (req, res) => {
  try {
    const { category, condition, search } = req.query;
    let products = [];

    // Check if database connection is live, otherwise use in-memory seed dataset
    try {
      products = await ProductModel.find().lean();
      if (!products || products.length === 0) {
        products = [...seedProductsData];
      } else {
        // Merge any in-memory products created during session that aren't in DB yet
        const dbIds = new Set(products.map(p => p._id ? p._id.toString() : ''));
        seedProductsData.forEach(p => {
          if (p._id && !dbIds.has(p._id.toString())) {
            products.unshift(p);
          }
        });
      }
    } catch {
      products = [...seedProductsData];
    }

    if (category && category !== 'All') {
      products = products.filter(p => p.category && p.category.toLowerCase() === category.toLowerCase());
    }

    if (condition && condition !== 'All') {
      products = products.filter(p => p.conditionGrade && p.conditionGrade.toLowerCase() === condition.toLowerCase());
    }

    if (search) {
      const q = search.toLowerCase();
      products = products.filter(p => (p.title && p.title.toLowerCase().includes(q)) || (p.description && p.description.toLowerCase().includes(q)));
    }

    return res.status(200).json({ success: true, count: products.length, data: products });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    let product;

    try {
      product = await ProductModel.findById(id).lean();
    } catch {
      product = seedProductsData.find(p => p._id === id);
    }

    if (!product) {
      product = seedProductsData.find(p => p._id === id) || seedProductsData[0];
    }

    return res.status(200).json({ success: true, data: product });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const get3DModelSpecs = async (req, res) => {
  try {
    const { id } = req.params;
    let product;
    try {
      product = await ProductModel.findById(id).lean();
    } catch {
      product = seedProductsData.find(p => p._id === id);
    }
    if (!product) {
      product = seedProductsData.find(p => p._id === id) || seedProductsData[0];
    }
    return res.status(200).json({
      success: true,
      productId: product._id,
      model3D: product.model3D
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// POST /api/products/upload - File upload endpoint for images and GLB models
export const uploadFiles = async (req, res) => {
  try {
    const files = req.files || [];
    const fileData = { images: [], model3DUrl: '' };

    files.forEach((file) => {
      const ext = file.originalname.toLowerCase();
      if (ext.endsWith('.glb') || ext.endsWith('.gltf')) {
        fileData.model3DUrl = `/uploads/models/${file.filename}`;
      } else {
        fileData.images.push(`/uploads/images/${file.filename}`);
      }
    });

    return res.status(200).json({
      success: true,
      message: 'Files uploaded successfully to local storage.',
      data: fileData
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// POST /api/products - Create furniture product
export const createProduct = async (req, res) => {
  try {
    const productData = { ...req.body };

    // Strip custom string _id if it's not a valid 24-char hex ObjectId
    if (productData._id && typeof productData._id === 'string' && !productData._id.match(/^[0-9a-fA-F]{24}$/)) {
      delete productData._id;
    }

    let newProduct;

    try {
      newProduct = await ProductModel.create(productData);
      if (newProduct && newProduct.toObject) {
        newProduct = newProduct.toObject();
      }
    } catch (dbErr) {
      console.warn('[Database Notice] Fallback to memory store:', dbErr.message);
      newProduct = {
        _id: 'prod_' + Date.now(),
        ...productData,
        createdAt: new Date()
      };
    }

    // Always push to in-memory seed dataset so all roles see newly created products immediately
    const existingIndex = seedProductsData.findIndex(p => String(p._id) === String(newProduct._id));
    if (existingIndex === -1) {
      seedProductsData.unshift(newProduct);
    }

    return res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// PUT /api/products/:id - Update furniture product
export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    let updatedProduct;

    try {
      updatedProduct = await ProductModel.findByIdAndUpdate(id, req.body, { new: true });
    } catch {
      const index = seedProductsData.findIndex(p => p._id === id);
      if (index !== -1) {
        seedProductsData[index] = { ...seedProductsData[index], ...req.body };
        updatedProduct = seedProductsData[index];
      }
    }

    if (!updatedProduct) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }

    return res.status(200).json({ success: true, data: updatedProduct });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// DELETE /api/products/:id - Delete furniture product
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    try {
      await ProductModel.findByIdAndDelete(id);
    } catch {
      const index = seedProductsData.findIndex(p => p._id === id);
      if (index !== -1) {
        seedProductsData.splice(index, 1);
      }
    }

    return res.status(200).json({ success: true, message: 'Product deleted successfully' });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

