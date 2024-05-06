
import productController from '../../adaptor/controllers/productController'
import productRepository from '../repository/productRepository'
import productUseCase from '../../useCase/productUseCase'
import express from "express"

const repository = new productRepository()


const productCase = new productUseCase(repository)
const controller = new productController(productCase)

const router = express.Router()

router.post('/createProduct', (req, res) => { controller.addProduct(req, res) });
router.get('/getSingleProduct',(req,res)=>{controller.getSingleProduct(req,res)})
router.get('/p',(req,res)=>{controller.getSingleProduct(req,res)})
router.get('/getAllProducts',(req,res)=> {controller.getAllProduct(req,res)})  

export default router