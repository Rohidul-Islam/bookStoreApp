import express from 'express';
import { getBook, populateBooks } from '../Controller/book.controller.js';

const router = express.Router();

router.get("/", getBook);
router.post("/populate", populateBooks);

export default router;