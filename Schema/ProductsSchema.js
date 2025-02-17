import mongoose from "mongoose";

const ShecmaProducts = new mongoose.Schema({

    username:{
        type: String,

    },

    email:{
        type: String,

    },

    password:{
        type: String,
  
    }

}) 

export default mongoose.model('Crud-Products', ShecmaProducts)