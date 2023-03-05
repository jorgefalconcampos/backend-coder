productsArray = [
  {
    id: 1,
    title: "Producto 1",
    descripcion: "Mi producto",
    thumbnail: "imagen.url",
    price: 300,
    code: "0001",
    stock: 100,
  },
];

class ProductManager {
  constructor() {
    this.products = productsArray;
  }

  addProducts(newProduct) {
    const product = this.products.find((prod) => prod.code === newProduct.code);
    if (product) {
      return "Ya existe el producto con este código";
    }

    if (this.products.length == 0) {
      this.products.push({ id: 1, ...newProduct });
    } else {
      this.products.push({
        id: this.products[this.products.length - 1].id + 1,
        ...newProduct,
      });
    }
  }

  getProducts() {
    return this.products;
  }

  getProductsById(id) {
    const product = this.products.find((prod) => prod.id === id);

    if (!product) {
      return "Not found";
    } else {
      return product;
    }
  }
}

const productos = new ProductManager();

productos.addProducts({
  title: "Producto 2",
  descripcion: "producto",
  thumbnail: "imagen.url",
  price: 540,
  code: "0002",
  stock: 10,
});

console.log("\n\nTodos: \n", productos.getProducts());
console.log("\n\nPor ID: \n", productos.getProductsById(1));
