import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const users = [
    { id: "1", nombre: "Nombre 1", apellido: "Appellido 1" },
    { id: "2", nombre: "Nombre 2", apellido: "Appellido 2" },
    { id: "3", nombre: "Nombre 3", apellido: "Appellido 3" },
    { id: "4", nombre: "Nombre 4", apellido: "Appellido 4" },
    { id: "5", nombre: "Nombre 5", apellido: "Appellido 5" },
    { id: "6", nombre: "Nombre 6", apellido: "Appellido 6" },
]

app.get("/usuario/:nombre/:apellido", (req, res) => {
    console.log("params: \n", req.params.nombre);
    res.send("holio")
})

app.get("/usuarios", (req, res) => {
    res.send(users);
})

app.get("/usuario/:userId", (req, res) => {
    const { userId } = req.params;
    
    const usuarioAbuscar = users.find((user) => user.id === userId);

    if (!usuarioAbuscar) return res.send("no se encontró")

    res.send(usuarioAbuscar);
})


app.listen(8080, () => {
    console.log("servidoe en 8080");
})