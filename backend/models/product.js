const mongoose = require("mongoose") 


const productSchema = mongoose.Schema({ //se instancia un nuevo esquema
    name: { type: String, require: true },
    price: Number
},
    { timestamps: true }//se crean 2 campos automatcamente createdApp y updatedApp
)

const Product = mongoose.model("Product", productSchema) //nombremodelo, nombreesquema, nombrecoleccion (si no llenamos este campo, mongodb pluraiza el nombre del modelo ej Products)

module.exports = Product

//modelos que interactuan con la base de datos