   
   
   //Mongoose implementation
    const mongoose = require('mongoose');
    // const uri = "mongodb://shoppingcart:shoppingcart1234@cluster0-shard-00-00-v7o5p.mongodb.net:27017,cluster0-shard-00-01-v7o5p.mongodb.net:27017,cluster0-shard-00-02-v7o5p.mongodb.net:27017/shoppingcart?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority"
    // mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true});

    //Mongoose Model (Work as a Scheme)
    const Product = mongoose.model('Product', {
        name: String,
        description: String,
        price: Number,
        rating: Number,
        image: String
    });

    module.exports = Product;