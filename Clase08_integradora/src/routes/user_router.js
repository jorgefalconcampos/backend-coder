const { Router } = require("express");

const router = Router();


router.get("/", (req, res) => {
    res.send("get users");
});

router.get("/:uid", (req, res) => {
    res.send("get user by ID")
});

router.post("/", (req, res) => {
    res.send("create")
});

router.put("/:id", (req, res) => {
    res.send("update")
});


router.delete("/:uid", (req, res) => {
    res.send("delete")
});



module.exports = router;