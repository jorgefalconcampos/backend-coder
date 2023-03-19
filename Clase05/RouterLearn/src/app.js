const express = require("express");

const { usersRouter } = require("./routes/users.router");
const { productosRouter } = require("./routes/productos.router")

const app = express();
const PORT = 4000;


const mid2 = (req, res, next)=>{
    req.dato2 = 'dato 2'
    next()
}



app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/static", express.static(__dirname + "/public"));

app.use("/api/usuarios", usersRouter);

app.use("/api/productos", mid2, productosRouter);


app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send("Todo mal");
})


app.listen(PORT, (err) => {
    if (err) return console.log("Error al iniciar el server");
    console.log("Servidor corriendo en: " + PORT);
})