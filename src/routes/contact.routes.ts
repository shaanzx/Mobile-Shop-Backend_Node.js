import {Router} from "express";
import {getAllForms, saveContact} from "../controllers/contact.controller";

const contactRouter: Router = Router();

// Handle Requests
contactRouter.post("/add" , saveContact)
contactRouter.get("/getAll" , getAllForms);

export default contactRouter;