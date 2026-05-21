import express from "express"
import { createUser, getUsers, getUsersSearch } from "../controllers/usersController.js"
import { protegerRuta } from "../middlewares/authMiddlewares.js"

const router = express.Router()

router.get("/", getUsers)
router.get("/search", getUsersSearch)



router.post("/", protegerRuta ,createUser)

export default router