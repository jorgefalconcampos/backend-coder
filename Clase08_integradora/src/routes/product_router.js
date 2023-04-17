const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
    res.send("get products");
});

router.get("/:pid", (req, res) => {
    res.send("get product by ID")
});

router.post("/", (req, res) => {
    res.send("create")
});

router.put("/:id", (req, res) => {
    res.send("update")
});


router.delete("/:pid", (req, res) => {
    res.send("delete")
});



module.exports = router;
