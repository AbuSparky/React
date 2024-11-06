const productmodel = require('../model/productmodel');

exports.getproducts =  async (req,res,next)=>{

    const query = req.query.keyword ? {name : {
        $regex : req.query.keyword,
        $options : 'i'
    }}:{}
    const products = await productmodel.find(query);

    res.json({
        success:true,
        message:"Getting all the products from getpeoducts function in productcontroller.js and get product details from data folder in product.json",
        products
    });
} 

exports.getsingleproduct = async (req,res,next)=>{

    try{
        const product = await productmodel.findById(req.params.id);

        res.json({
            success:true,
            message:"getting a single product from the getsingleproduct in productcontroller.js",
            product
        });

    }catch (error){

        res.status(404).json({
            success:false,
            message:"unable to get product error getting a single product from the getsingleproduct in productcontroller.js",
        });
    }

}