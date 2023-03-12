const ProductManager = require("./productManager");

const path = './files/productos.json'

const products = new ProductManager(path);

const test = async () => {
    let save = await products.save({
        title: "producto prueba",
        description: "producto de prueba",
        price: 200,
        thumbnail: "Sin imagen",
        code: "abc123",
        stock: 25
    })
}