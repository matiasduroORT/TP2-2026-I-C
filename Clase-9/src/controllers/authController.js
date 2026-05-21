import User from "../models/User.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

const generarAccessToken = (user) => {

    const datosEncriptados = {id: user.id, email: user.email}


    return jwt.sign(
        datosEncriptados, 
        "pepe",
        { expiresIn: "1h"}
    )


}

export const login = async (req, res) => {


    const { email, password } = req.body


    if(!email || !password){

        res.status(400).json({
            error: "Falta email o password"
        })
    }


    try {

        const user = await User.findOne({email})

        if(!user){
            return res.status(404).json({error: "Usuario no encontrado"})
        }


        console.log("password: ", password);
        console.log("password hasheada: ", user.password);
        
        

        const compararPassword = await bcrypt.compare(password, user.password)


        if(!compararPassword){
            return res.status(401).json({error: "Email o Password incorrectos"})
        }


        const accessToken = generarAccessToken(user)



        res.json({accessToken})
        
        
    } catch (error) {
        
        res.json({error: "ocurrio un error"})
    }


}

export const logout = async (req, res) => {

}