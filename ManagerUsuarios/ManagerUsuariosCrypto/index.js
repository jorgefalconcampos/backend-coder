const { ManagerUsuarios } = require("./ManagerUsuarios");

const usuario = new ManagerUsuarios();


usuario.crearUsuario({
    nombre: "Juan",
    password: "Perez"
})
usuario.consultarUsuarios()
    .then(resp => {
        console.log("Usuario ", resp);
    });


