const mongoose = require('mongoose');
const Product = require('../../models/product')
const uri = "mongodb://shoppingcart:shoppingcart1234@cluster0-shard-00-00-v7o5p.mongodb.net:27017,cluster0-shard-00-01-v7o5p.mongodb.net:27017,cluster0-shard-00-02-v7o5p.mongodb.net:27017/shoppingcart?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority"
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true});

const adminDelete = async (req, res) => {
    const idToDelete = req.params.id;
    const document = await Product.findById(idToDelete).exec();
    // //Delete the image
    // deleteImage(document.image);
    //Delete object from database
    await Product.deleteOne({ _id: idToDelete }).exec();
    res.redirect('/admin')
}


module.exports = adminDelete;