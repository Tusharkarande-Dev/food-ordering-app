import { Router } from "express";
import { jwtCheck, jwtParse } from "../middlewares/auth";
import {
  createCurrentUser,
  updateCurrentUser,
} from "../controllers/user.controller";
import { validateUserRequest } from "../middlewares/validation";

const router = Router();

router.post("/", jwtCheck, createCurrentUser);
router.put("/", jwtCheck, jwtParse, validateUserRequest, updateCurrentUser);

export default router;
