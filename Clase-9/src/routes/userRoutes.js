import express from "express"
import { createUser, getUsers, getUsersSearch, actualizarProfilePic } from "../controllers/usersController.js"
import { protegerRuta } from "../middlewares/authMiddlewares.js"
import { allowUpload } from "../middlewares/uploadMiddlewares.js"

const router = express.Router()

router.get("/", getUsers)
router.get("/search", getUsersSearch)



router.post("/", protegerRuta ,createUser)

router.put("/cambiar-imagen", protegerRuta, allowUpload, actualizarProfilePic)

export default router