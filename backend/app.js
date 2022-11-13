const express = require("express")
const path = require("path") //modulo nativo de nodejs para que puedan aceptarse las distintas configuraciones de las barras en los distintos sistemas operativos
require("dotenv").config()
const mongoose = require("mongoose")

const app = express()
mongoose.connect(
    `mongodb+srv://mcuadros83:${process.env.MONGO_DB_PASSWORD}@development.48eeibf.mongodb.net/stock-app?retryWrites=true&w=majority`///stock-app indica la nueva base de datos que queremos que se cree
)
    .then(result => {
        app.listen(PORT, () => {
            console.log(`server ${PORT}`)
        })
        console.log("Conexion exitosa a la base de datos")
    })
    .catch((err) => console.log("err"))

const productSchema = mongoose.Schema({
    name: { type: String, require: true },
    price: Number
},
    { timestamps: true }//se crean 2 campos automatcamente createdApp y updatedApp
)

const Product = mongoose.model("Product", productSchema, "Products") //nombremodelo, nombreesquema, nombrecoleccion (si no llenamos este campo, mongodb pluraiza el nombre del modelo ej Products)

app.use(express.json())



app.post('/api/v1/products', (req, res) => {//req es lo que llega y res es lo que respondemos
    const newProduct = new Product({
        name: req.body.name,
        price: req.body.price
    })
     
    newProduct
    .save()
    .then(result=>{
        res.status(201).json({ ok: true })
    })
    .catch((err)=>console.log(err))
})



// app.post('/api/v1/products', (req, res, next) => {//req es lo que llega y res es lo que respondemos
//     console.log("peticion recibida")
//     console.log({ body: req.body })
//     res.status(201).json({ ok: true })
//     next() //next da la orden de que al terminar este middleware continue con el siguiente
// })


//MIDDLEWARE
//Configuracion de las rutas
// app.get('/',(req,res,next)=>{//req es lo que llega y res es lo que respondemos
//     console.log("peticion recibida")
//     next() //next da la orden de que al terminar este middleware continue con el siguiente
// })

//Middleware para archivos estaticos
app.use(express.static(path.join(__dirname, "public"))) //unimos la direccion de app.js con la carpeta public 



const PORT = process.env.PORT || 4000
