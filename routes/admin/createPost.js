const Product = require('../../models/product')

const adminCreate = async (req, res) => {
    // console.log("Name:", req.body.name)
    // console.log("Description:", req.body.description)
    // console.log("Price:", req.body.price)
    // console.log("Rating:", req.body.rating)
    // console.log("Image:", req.body.image)
    
    const newProduct ={
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        rating: req.body.rating,
        image: req.body.image
    }
    
    const product = await new Product(newProduct).save()
    console.log("New Product: ", product)
    res.redirect('/admin');
}


module.exports = adminCreate;



// //Mongoose implementation
    // const mongoose = require('mongoose');
    // const uri = "mongodb://shoppingcart:shoppingcart1234@cluster0-shard-00-00-v7o5p.mongodb.net:27017,cluster0-shard-00-01-v7o5p.mongodb.net:27017,cluster0-shard-00-02-v7o5p.mongodb.net:27017/shoppingcart?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority"
    // mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true});

    // //Mongoose Model (Work as a Schema)
    // const Product = mongoose.model('Product', {
    //     name: String,
    //     description: String,
    //     price: Number,
    //     rating: Number,
    //     image: String
    // });

   