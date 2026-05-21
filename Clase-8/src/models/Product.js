import mongoose from "mongoose"

const productScheme = mongoose.Schema({
    nombre: { type: String, required: true },
    categoria: { type: String, required: true },
    stock: { type: Number, required: true },
    precio: { type: Number, required: true },
    imagen: { type: String, required: false },
}, { timestamps: true }) // timestamps: no pertenece a los datos del usuario
// sino que muestrra cuando se creo o cuando se modifico


export default mongoose.model("Product", productScheme)