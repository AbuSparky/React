const ordermodel = require('../model/ordermodel');
const productmodel = require('../model/productmodel');

exports.createorder = async (req,res,next)=>{

    // console.log(req.body);

    const cartItems = req.body;
    const amount  = Number(cartItems.reduce((acc,item)=>( acc + item.product.price * item.qty),0)).toFixed(3);
    // console.log(amount,"AMOUNT");
    const status = 'Pending';

    const order = await ordermodel.create({
        cartItems,
        amount,
        status,
    }) 

    cartItems.forEach(async (item)=>{
        const product = await productmodel.findById(item.product._id);
        product.stock = product.stock - item.qty;
        await product.save();
    })


    res.json({
        success:true,
        message:"order from create order function in ordercontroller.js",
        order
    });
}