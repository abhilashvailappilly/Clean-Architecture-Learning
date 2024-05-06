// import adminUseCase from "../../useCase/adminUseCase";


import { Request, Response } from "express";
import productUseCase from "../../useCase/productUseCase";


class productController {
    private productCase : productUseCase
    constructor(productCase: productUseCase){
        this.productCase = productCase;
    }
    async addProduct(req: Request , res : Response) {
        try {
            const {name ,description} = req.body;
            console.log("worked controller :",req.body)
            const product = await this.productCase.addProduct(name,description)
            if(product){
            return res.status(201).send(product)
            }
        } catch(error) {
            res.status(500).send('Something went wrong')
        }
    }
    async getAllProduct( req:Request,res : Response) {
        try{
            const productData = await this.productCase.getAllProduct()
            if(productData) {
                return res.status(200).send(productData)
            }
        } catch(error){
            console.log(error)
        }
    }
    async getSingleProduct (req : Request ,res:Response) {
        try {
            console.log("get single product worked in controller")
            console.log(req.query)
            const singleProductData = await this.productCase.getSingleProduct( req?.query?.name as string)
            console.log('singleProductData :',singleProductData)
            if(singleProductData.success) {
                return res.status(200).send(singleProductData)
            }
            return res.status(500).send(singleProductData)
        } catch(error) {
            res.status(500).send('Something went wrong')
            console.log(error)
        }
    }
}



export default productController;
