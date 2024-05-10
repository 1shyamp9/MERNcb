import express from 'express'
import { isAuth } from '../Middleware/auth.js'
import { createContact, deleteContact, updateContact, userContacts, viewContact } from '../Controllers/contactController.js'  

export const contactRoute = express.Router();

contactRoute.post('/create',createContact);
contactRoute.get('/allcontacts',userContacts);
contactRoute.get('/contacts/view',isAuth,viewContact);
contactRoute.put('/contacts/update',isAuth,updateContact);
contactRoute.delete('/contacts/delete',isAuth,deleteContact);