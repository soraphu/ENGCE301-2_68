// ============================================
// ROUTER LAYER - Products
// ============================================

const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/product.controller');

// ===== ROUTES =====

// GET /api/products - Get all products
router.get('/', ProductController.getAllProducts);

// GET /api/products/search?q=keyword - Search products
router.get('/search', ProductController.searchProducts);

// GET /api/products/:id - Get product by ID
router.get('/:id', ProductController.getProductById);

// POST /api/products - Create product
// // ⚠️ นักศึกษาเติม
// router.post( '', ProductController );

// // PUT /api/products/:id - Update product
// // ⚠️ นักศึกษาเติม
// router.put( '', ProductController );

// // DELETE /api/products/:id - Delete product
// // ⚠️ นักศึกษาเติม
// router.delete( '', ProductController );

module.exports = router;