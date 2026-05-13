import dotenv from "dotenv"
import mongoose from "mongoose"

dotenv.config()

const conectarDB = async () => {
    try {
        
        await mongoose.connect(process.env.MONGODB_CONNECTION)

    } catch (error) {
        console.error("Error al conectar con MONGO: ", error)
    }
}

export default conectarDB