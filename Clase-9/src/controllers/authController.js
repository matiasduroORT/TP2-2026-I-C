import User from "../models/User.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

const generarAccessToken = (user) => {

    const datosEncriptados = {id: user.id, email: user.email, admin: user.admin}

    const JWT_KEY = process.env.JWT_SECRET

    return jwt.sign(
        datosEncriptados, 
        JWT_KEY,
        { expiresIn: "1h"}
    )

}

const generarRefreshToken = (user) => {

    return jwt.sign(
        {id: user.id},
       "45194129",
       { expiresIn: "7d"}
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
        const refreshToken = generarRefreshToken(user)



        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24 * 7 // 7 dias en ms: 1000ms * 60s * 60m * 24hs * 7dias 
        })

        res.json({accessToken})
        
        
    } catch (error) {
        
        res.json({error: "ocurrio un error"})
    }


}

export const refreshToken = (req, res) => {

    const token = req.cookies.refreshToken

    if(!token){
        return res.status(401).json({ error: "No hay refresh token"})
    }

    try {

        const decodificado = jwt.verify(token, process.env.JWT_REFRESH_SECRET)

        const newAccessToken = jwt.sign(
            {id: decodificado.id},
            process.env.JWT_SECRET,
            {expiresIn: '1h'}
    )

    res.json({accessToken: newAccessToken})
        
    } catch (error) {
        
    }



}

export const logout = async (req, res) => {

}