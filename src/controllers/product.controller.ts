import {Request , Response} from "express";
import {
    getAllProductsService,
    getProductByIdService,
    saveProductService,
    updateProductService,
    deleteProductService,
    validateProduct
}  from "../services/product.service";

export const getAllProducts = (req : Request , res : Response) => {
    const products = getAllProductsService();
    res.status(200).json({
        message: "Products fetched successfully",
        products: products
    });
}


export  const saveProduct = (req : Request, res: Response) =>{

}

export  const getProductById =  (req : Request , res: Response) => {

}

export  const updateProduct =  (req : Request , res: Response) => {

}

export  const deleteProduct =  (req : Request , res: Response) => {

}

