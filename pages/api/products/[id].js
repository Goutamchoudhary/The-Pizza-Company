import dbConnect from "../../../Util/DBconnect";
import Product from "../../../models/Product";


export default async function handler(req, res) {
    const {method, query: { id }, cookies} = req;

    const token = cookies.token;
    await dbConnect();

    if(method === "GET"){
        try{
            const product = await Product.findById({_id: id});
            res.status(200).json(product);
        }catch(err){
            res.status(500).json(err);
        }
    }
    if(method === "PUT"){
        if(!token || token !== process.env.TOKEN){
            return res.status(401).json("Not Authenticated");
        }
        try{
            const product = await Order.findByIdAndUpdate(id, req.body, {new:true});
            res.status(200).json(product);
        }catch(err){
            res.status(500).json(err);
        }
    }
    if(method === "DELETE"){
        if(!token || token !== process.env.TOKEN){
            return res.status(401).json("Not Authenticated");
        }
        try{
            await Product.findByIdAndDelete(id);
            res.status(20).json("The product has been deleted!");
        }catch(err){
            res.status(500).json(err);
        }
    }
}