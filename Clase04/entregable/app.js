import path from "path";
import express from "express";
import ProductManager from "./ProductManager/productManager.js";

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const __dirname = path.resolve();
const dirPath = path.join(__dirname, "/ProductManager/files/productos.json")

const products = new ProductManager(dirPath);

app.get("/products", async (req, res) => {
    await products.getProducts().then((resp) => {
        res.json(resp);
    });
});



app.get("/products/:pid", async (req, res) => {

    const { pid } = req.params;
    
    await products.getProductById(parseInt(pid)).then((resp) => {
        if (resp !== null) {
            // res.status(200).send(`Se encontró un producto con el ID ${pid}`);
            res.json(resp);
        }
        else {
            res.status(404).send(`No se encontró un producto con el ID ${pid}`);
        }        
        // return res.json(resp);
    });
})











app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
})