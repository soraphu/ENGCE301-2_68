// ============================================
// CONTROLLER LAYER - Products
// ============================================

const ProductService = require('../services/product.service');

class ProductController {
    // ===== GET ALL =====
    // ✅ ให้โค้ดสมบูรณ์
    static async getAllProducts(req, res) {
        try {
            const products = await ProductService.getAllProducts();

            res.json({
                success: true,
                count: products.length,
                data: products
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                error: error.message
            });
        }
    }

    // ===== GET BY ID =====
    // ⚠️ นักศึกษาเติม Error Handling
    static async getProductById(req, res) {
        try {
            const { id } = req.params;
            const product = await ProductService.getProductById(id);

            res.json({
                success: true,
                data: product
            });
        } catch (error) {
            // TODO: จัดการ Error ให้เหมาะสม
            // ถ้า "not found" → 404
            // อื่นๆ → 500
            if (err.name === 'Not Found') {
                return res.status(404).json({ 
                    success: false,
                    error: '404 ไม่พบข้อมูล' 
                });
            } else {
                return res.status(500).json({ 
                    success: false,
                    error: `500 ${error.message}` 
                }) ;
            }//ifelse
        }
    }
    
    // ===== CREATE =====
    // ⚠️ นักศึกษาเติมโค้ด
    static async createProduct(req, res) {
        try {
            const productData = req.body ;
            // Validate using helper method
            await ProductService.validateProductData(productData);
            
            // Create product
            const newProduct = await ProductService.createProduct(productData);
            return newProduct ;
        } catch (error) {
            throw new Error(`Failed to create product: ${error.message}`);
        }
    }
    
    // ===== UPDATE =====
    // ⚠️ นักศึกษาเติมโค้ดทั้งหมด
    static async updateProduct(req, res) {
        try {
            const { id } = req.params ;
            const data = req.body ;
            // TODO: เขียนโค้ดทั้งหมด
            ProductDB.update(  ) ;
        } catch (error) {
            // TODO: Error handling
            throw new Error(`Failed to update product: ${error.message}`);
        }
    }
    
    // ===== DELETE =====
    // ⚠️ นักศึกษาเติมโค้ดทั้งหมด
    static async deleteProduct(req, res) {
        try {
            const id = req.params ;
            // TODO: เขียนโค้ดทั้งหมด
            ProductService.deleteProduct( id ) ;
            return "Product deleted" ;
        } catch (error) {
            // TODO: Error handling
            throw new Error(`Failed to delete product: ${error.message}`);
        }
    }

    // ===== SEARCH =====
    // ✅ ให้โค้ดสมบูรณ์
    static async searchProducts(req, res) {
        try {
            const { q } = req.query;
            if (!q) {
                return res.status(400).json({
                    success: false,
                    error: 'Search keyword is required'
                });
            }

            const products = await ProductService.searchProducts(q);

            res.json({
                success: true,
                count: products.length,
                data: products
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                error: error.message
            });
        }
    }
}

module.exports = ProductController;