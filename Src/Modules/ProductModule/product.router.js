import { Router } from "express";
import * as productController from "./ProductController/product.controller.js";
const router = Router();
router.get("/",productController.getProductPage);
export default router;
