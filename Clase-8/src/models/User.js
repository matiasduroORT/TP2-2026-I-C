import mongoose from "mongoose"

const userScheme = mongoose.Schema({
    nombre: { type: String, required: true},
    email: { type: String, required: true},
    password: {type: String, required: true},
    profilePic: { type: String, required: false}
}, { timestamps: true}) // timestamps: no pertenece a los datos del usuario
                        // sino que muestrra cuando se creo o cuando se modifico


export default mongoose.model("User", userScheme)