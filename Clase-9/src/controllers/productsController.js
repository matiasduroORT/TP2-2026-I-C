import Product from "../models/Product.js"
import supabase from "../config/supabase.js"


export const getProducts = async (req, res) => {

    try {

        const products = await Product.find()
        res.json(products)

    } catch (error) {
        res.status(500).json({ error: "error al obtener usuarios: ", error: error.message })

    }

}


export const getProductsSearch = async (req, res) => {

    const { nombre, categoria, precio, MaxPrice, MinPrice } = req.query

    const filtro = {}

    try {

        if (nombre) {
            filtro.nombre = { $regex: `^${nombre}`, $options: "i" }
        }

        if (categoria) {
            filtro.categoria = { $regex: `^${categoria}`, $options: "i" }
        }

        if (MaxPrice || MaxPrice || precio) {
            filtro.precio = {}

            if (MaxPrice) {
                filtro.precio.$lte = Number(MaxPrice)
            }

            if (MinPrice) {
                filtro.precio.$gte = Number(MinPrice)
            }

            if (precio) {
                filtro.precio = Number(precio)
            }
        }




        const user = await Product.find(filtro)

        res.json(user)

    } catch (error) {
        res.status(500).json({ error: "error al obtener el usuario: ", error: error.message })

    }

}

export const createProducts = async (req, res) => {
    // req.body contiene los datos enviados por el cliente, en formato JSON
    const { nombre, categoria, stock, precio } = req.body

    const user = req.usuario

    const imagenes = req.files;


    console.log("imagenes: ", imagenes);


    if (!nombre || !categoria || !stock || !precio) {
        return res.status(400).json({
            error: "Faltan datos"
        })
    }

    if (!user) {
        return res.status(400).json({
            error: "Falta datos de Usuario"
        })
    }


    let imagenesUrls = []

    for (const image of imagenes) {

        const fileName = `${Date.now()}.jpg`
        const filePath = `productos/${user.id}/${nombre}/${fileName}`

        const { data, error } = await supabase.storage
            .from(process.env.SUPABASE_BUCKET)
            .upload(filePath, image.buffer, {
                "contentType": image.mimetype,
                upsert: true
            })

        if (error) {

            return res.status(500).json({
                error: "Error al subir las imagenes",
                errorMensaje: error
            })
        }

        const { data: publicUrlData } = await supabase.storage.from(process.env.SUPABASE_BUCKET).getPublicUrl(filePath)
        
        imagenesUrls.push(publicUrlData.publicUrl)

    }




    const nuevoProducto = {
        nombre: nombre,
        categoria: categoria,
        stock: stock,
        precio: precio,
        userId: user.id,
        imagenes: imagenesUrls
    }


    try {
        // const newProduct = await Product.create(nuevoProducto)
        res.status(201).json(nuevoProducto)

    } catch (error) {

        res.status(500).json({ error: "error al crear producto: ", error: error.message })

    }

}