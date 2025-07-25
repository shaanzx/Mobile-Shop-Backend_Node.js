import {Request , Response} from "express";
import {
    getAllProductsService,
    getProductByIdService,
    saveProductService,
    updateProductService,
    deleteProductService,
    validateProduct
}  from "../services/product.service";

export const getAllProducts = async (req : Request , res : Response) => {
    try{
        const products =await getAllProductsService();
        res.status(200).json({
            message: "Products fetched successfully",
            products: products
        });
    }catch (error){
        console.error(error);
        res.status(500).json({
            error : "Something went wrong while fetching products"
        });
    }
}


export  const saveProduct = async (req : Request, res: Response) =>{
    try{
        const newProduct = await saveProductService(req.body);
        const validationError =  validateProduct(newProduct);
        if (validationError) {
            res.status(400).json({
                error: validationError
            });
            return;
        }
        res.status(201).json({
            message: "Product saved successfully",
            product: newProduct
        });
    }catch (error){
        console.error(error);
        res.status(500).json({
            error: "Something went wrong while saving the product"
        });
    }
}

export  const getProductById = async (req : Request , res: Response) => {
    try{
        const id = parseInt(req.params.id)

        const product = await getProductByIdService(id);
        if(!product){
            res.status(404).json({
                error: "Product not found"
            });
            return;
        }
        res.status(200).json({
            message: "Product fetched successfully",
            product: product
        });
    }catch (error){
        console.error(error);
        res.status(500).json({
            error: "Something went wrong while fetching the product"
        });
    }

}

export  const updateProduct = async (req : Request , res: Response) => {
    const existingId = parseInt(req.params.id);
    const updateProduct = await updateProductService(existingId,req.body);
    if(!updateProduct){
        res.status(404).json({
            error: "Product not found"
        });
        return;
    }
    const validationError = validateProduct(updateProduct);
    if (validationError) {
        res.status(400).json({
            error: validationError
        });
        return;
    }
    res.status(200).json({
        message: "Product updated successfully",
        product: updateProduct
    });
}

export  const deleteProduct = async (req : Request , res: Response) => {
    const id = parseInt(req.params.id);
    const isDeleted = await deleteProductService(id);
    if(!isDeleted){
        res.status(404).json({
            error: "Product not found"
        });
        return;
    }
    res.status(200).json({
        message: "Product deleted successfully"
    });
}

