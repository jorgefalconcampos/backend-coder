const { error } = require("console");
const { ProductManager } = require("./productManager");
const path = "./files/productos.json";

const products = new ProductManager(path);

const test = async () => {
    // await products.getProducts().then((resp) => {
    //     console.log("Se obtuvieron los siguientes productos: \n");
    //     console.log(resp);
    // });

    const obj = {
        title: "producto prueba actualizado",
        description: "Este es un producto prueba actualizado",
        pepe: "pepe",
        id: 50
    };

    // await products.addProduct(obj).then((resp) => {
    //     console.log(`Se creó el producto con el ID ${resp}`);
    // });

    // await products.updateProduct(obj).then((resp) => {
    //     console.log(`Se actualizó el producto con el ID ${resp}`);
    // });

    // await products.getProducts().then((resp) => {
    //     console.log("Se obtuvieron los siguientes productos: \n");
    //     console.log(resp);
    // });

    let id = 5; // <--- ID a buscar

    await products.updateProduct(id, obj)
        .then(() => {
            console.log("ok");
        })
        .catch((err) => {
            console.log(`Ocurrió el siguiente error: \n${err}`);
        })

    // await products.getProductById(id)
    //     .then((resp) => {
    //         if (resp !== null) {
    //             console.log(`Se encontró el siguiente producto con el ID ${id}: \n`);
    //             console.log(resp);
    //         } else {
    //             throw new Error("Al parecer no existe un objeto con ese ID.");
    //         }
    //     })
    //     .catch((err) => {
    //         console.log(`Ocurrió el siguiente error: \n${err}`);
    //     });
        
    // await products.deleteProduct(id).then((resp) => {
    //     if (resp) {
    //         console.log(`Se eliminó el producto con el ID ${id}. Nueva lista de productos:\n`);
    //         console.log(resp);
    //     }
    // });
};

test();
