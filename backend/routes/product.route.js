import express from "express";
import addProductHandler from "../controllers/addProductHandler.js";
import multer from "multer";
import getProductsHAndler from "../controllers/getProductsHAndler.js";
const router = express.Router();

const upload = multer({ dest: "uploads/" });

router.post(
  "/add-product",
  upload.fields([
    { name: "thumbnail", maxCount: 1 },
    { name: "gallery", maxCount: 8 },
  ]),
  addProductHandler,
);

router.get("/get-products", getProductsHAndler);

export default router;
