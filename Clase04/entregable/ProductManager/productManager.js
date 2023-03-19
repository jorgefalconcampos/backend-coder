import fs from "fs"

class ProductManager {

    constructor(path) {
        this.path = path;
    }

    #writeFile = async (data) => {
        try {
            await fs.promises.writeFile(this.path, JSON.stringify(data, null, 2));
        }
        catch (err) { 
            console.error(`\n${err}`); 
        }
    }

    #validateProductFormatData (data) {
        const { title, description, price, thumbnail, code, stock } = data;
        if (title && description && price && typeof(price) === "number" && thumbnail && code && stock && typeof(stock) === "number" ) { 
            return true;
        } else { return false; }
    }

    addProduct = async (newProduct) => {
        const products = await this.getProducts();
        try {
            let newId;
            products.length === 0 
                ? newId = 1 
                : newId = products[products.length-1].id+1;
            let newObj = { ...newProduct, id: newId};

            let dataIsOk = this.#validateProductFormatData(newObj);

            if (dataIsOk) {
                products.push(newObj);
                await this.#writeFile(products);
                return newObj.id;
            } 
            else {
                throw new Error("Faltan campos o estos tienen un formato incorrecto.");
            }
        } catch (error) {
            console.error(`Hubo un error al agregar el producto.\n ${error}`);
        }
    }

    getProducts = async () => {

        
        // REAL B:\Dev\CoderHouse\[ Práctica ]\4) Backend\back\Clase04\entregable\ProductManager\productManager.js

        
        // B:\Dev\CoderHouse\[ Práctica ]\4) Backend\back\Clase04\entregable\src\ProductManager\files\productos.json
        try {
            if (fs.existsSync(this.path) && (fs.readFileSync(this.path).length !== 0)) { 
                const products = await fs.promises.readFile(this.path, 'utf-8');
                return JSON.parse(products);
            }
            else {
                console.info("Creando...");
                return []
            }
        } catch (error) {
            if (error.message.includes('no such file or directory')) {
                console.error("\nAl parecer el archivo o directorio no existe.");
                return [];
            }
        }
    }

    getProductById = async (id) => {
        let products = await this.getProducts();
        try {
            const obj = products.find(product => product.id === id);
            return obj ? obj : null;
        } catch (error) {
            console.error(`\nError al obtener producto. ${error}`);
        }      
    }

    updateProduct = async (id, updateData) => {
        const products = await this.getProducts();
        try {
            const isId = (element) => { return element.id === id; }
            const index = products.findIndex(isId);
            if (index !== -1) {
                let oldData = products[index];
                let newData = { ...oldData, ...updateData };
                products.splice(index, 1, newData);
                await this.#writeFile(products);
                return true;
            }
            else {
                throw new Error("No se encontró un producto con ese ID");
            }           
        } catch (error) {
            console.error(`Hubo un error al actualizar el producto.\n ${error}`);
        }
    }

    deleteProduct = async (id) => {
        let exists = await this.getProductById(id);
        if (exists) {   
            let products = await this.getProducts();
            try {
                products = products.filter(product => product.id != id);
                await this.#writeFile(products);
                const updatedList = await this.getProducts();
                return updatedList;
            } catch (error) {
                console.error(`\nError al eliminar producto. ${error}`);
            }  
        }
        else {
            console.log(`\nEste producto no existe.`);
            return null;
        }
    }
}

export default ProductManager
// module.exports = {
//     ProductManager
// }