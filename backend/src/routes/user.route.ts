import  { Router } from 'express';
import createCurrentUser from '../controllers/user.controller';
import { jwtCheck } from '../middlewares/auth';

const router = Router();

router.post("/", jwtCheck , createCurrentUser)

export default router;