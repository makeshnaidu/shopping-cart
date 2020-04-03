const admin = (req, res) => {

    const products = [
        {
            id:1,
            name: "Fender",
            description: "Falcon 5 elite gaming headset with LED lights",
            price: 199.99,
            rating: 5,
            image: "https://assets.shop.loblaws.ca/products_jpeg/20904659/en/20904659_sml_1_@1x.jpg"
        },
        {
            id:1,
            name: "HeadPhone",
            description: "Polaroid Premium Wired Headphoness",
            price: 19.99,
            rating: 5,
            image: "https://assets.shop.loblaws.ca/products_jpeg/20904659/en/20904659_sml_1_@1x.jpg"
        },
        {
            id:1,
            name: "Sony",
            description: "SonyHeadphones, Black MDRZX110B1 ea",
            price: 29.99,
            rating: 5,
            image: "https://assets.sellers.loblaw.ca/products/all/1090/29909_1.jpg"
        },
        {
            id:1,
            name: "Audio Cable",
            description: "AudiovoxHDMI Cable, 12 ft",
            price: 9.99,
            rating: 5,
            image: "https://assets.sellers.loblaw.ca/products/all/1090/29863_1.jpg"
        }
        
    ]

    res.render('admin/index', {products})
}


module.exports = admin;
