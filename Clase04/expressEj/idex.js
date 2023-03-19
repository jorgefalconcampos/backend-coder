import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const users = [
    { id: "1", nombre: "Nombre 1", apellido: "Appellido 1", genero: "M" },
    { id: "2", nombre: "Nombre 2", apellido: "Appellido 2", genero: "M"  },
    { id: "3", nombre: "Nombre 3", apellido: "Appellido 3", genero: "M" },
    { id: "4", nombre: "Nombre 4", apellido: "Appellido 4", genero: "F" },
    { id: "5", nombre: "Nombre 5", apellido: "Appellido 5", genero: "M" },
    { id: "6", nombre: "Nombre 6", apellido: "Appellido 6", genero: "F" },
]

app.get("/usuario/:nombre/:apellido", (req, res) => {
    console.log("params: \n", req.params.nombre);
    res.send("holio")
})

app.get("/api/usuarios", (req, res) => {
    res.send(users);
})

app.get("/usuario/:userId", (req, res) => {
    const { userId } = req.params;
    
    const usuarioAbuscar = users.find((user) => user.id === userId);

    if (!usuarioAbuscar) return res.send("no se encontró")

    res.send(usuarioAbuscar);
})




app.get("/api/query", (req, res) => {
    console.log(req.query);
    const { nombre, apellido } = req.query;
    const { genero } = req.query;

    let usuariosFiltrados = "";
    if (!genero || (genero.toUpperCase() !== "F" && genero.toUpperCase() !== "M")) {
        usuariosFiltrados = users;
    }
    else {   
        usuariosFiltrados = users.filter((usuario) => {
            // retorno explícito
            return usuario.genero === genero;
        });
    }
    res.send(usuariosFiltrados);   
})


app.get("/api/usuarios/:userId", (req, res) => {
    const { userId } = req.params;
    const usuario = users.find((usuario) => usuario.id === userId);
    if (!usuario) return res.status(400).send("No se encontró el usuario");
    res.status(200).send(usuario);
})



app.post("/api/usuarios", (req, res) => {
    const { nombre, apellido } = req.body;

    if(!nombre || !apellido) {
        return res.status(400).send("Faltan datos");
    }

    users.push({nombre, apellido});

    res.status(200).send({
        status: 'success',
        payload: users
    })
})


app.put("/api/usuarios/:userId", (req, res) => { 

    const { userId } = req.params;
    const { nombre, apellido } = req.body;


    if(!userId) {
        return res.status(400).send("Faltan el ID");
    }

    if(!nombre || !apellido) {
        return res.status(400).send("Faltan datos");
    }

    const userIndex = users.findIndex((user) => user.id === userId);

    users[userIndex] = { id: userId, nombre, apellido }

    res.status(200).json({
        status: 'success',
        payload: users
    })
})

app.delete("/api/usuarios/:userId", (req, res) => {

    const { userId } = req.params;

    if(!userId) {
        return res.status(400).send("Faltan el ID");
    }

    const userIndex = users.findIndex((user) => user.id === userId);

    if (userIndex === -1) return res.status(400).send("No se encontró el usuario");

    users.splice(userIndex, 1);

    res.status(200).json({
        status: 'success',
        payload: users
    })
})


app.listen(8080, () => {
    console.log("servidor en 8080");
})