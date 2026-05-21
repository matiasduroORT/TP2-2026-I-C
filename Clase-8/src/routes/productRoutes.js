import express from "express"
import { createProducts, getProducts, getProductsSearch } from "../controllers/productsController.js"

const router = express.Router()

router.get("/", getProducts)
router.get("/search", getProductsSearch)
router.post("/", createProducts)

export default router