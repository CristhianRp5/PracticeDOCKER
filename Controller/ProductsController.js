import ProductsModel from "../Model/ProductsModel.js";

class ProductsContoller{

    async create(req, res){
        try {

            const data = await ProductsModel.create(req.body)
            res.status(201).json({ message: "Successfully created product", data });            
        } catch (error) {
            res.status(500).json({ message: "Error creating product", error: error.message });
            
            
            
        }   
    }

    async delete(req, res){
        try {
            const {id} = req.params
            const data = await ProductsModel.delete(id)
            res.status(201).json({ message: "Successfully delete product", data });

        } catch (error) {

            res.status(500).json({ message: "Error delete product", error: error.message });

            
        }   
    }

    async update(req, res){
        try {
            const {id} = req.params
            const data = ProductsModel.update(id, req.body)
            res.status(201).json({ message: "Successfully update product", data });

        } catch (error) {
            res.status(500).json({ message: "Error update product", error: error.message });
        }   
    }

    async getAll(req, res){
        try {

            const data = await ProductsModel.getAll(req.body)
            res.status(201).json({ message: "Successfully getAll product", data });
            
        } catch (error) {

            res.status(500).json({ message: "Error getAll product", error: error.message });
            
        }   
    }

    async getOne(req, res){
        try {

            const {id} = req.params
            const data = await ProductsModel.getOne(id, req.body)
            res.status(201).json({ message: "Successfully getOne product", data });
            
        } catch (error) {
            res.status(500).json({ message: "Error getOne product", error: error.message });
            
        }   
    }

}

export default new ProductsContoller;