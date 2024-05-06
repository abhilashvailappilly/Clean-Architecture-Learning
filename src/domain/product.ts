interface Seller{
    _id?: string,
    name: string,
    email: string,
    image:string,
    password: string,
    isBlocked: boolean,
    dateOfBirth: Date,
    phone:string,
    govtId:string,
    creationTime:Date,
}

interface Product {
    name: string,
    description:string
    creationTime:Date
}

export default Product