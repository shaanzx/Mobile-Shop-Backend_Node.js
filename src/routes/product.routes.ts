import {Router} from "express";
import {
    deleteProduct,
    getAllProducts,
    getProductById,
    saveProduct,
    updateProduct
} from "../controllers/product.controller";

const productRouter :Router = Router();


// Handle Requests
productRouter.get("/all" , getAllProducts);
productRouter.post("/add" , saveProduct)
productRouter.get("/:id" , getProductById)
productRouter.put("/update/:id", updateProduct)
productRouter.delete("/delete/:id" , deleteProduct)

export default productRouter;