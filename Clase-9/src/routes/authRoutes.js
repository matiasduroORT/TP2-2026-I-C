import express from "express"
import { protegerRuta } from "../middlewares/authMiddlewares.js"
import { login, logout } from "../controllers/authController.js"

const router = express.Router()

router.post("/login", login)
router.post("/logout", logout)




export default router