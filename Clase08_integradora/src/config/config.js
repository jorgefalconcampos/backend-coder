const { connect } = require("mongoose");
const { productsModel } = require("../managerDaos/models/products_model.js");
const { cartsModel } = require("../managerDaos/models/carts_model.js");

const url =
  "mongodb+srv://jorgexd1999:ILcVLrZ4l012WgqY@cluster0.z2wcq6e.mongodb.net/test?retryWrites=true&w=majority";

const objConfig = {
  connectDB: async () => {
    try {
      await connect(url);
      console.log("Conectado a la base de datos");
    } catch (err) {
      console.log(err);
    }

    // await productsModel.create({
    //   title: "Nuevo producto 921",
    //   description: "Descripción del producto 1",
    //   code: "XYZ123",
    //   price: 9999,
    //   status: true,
    //   stock: 50,
    //   category: "Categoría 1 actualización",
    //   thumbnails: "https://ejemplo.com/thumbnail1.jpg",
    // });




    // await cartsModel.create({
    //     products: []
    // })

    // let cart = await cartsModel.findById({_id: "64421f2b09c17f3fb9f3695e"});
    // cart.products.push({product: "643f7dde3e4bd4706848c403"});
    // let resp = await cartsModel.findByIdAndUpdate({_id: "64421f2b09c17f3fb9f3695e"}, cart);
    // console.log(resp);
    

    // let cart = await cartsModel.findById({_id: "64421f2b09c17f3fb9f3695e"}).populate("products.product")
    let cart = await cartsModel.findById({_id: "64421f2b09c17f3fb9f3695e"}).populate()
    
    console.log(cart.products);


  },
};

module.exports = {
  objConfig,
};
