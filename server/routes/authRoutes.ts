import express from 'express';
import { googleSignIn } from '../controllers/googleAuth.ts';


const router = express.Router();

router.post('/google', googleSignIn);

export default router;
