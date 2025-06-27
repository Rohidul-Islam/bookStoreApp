import express from 'express';
import { subscribe } from '../Controller/subscription.controller.js';
const router = express.Router();

router.post('/', subscribe);

export default router; 