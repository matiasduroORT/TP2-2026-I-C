import express from "express"
import { createProducts, getProducts, getProductsSearch } from "../controllers/productsController.js"

const router = express.Router()

router.get("/", getProducts)
router.get("/search", getProductsSearch)




// MIDDLEWARES

// LA REQUEST LLEGA -> EL MIDDLEWARE ANALIZA -> PASA O NO AL CONTROLADOR

router.post("/", createProducts)

export default router