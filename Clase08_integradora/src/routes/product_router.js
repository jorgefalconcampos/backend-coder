const { Router } = require("express");
const productsManager = require("../managerDaos/managerProductMongo");

const router = Router();

router.get("/", async (req, res) => {
  const resp = await productsManager.getAllProducts();
  res.send(resp);
});

router.get("/:pid", (req, res) => {
  res.send("get product be id");
});

router.post("/", async (req, res) => {
  try {
    const newProduct = req.body;
    const resp = await productsManager.addProduct(newProduct);
    res.send(resp);
  } catch (err) {
    console.log("erroooooor: " + err);
  }
});

router.put("/:pid", (req, res) => {
  res.send("update product");
});

router.delete("/:pid", (req, res) => {
  res.send("delet product");
});

router.delete("/:pid", (req, res) => {
  res.send("delete");
});

module.exports = router;
