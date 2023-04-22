const { Schema, model } = require("mongoose")

const collection = "carts";

const CartSchema = new Schema({
    products: [{
        product: {
            type: Schema.Types.ObjectId,
            ref: "products"
        }
    }]
  
});

CartSchema.pre("findById", function() {
    this.populate("products.product")
});


// te quedaste en 2:29:13


const cartsModel = model(collection, CartSchema);

module.exports = {
    cartsModel
}
