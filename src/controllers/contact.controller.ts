import {Request , Response} from "express";
import {
    saveContactService,
    getAllSubmitFormService
} from "../services/contact.service";

export const saveContact = (req: Request, res: Response) => {
    try {
        const newContact = saveContactService(req.body);
        res.status(201).json({
            message: "Contact saved successfully",
            contact: newContact
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Something went wrong while saving the contact"
        });
    }
};

export const getAllForms = (req: Request, res: Response) => {
    try {
        const contacts = getAllSubmitFormService();
        res.status(200).json({
            message: "Contacts fetched successfully",
            contacts: contacts
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Something went wrong while fetching contacts"
        });
    }
};