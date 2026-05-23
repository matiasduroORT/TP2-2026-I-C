import User from "../models/User.js"
import bcrypt from "bcryptjs"


export const getUsers = async (req, res) => {

    try {
        
        const users = await User.find()
        res.json(users) 

    } catch (error) {
        res.status(500).json({ error: "error al obtener usuarios: ", error: error.message})

    }

}


export const getUsersSearch = async (req, res) => {

    const { nombre, email } = req.query

    try {

        const user = await User.find({
            nombre:{
                $regex: `^${nombre}`,
                $options: "i"
            },
        })

        res.json(user)

    } catch (error) {
        res.status(500).json({ error: "error al obtener el usuario: ", error: error.message})

    }

}

export const createUser = async (req, res) => {
     // req.body contiene los datos enviados por el cliente, en formato JSON

     console.log("LLego a aca");
     
    const { nombre, email, password} = req.body

    if(!nombre || !email || !password){
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

        res.status(500).json({ error: "error al crear alumno: ", error: error.message})
        
    }
    
    // 201 created -> es el codigo de exito cuando se crea un registro en la api
    // res.status(201).json(newUser)
}