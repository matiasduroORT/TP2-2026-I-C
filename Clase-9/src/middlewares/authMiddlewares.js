import jwt from "jsonwebtoken"


export const protegerRuta = (req, res, next) => {

    const AuthHeader = req.headers.authorization

    console.log("AuthHeader: ", AuthHeader);
    
    if(!AuthHeader?.startsWith("Bearer ")){
        return res.status(401).json({error: "Token no proporcionado"})
    }

    const token = AuthHeader.split(" ")[1]

    try {

        const decodificado = jwt.verify(token, process.env.JWT_SECRET)
        
    console.log("decodificado: ", decodificado);
    req.usuario = decodificado

    next()
        
    } catch (error) {



        return res.status(403).json({error: "Token invalido o expirado"})
        
    }

}


export const protegerRutaAdmin = (req, res, next) => {

    const AuthHeader = req.headers.authorization

    console.log("AuthHeader: ", AuthHeader);
    
    if(!AuthHeader?.startsWith("Bearer ")){
        return res.status(401).json({error: "Token no proporcionado"})
    }

    const token = AuthHeader.split(" ")[1]

    try {

        const decodificado = jwt.verify(token, process.env.JWT_SECRET)
        
    console.log("decodificado: ", decodificado);

    if(!decodificado.admin){
        return res.status(401).json({error: "Necesitas ser admin para realizar esta accion"})
    }

    req.usuario = decodificado

    next()
        
    } catch (error) {



        return res.status(403).json({error: "Token invalido o expirado"})
        
    }

}