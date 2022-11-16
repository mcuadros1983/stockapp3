const Product = require("../models/product")

const getProducts = async (req, res) => {
    const products = await Product.find()
    res.status(200).json({ ok: true, products, count: products.length })
}

const createProduct = (req, res) => {//req es lo que llega y res es lo que respondemos
    if (!req.body.name) { //si no viene el nombre en el body
        res
            .status(400)
            .json({
                ok: false,
                message: "El campo nombre del producto es obligatorio"
            })
        return //esto para que termine
    }

    const newProduct = new Product(req.body)

    newProduct
        .save()
        .then((result) => {
            res.status(201).json({ ok: true })
        })
        .catch((err) => console.log(err))
}

module.exports = {
    getProducts,
    createProduct
}
//contener todas las funciones que van a controlar todas las peticioens qeu llegan a las distintas rutas