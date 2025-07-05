import {Product} from "../model/products";
import {productList} from "../db/db";

export const getAllProductsService = () : Product[] => {
    return productList;
}

export const saveProductService = (product : Product) => {
    productList.push(product)
    return product;
}

export const getProductByIdService = (id : number) : Product | undefined => {
    return productList.find(product => product.id === id);
}

export const updateProductService = (id : number , data : Product) : Product | null => {
    const product = productList.find(product => product.id === id);
    if(!product){
        return null;
    } else{
        Object.assign(product , data);
        return product;
    }
}

export const deleteProductService = (id : number) : boolean  => {
    const existingProductIndex = productList.findIndex(product => product.id === id);
    if(existingProductIndex === -1){
        return false;
    }else{
        productList.splice(existingProductIndex , 1);
        return true;
    }
}

export const validateProduct = (product : Product) => {
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