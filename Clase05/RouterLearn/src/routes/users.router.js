const { Router } = require("express");

const usersRouter = Router();

const users = [
    { id: "1", nombre: "Nombre 1", apellido: "Appellido 1", genero: "M" },
    { id: "2", nombre: "Nombre 2", apellido: "Appellido 2", genero: "M"  },
    { id: "3", nombre: "Nombre 3", apellido: "Appellido 3", genero: "M" },
    { id: "4", nombre: "Nombre 4", apellido: "Appellido 4", genero: "F" },
    { id: "5", nombre: "Nombre 5", apellido: "Appellido 5", genero: "M" },
    { id: "6", nombre: "Nombre 6", apellido: "Appellido 6", genero: "F" },
]

const mid1 = (req, res, next) => {
    req.dato1 = "dato1"
    next()

};

// usersRouter.get("/", (req, res) => {
//     res.json({users});
// })

usersRouter.get("/", (req, res) => {
    
    let usr = {
        name: "Jorge",
        last_name: "Campos"
    };

    res.render("index", usr);
})


usersRouter.post("/", mid1, (req, res) => {
    const { nombre, apellido, genero } = req.body;

    users.push({
        id: Date.now(),
        nombre,
        apellido,
        genero
    });

    return res.json({
        users,
        dato1: req.dato1
    })
})

module.exports = {
    usersRouter
}