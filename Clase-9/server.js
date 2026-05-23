import express from 'express'
import dotenv from 'dotenv'
import conectarDB from './src/config/db.js'
import usersRoutes from './src/routes/userRoutes.js'
import productRoutes from './src/routes/productRoutes.js'
import authRoutes from './src/routes/authRoutes.js'
import cookieParser from 'cookie-parser';

dotenv.config()

const PORT = process.env.PORT 

conectarDB()


const app = express()

app.use( express.json() )
app.use(cookieParser())

app.use("/api/users", usersRoutes)
app.use("/api/products", productRoutes)
app.use("/api/auth", authRoutes)


// 1- crear un app use para las rutas /api/products
// 2- crear modelo, controlador y rutas para productos
// 3- crear para obtener todos los productos, crear un producto y buscar un producto por nombre
// producto debe tener: nombre, categoria, precio, stock, imagen(no requerido)


app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})