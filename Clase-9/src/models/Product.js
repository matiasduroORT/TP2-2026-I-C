import mongoose from "mongoose"
import supabase from "../config/supabase.js"

const productScheme = mongoose.Schema({
    nombre: { type: String, required: true },
    categoria: { type: String, required: true },
    stock: { type: Number, required: true },
    precio: { type: Number, required: true },
    imagenes: [ {type: String}],
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" ,required: true},
}, { timestamps: true }) // timestamps: no pertenece a los datos del usuario
// sino que muestrra cuando se creo o cuando se modifico


export default mongoose.model("Product", productScheme)