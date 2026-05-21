import jwt from "jsonwebtoken"


export const protegerRuta = (req, res, next) => {

    const AuthHeader = req.headers.authorization

    console.log("AuthHeader: ", AuthHeader);
    
    if(!AuthHeader?.startsWith("Bearer ")){
        return res.status(401).json({error: "Token no proporcionado"})
    }

    const token = AuthHeader.split(" ")[1]

    try {

        const decodificado = jwt.verify(token, "pepe")
        
    console.log("decodificado: ", decodificado);

    next()
        
    } catch (error) {



        return res.status(403).json({error: "Token invalido o expirado"})
        
    }

}