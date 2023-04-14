const path = require("path");
const express = require("express");
const usersRouter = express.Router();

const { ManagerMongo } = require("../manager/managerMongo.js");
const usersManager = new ManagerMongo();

const {
  validateFormatInUrl,
  validateBodyForProduct,
  createBodyForProduct,
} = require("../utils/middleware/validations.js");

usersRouter.get("/", async (req, res) => {
  try {
    const users = usersManager.getUsers();
    if (!users) {
      return res.status(400).send("No hay usuarios");
    } else {
      res.status(200).send(users);
    }
  } catch (error) {
    console.log(error);
  }
});

usersRouter.get("/:id", (req, res) => {
  const { id } = req.params;
  res.status(200).send(id);
});

// usersRouter.get("/:pid", validateFormatInUrl("one"), async (req, res) => {
//     const { pid } = req.params;
//     await products.getRecordById(pid).then((resp) => {
//         if (resp !== null) { res.json(resp); }
//         else { res.status(404).send({"msg": `No se encontró un producto con el ID ${pid}`}); }
//     }).catch((error) => console.log(`Error: \n${error}`));
// });

usersRouter.post("/", async (req, res) => {
    try {
        let { first_name, last_name, email } = req.body;
        if (!first_name || !last_name) {
            return res.status(400).send({ message: "Faltan campos" });
        }
        let userAgregado = await usersManager.createUser({first_name, last_name, email});

        res.status(201).send({
        userAgregado,
        message: "Usuario creado",
        });
    } catch (error) {
        console.log(error);
    }
});

// usersRouter.put("/", async(req, res) => { res.status(404).send({"msg": "Agrega un ID"}); });

usersRouter.put("/:userId", async (req, res) => {
    const { userId } = req.params;
    const userToReplace = req.body;
    try {
        if (!userToReplace.first_name || !userToReplace.last_name || !userToReplace.email) {
            return res.status(400).send({message: "Agrega los campos"})
        }
        let result = await usersManager.updateUser(userId, userToReplace);
        res.status(201).send({
            users: result,
            message: "Usuario modificado"
        })
    } catch(error) { console.log(`Error: \n${error}`) };
});

usersRouter.delete("/:userId", async (req, res) => {
    const { userId } = req.params; 
    await usersManager.deleteRecord(userId);
});

module.exports = {
  usersRouter,
};
