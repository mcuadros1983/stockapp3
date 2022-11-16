const express = require("express")
const router = express.Router() //al ser una funcion hay que ejecutarla
const productControllers = require("../controllers/product")


router.post("/", productControllers.createProduct )   

router.get("/", productControllers.getProducts)

//router.delete("/:id", productControllers.deleteProduct) //ejemplo para rutas para eliminar datos

module.exports = router

//rutas especificas que controlan cada una de las entidades que existen en nuestro proyecto