import express from "express"
import { createProducts, getProducts, getProductsSearch } from "../controllers/productsController.js"
import { protegerRuta, protegerRutaAdmin } from "../middlewares/authMiddlewares.js"
import { allowMultipleUpload } from "../middlewares/uploadMiddlewares.js"

const router = express.Router()

router.get("/", getProducts)
router.get("/search", getProductsSearch)




// MIDDLEWARES

// LA REQUEST LLEGA -> EL MIDDLEWARE ANALIZA -> PASA O NO AL CONTROLADOR

router.post("/", protegerRutaAdmin, allowMultipleUpload, createProducts)

export default router