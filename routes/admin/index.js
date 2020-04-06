const mongoose = require('mongoose');
const Product = require('../../models/product')
const admin = async (req, res) => {
    const products = await Product.find().exec();
    res.render('admin/index', { products })
}

module.exports = admin;


    
    // //Mongoose implementation
    // const mongoose = require('mongoose');
    // const uri = "mongodb://shoppingcart:shoppingcart1234@cluster0-shard-00-00-v7o5p.mongodb.net:27017,cluster0-shard-00-01-v7o5p.mongodb.net:27017,cluster0-shard-00-02-v7o5p.mongodb.net:27017/shoppingcart?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority"
    // mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true});

    // //Mongoose Model (Work as a Scheme)
    // const Product = mongoose.model('Product', {
    //     name: String,
    //     description: String,
    //     price: Number,
    //     rating: Number,
    //     image: String
    // });

    

    // const products = [
    //     {
    //         id:1,
    //         name: "Fender",
    //         description: "Falcon 5 elite gaming headset with LED lights",
    //         price: 199.99,
    //         rating: 5,
    //         image: "https://assets.shop.loblaws.ca/products_jpeg/20904659/en/20904659_sml_1_@1x.jpg"
    //     },
        // {
        //     id:1,
        //     name: "HeadPhone",
        //     description: "Polaroid Premium Wired Headphoness",
        //     price: 19.99,
        //     rating: 5,
        //     image: "https://assets.shop.loblaws.ca/products_jpeg/20904659/en/20904659_sml_1_@1x.jpg"
        // },
        // {
        //     id:1,
        //     name: "Sony",
        //     description: "SonyHeadphones, Black MDRZX110B1 ea",
        //     price: 29.99,
        //     rating: 5,
        //     image: "https://assets.sellers.loblaw.ca/products/all/1090/29909_1.jpg"
        // },
        // {
        //     id:1,
        //     name: "Audio Cable",
        //     description: "AudiovoxHDMI Cable, 12 ft",
        //     price: 9.99,
        //     rating: 5,
        //     image: "https://assets.sellers.loblaw.ca/products/all/1090/29863_1.jpg"
        // }
        
    // ]
    
   
