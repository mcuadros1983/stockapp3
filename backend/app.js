const express = require("express")

const app = express()

//Configuracion de las rutas
app.get('/',(req,res)=>{//req es lo que llega y res es lo que respondemos
    console.log("peticion recibida")
    res.send("Hola mundo")
})

app.listen(4000,()=>{
    console.log("server 4000")
})