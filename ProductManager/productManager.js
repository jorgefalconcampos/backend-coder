const fs = require('fs')

class ProductManager {
    constructor(path) {
        this.path = path;
    }

    writeFile = async (data) => {
        try {
            await fs.promises.writeFile(
                this.path, JSON.stringify(data, null, 2)
            );
        }
        catch (err) {
            console.error(`Error: \n${err}`);
        }
    }

    addProduct = async (newProduct) => {
        const products =  await this.getProducts();
        try {
            let newId;
            products.length === 0 ? newId = 1 
            : newId = products[products.length-1].id+1;
            let newObj = { ...newProduct, id: newId};
            products.push(newObj);
            await this.writeFile(products);
            return newObj.id;
        } catch (error) {
            console.error(`Hubo un error al agregar el producto.\n ${error}`);
        }
    }

    getProducts = async () => {
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

    updateProduct = async (id) => {
        let products = await this.getProducts();
        let producToUpdate = this.getProductById(id);
    }

    deleteProduct = async (id) => {
        let exists = await this.getProductById(id);
        if (exists) {   
            let products = await this.getProducts();
            try {
                products = products.filter(product => product.id != id);
                await this.writeFile(products);
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


module.exports = {
    ProductManager
}