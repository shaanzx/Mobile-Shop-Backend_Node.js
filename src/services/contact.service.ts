import {Contact} from "../model/contact";
import {contactList} from "../db/db";

export const saveContactService = (contact: Contact): Contact => {
    contactList.push(contact);
    return contact
}

export const getAllSubmitFormService = (): Contact[] => {
    return contactList;
}