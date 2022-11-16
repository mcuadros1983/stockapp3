require("dotenv").config()
const express = require("express")
const dbConnect = require("./db")
const cors = require("cors");
const productRouter = require("./routes/product")


const app = express()

dbConnect(app);

app.use(cors({origin:true}))//intercepta todas las request que ingresarn y por deefecto deja pasar todas las request que vengan de cualquier servidor
// app.use(cors({origin: "http://stock-app-front.vercel.app/"}))//estamos indicando que solo se aceptan peticiones desde este origen

app.use(express.json())

app.use('/api/v1/products', productRouter) //le estamos indicando que utilice un determinado router cuando se visite dicha ruta

//app.use('/api/v1/users', userRouter) //En caso de que crearamos usuarios, deberiamos crear un archivo users.js y configurarle distintsa rutas, crear una determinada ruta bajo determinado endpoint y pasarle cual es el router que lo va a manejar


