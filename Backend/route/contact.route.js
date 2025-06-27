import express from 'express';
import { sendContact } from '../Controller/contact.controller.js';
const router = express.Router();

router.post('/', sendContact);

export default router; 