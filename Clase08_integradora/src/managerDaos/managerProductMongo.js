const producModel = require('./models/products_model.js')

class ProductManagerMongo {
    async getAllProducts(){
        return await producModel.find().lean()
    }
    async getProductById(pid){
        return 'GET PRODUCTOS'
    }
    async addProduct(newProduct){
        return await producModel.create(newProduct) 
    }
    async updateProduct(pid, productToUpdate){
        return 'UPDATE PRODUCTOS'
    }
    
    async deleteProduct(pid){
        return 'UPDATE PRODUCTOS'
    }
    
}

module.exports = new ProductManagerMongo()