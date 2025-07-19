import {Router} from "express";
import {
    deleteProduct,
    getAllProducts,
    getProductById,
    saveProduct,
    updateProduct
} from "../controllers/product.controller";
import {authorizeRoles} from "../middleware/auth.middleware";

const productRouter: Router = Router();


// Handle Requests
productRouter.get("/all", authorizeRoles('admin' , 'customer'), getAllProducts);
productRouter.post("/add", authorizeRoles('admin'), saveProduct)
productRouter.get("/:id", authorizeRoles('admin' , 'customer'), getProductById)
productRouter.put("/update/:id", authorizeRoles('admin'), updateProduct)
productRouter.delete("/delete/:id", authorizeRoles('admin'), deleteProduct)

export default productRouter;