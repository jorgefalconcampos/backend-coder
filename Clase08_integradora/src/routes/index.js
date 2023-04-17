const { Router } = require("express");
const userRouter = require("./user_router")
const productRouter = require("./product_router.js");
const { uploader } = require("../utils/uploader.js");
const router = Router();


router.use("/api/usuario", userRouter);
router.use("/api/producto", productRouter);

router.post("/upload", uploader.single("myFile"), (req, res) => {
    res.send("Archivo subido");
});

module.exports = router;