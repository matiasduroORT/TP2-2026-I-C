import supabase from "../config/supabase.js"
import User from "../models/User.js"
import bcrypt from "bcryptjs"


export const getUsers = async (req, res) => {

    try {

        const users = await User.find()
        res.json(users)

    } catch (error) {
        res.status(500).json({ error: "error al obtener usuarios: ", error: error.message })

    }

}


export const getUsersSearch = async (req, res) => {

    const { nombre, email } = req.query

    try {

        const user = await User.find({
            nombre: {
                $regex: `^${nombre}`,
                $options: "i"
            },
        })

        res.json(user)

    } catch (error) {
        res.status(500).json({ error: "error al obtener el usuario: ", error: error.message })

    }

}

export const createUser = async (req, res) => {
    // req.body contiene los datos enviados por el cliente, en formato JSON

    console.log("LLego a aca");

    const { nombre, email, password } = req.body

    if (!nombre || !email || !password) {
        return res.status(400).json({
            error: "Faltan datos. el body debe tener nombre y email, password"
        })
    }


    const hashedPassword = await bcrypt.hash(password, 10)



    const nuevoUser = {
        nombre: nombre,
        email: email,
        password: hashedPassword,
        admin: false
    }

    try {
        const newUser = await User.create(nuevoUser)
        res.status(201).json(newUser)

    } catch (error) {

        res.status(500).json({ error: "error al crear alumno: ", error: error.message })

    }

    // 201 created -> es el codigo de exito cuando se crea un registro en la api
    // res.status(201).json(newUser)
}

export const actualizarProfilePic = async (req, res) => {


    const { usuario } = req
    const image = req.file

    console.log("Imagen: ", image);

    console.log("usuario: ", usuario);


    if (!image) {
        return res.status(400).json({ error: "No hay imagen" })
    }

    const fileName = `${Date.now()}.jpg`
    const filePath = `usuarios/${usuario.id}/profilePic/${fileName}`

    console.log(filePath);

    try {

        const { data, error } = await supabase.storage
            .from(process.env.SUPABASE_BUCKET)
            .upload(filePath, image.buffer, {
                "contentType": image.mimetype,
                upsert: true
            })

        console.log("data: ", data);

        if (error) {

            return res.status(500).json({
                error: "Error al subir la imagen",
                errorMensaje: error
            })
        }

        const { data: publicUrlData } = await supabase.storage.from(process.env.SUPABASE_BUCKET).getPublicUrl(filePath)

        console.log("FOTO URL: ", publicUrlData);

        const userActualizado = await User.findByIdAndUpdate(
            usuario.id,
            { profilePic: publicUrlData.publicUrl },
            { new: true }

        )


        res.status(201).json({
            msg: "Imagen actualizada correctamente",
            user: userActualizado,
        })



    } catch (error) {
        console.log("error: ", error);

    }



}