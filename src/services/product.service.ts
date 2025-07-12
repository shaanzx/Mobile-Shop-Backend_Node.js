/*
import {Product} from "../model/products";
*/
import Products from "../model/products";
import Product from "../model/products";
import {ProductDTO} from "../dto/product.dto";

export const getAllProductsService = async () : Promise<ProductDTO[]> => {
     // return productList;
    return Products.find();
}

export const saveProductService = async (product : ProductDTO) => {
    /*productList.push(product)
    return product;*/
    return Product.create(product);
}

export const getProductByIdService = async (id : number) :Promise<ProductDTO | null> => {
    return Product.findOne({id: id});
}

export const updateProductService = async (id : number , data : ProductDTO) => {
    /*const product = productList.find(product => product.id === id);
    if(!product){
        return null;
    } else{
        Object.assign(product , data);
        return product;
    }*/
    const updateProduct = await Product.findByIdAndUpdate({id : id} , data, {new:true});
    if(!updateProduct){
        return null
    }else{
        return updateProduct
    }
}

export const deleteProductService = async (id : number) : Promise<boolean>  => {
    /*const existingProductIndex = productList.findIndex(product => product.id === id);
    if(existingProductIndex === -1){
        return false;
    }else{
        productList.splice(existingProductIndex , 1);
        return true;
    }*/
    await Products.deleteOne({id : id});
    return true
}

export const validateProduct = (product : ProductDTO) => {
    if( !product.id ||
        !product.name ||
        !product.price ||
        !product.currency ||
        !product.color ||
        !product.ram ||
        !product.storage ||
        !product.image) {
        return 'All fields are required';
    }
    return null;
}