import express, { Router } from 'express'
import ProductsController from '../Controller/ProductsController.js'


const ProductsRoutes = Router()

ProductsRoutes.get('/', ProductsController.getAll)
ProductsRoutes.get('/:id', ProductsController.getOne)
ProductsRoutes.delete('/:id', ProductsController.delete)
ProductsRoutes.post('/', ProductsController.create)
ProductsRoutes.put('/:id', ProductsController.update)



export default ProductsRoutes