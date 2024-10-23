const Product = require('../models/product'); // Import the Product model

// getProducts -- get All Products
exports.getProducts = async (req, res) => { 
    try { 
        const products = await Product.find(); 
        res.status(200).json(products); 
    } catch (err) { 
        res.status(500).json({ message: err.message }); 
    } 
};

// getProduct -- get Specific Product By Id
exports.getProduct = async (req, res) => {
    try { 
        const { id } = req.params;
        const product = await Product.findById(id);
        if (!product) return res.status(404).json({ message: 'Product not found' }); 
        res.status(200).json(product); 
    } catch (err) { 
        res.status(500).json({ message: err.message }); 
    }
};

// createProduct -- create New Product
exports.createProduct = async (req, res) => {
    const { product_name, product_type, price, unit } = req.body;
    const product = new Product({ product_name, product_type, price, unit });
    try { 
        const newProduct = await product.save();
        res.status(201).json(newProduct); 
    } catch (err) { 
        res.status(400).json({ message: err.message }); 
    }
};

// updateProduct -- update Product by specific Id
exports.updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);

        if (!product) return res.status(404).json({ message: 'Product not found' });

        const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedProduct) return res.status(404).json({ message: 'Failed to update product' });

        res.status(200).json(updatedProduct);
    } catch (err) { 
        res.status(400).json({ message: err.message }); 
    }
};

// deleteProduct -- delete Product by specific Id
exports.deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);

        if (!product) return res.status(404).json({ message: 'Product not found' });

        await Product.findByIdAndDelete(id);

        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (err) { 
        res.status(400).json({ message: err.message }); 
    }
};
