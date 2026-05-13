import express from "express"
import { createUser, getUsers, getUsersSearch } from "../controllers/usersController.js"

const router = express.Router()

router.get("/", getUsers)
router.get("/search", getUsersSearch)
router.post("/", createUser)

export default router