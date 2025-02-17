import mongoose from "mongoose";

class connectionDatabase{


    constructor(){
        this.connectionDB()
    }
    
    
    
    async connectionDB(){
        const QueryString = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_CONNECT}/ListaDeTareasBackend?retryWrites=true&w=majority`
        await mongoose.connect(QueryString)
        console.log("Successfull connection to the database MongoAtlas");
        

    }

    async exitConnection(){
        await mongoose.disconnect()
        

    }
}

export default new connectionDatabase