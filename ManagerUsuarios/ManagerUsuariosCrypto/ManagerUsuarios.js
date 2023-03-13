const fs = require("fs");
const crypto = require("crypto");
const path = "./usuarios.json";

class ManagerUsuarios {
  constructor(ruta) {
    this.ruta = path;
  }

  consultarUsuarios = async () => {
    try {
      if (fs.existsSync(path)) {
        const users = await fs.promises.readFile(this.ruta, "utf-8");
        return JSON.parse(users);
      }
      return []    
    } catch (error) {
        return [];
    }
  };

  crearUsuario = async (usuario) => {
    const users = await this.consultarUsuarios();

    users.length === 0
      ? (usuario.id = 1)
      : (usuario.id = users[users.length - 1].id + 1);

    // users.push(usuario);
    usuario.salt = crypto.randomBytes(128).toString("base64");
    usuario.password = crypto.createHmac("sha256", usuario.salt).update(usuario.password).digest("hex");


    console.log(usuario);
    // await fs.promises.writeFile(path, JSON.stringify(users, null, "\t"));
    return usuario;
  };
}

module.exports = {
    ManagerUsuarios
}