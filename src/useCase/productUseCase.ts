

import IProductRepository from "./interface/IProductRepository";

interface ProductResponseModel {
    name:string,
    description : string
}

class productUseCase {
    private iProductRepository: IProductRepository;
   

    constructor(
        iProductRepository: IProductRepository,
     
    )  {
        this.iProductRepository = iProductRepository;
    
    }

    async addProduct(name:string,description:string)  {
       try {
            const product = await this.iProductRepository.addProduct(name,description)
            return product
       } catch (error) {
        console.log(error)
       }
    }
    async getAllProduct () {
        try {
            const productData = await this.iProductRepository.getAllProduct()
            return productData
        } catch (error) {
            console.log(error)
        }
    }
    async getSingleProduct (name:string) {
        try {
            const singleProductData = await this.iProductRepository.getSingleProduct(name)
            return singleProductData
        } catch (error) {
            console.log(error)
        }
    }


}

export default productUseCase