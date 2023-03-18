const { ProductManager } = require("./productManager");
const path = "./files/productos.json";

const products = new ProductManager(path);

const test = async () => {

    // todo el código siguiente es funcional, comentar o descomentar las líneas que se requieran

    // await products.getProducts().then((resp) => {
    //     console.log("Se obtuvieron los siguientes productos: \n");
    //     console.log(resp);
    // });

    // const obj = {
    //     title: "producto prueba",
    //     description: "Este es un producto prueba ",
    //     price: 200,
    //     thumbnail: "sin imagen",
    //     code: "123abc",
    //     stock: 20
    // };

    // await products.addProduct(obj)
    //     .then((resp) => {
    //         resp !== undefined ? console.log(`Se creó el producto con el ID ${resp}`) : "";
    // });

    // await products.updateProduct(obj).then((resp) => {
    //     console.log(`Se actualizó el producto con el ID ${resp}`);
    // });

    // await products.getProducts().then((resp) => {
    //     console.log("Se obtuvieron los siguientes productos: \n");
    //     console.log(resp);
    // });

    let id = 5; // <--- ID a buscar

    // await products.updateProduct(id, obj)
    //     .then((resp) => {
    //         resp == true ? console.log("Producto actualizado.") : ""
    // });

    await products.getProductById(id)
        .then((resp) => {
            if (resp !== null) {
                console.log(`Se encontró el siguiente producto con el ID ${id}: \n`);
                console.log(resp);
            } else {
                throw new Error("Al parecer no existe un objeto con ese ID.");
            }
        })
        .catch((err) => {
            console.log(`Ocurrió el siguiente error: \n ${err}`);
        });
        
    // await products.deleteProduct(id).then((resp) => {
    //     if (resp) {
    //         console.log(`Se eliminó el producto con el ID ${id}. Nueva lista de productos:\n`);
    //         console.log(resp);
    //     }
    // });
};

test();
