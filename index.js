import express from 'express'
import 'dotenv/config'
import dbClient from './config/dbClient.js';
import bodyParser from 'body-parser';
import ProductsRoutes from './Routes/ProductsRoutes.js';

const app = express()
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use("/products", ProductsRoutes)




try {

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, ()=> console.log('Successfull connection to the Port: ', PORT))
} catch (error) {
    console.log(error.message);
    
}


process.on('SIGINT', ()=>{
    dbClient.exitConnection()
    console.log("Connection to the database is closed");
    process.exit(0)
    
})