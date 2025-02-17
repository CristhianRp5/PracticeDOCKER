import mongoose from "mongoose";
import Products from "../Schema/ProductsSchema.js"


class ProductsModel{


    async  delete(id){
        return await Products.findOneAndDelete({_id: new mongoose.Types.ObjectId(id)}, {new: true})
    }

    async  update(id, products){
        return await Products.findOneAndUpdate({_id: new mongoose.Types.ObjectId(id) },products, {new: true})
    }

    async  create(products){
        return await Products.create(products)
    }

    async  getAll(){
        return await Products.find()
    }

    async  getOne(id){
        return await Products.findOne({_id: new mongoose.Types.ObjectId(id)})
    }

}

export default new ProductsModel;