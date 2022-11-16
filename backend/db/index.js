require("dotenv").config()
const mongoose = require("mongoose")


const dbConnect = (app) => {
        mongoose.connect(
            `mongodb+srv://mcuadros83:${process.env.MONGO_DB_PASSWORD}@development.48eeibf.mongodb.net/stock-app?retryWrites=true&w=majority`///stock-app indica la nueva base de datos que queremos que se cree
        )
            .then(result => {
                const PORT = process.env.PORT || 4000
                app.listen(PORT, () => {
                    console.log(`server ${PORT}`)
                })
                console.log("Conexion exitosa a la base de datos")
            })
            .catch((err) => console.log("err"))

    
}

module.exports = dbConnect
