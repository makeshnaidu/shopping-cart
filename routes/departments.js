const Product = require('../models/product')

const departments = async (req, res) => {
    const products = await Product.find().exec();
    res.render('departments', { products })
}

module.exports = departments;
