

import Product from "../../domain/product";

interface IProductRepository {
    addProduct(name: string,description:string) : Promise<any >,
    getAllProduct(): Promise<any>
    getSingleProduct(name:string): Promise<any>
   
}

export default IProductRepository