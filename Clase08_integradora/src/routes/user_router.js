const { Router } = require("express");
const managerUserMongo = require("../managerDaos/managerUserMongo.js");

const router = Router();

router.get("/", async (req, res) => {
    const resp = await managerUserMongo.getAllUsers();
    res.send(resp);
});

router.get("/:uid", (req, res) => {
    res.send("get user by ID")
});

router.post("/", async (req, res) => {
    try {
        const newUser = req.body;
        const resp = await managerUserMongo.addUser(newUser);
        res.send(resp);
      } catch (err) {
        console.log("erroooooor: " + err);
      }
});

router.put("/:id", (req, res) => {
    res.send("update")
});


router.delete("/:uid", (req, res) => {
    res.send("delete")
});



module.exports = router;