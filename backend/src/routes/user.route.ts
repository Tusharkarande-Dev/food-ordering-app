import  { Router } from 'express';
import createCurrentUser from '../controllers/user.controller';

const router = Router();

router.post("/", createCurrentUser)

export default router;