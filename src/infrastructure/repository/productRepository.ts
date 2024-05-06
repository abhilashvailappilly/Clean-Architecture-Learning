

import IProductRepository from "../../useCase/interface/IProductRepository";
import { ProductModel } from "../database/productModel";

class productRepository implements IProductRepository {

    async addProduct(name: string,description:string):Promise<any> {
        try {
            console.log("addd product worked in repo :",name,description)
            const existProduct = await ProductModel.findOne({name:name,description:description})
            if(existProduct) {
                return {duplicate : true , success:true}
            } 
            const newProduct = new ProductModel({name,description})
            await newProduct.save()
            return {duplicate : false,success:true}
           
        } catch (error) {
            console.log(error)
            return {duplicate: false,success:false}
        }
    }
    async getAllProduct():Promise<any> {
        try {
            console.log("get all product worked in repo :")
            const productData = await ProductModel.find()
            if(productData) {
                return {productData}
            } 
           
            return {success : false , message : "Something went wrong"}
           
        } catch (error) {
            console.log(error)
            return {duplicate: false,success:false}
        }
    }  
      async getSingleProduct(name:string):Promise<any> {
        try {
            console.log("get all product worked in repo :")
            const productData = await ProductModel.findOne({name:name})
            if(productData) {
                return {productData}
            } 
           
            return {success : false , message : "Something went wrong"}
           
        } catch (error) {
            console.log(error)
            return {duplicate: false,success:false}
        }
    }


    
}

export default productRepository