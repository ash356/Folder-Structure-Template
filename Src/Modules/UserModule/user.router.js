import { Router } from "express";
import * as userController from "./UserController/user.contrller.js";
const router = Router();
router.get("/", userController.getUserPage);
export default router;
