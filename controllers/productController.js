import { seedProductsData } from '../models/seedData.js';
import { ProductModel } from '../models/ProductModel.js';

export const getProducts = async (req, res) => {
  try {
    const { category, condition, search } = req.query;
    let products;

    // Check if database connection is live, otherwise use in-memory seed dataset
    try {
      products = await ProductModel.find().lean();
      if (!products || products.length === 0) {
        products = seedProductsData;
      }
    } catch {
      products = seedProductsData;
    }

    if (category && category !== 'All') {
      products = products.filter(p => p.category.toLowerCase() === category.toLowerCase());
    }

    if (condition && condition !== 'All') {
      products = products.filter(p => p.conditionGrade.toLowerCase() === condition.toLowerCase());
    }

    if (search) {
      const q = search.toLowerCase();
      products = products.filter(p => p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q));
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
    const product = seedProductsData.find(p => p._id === id) || seedProductsData[0];
    return res.status(200).json({
      success: true,
      productId: product._id,
      model3D: product.model3D
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
