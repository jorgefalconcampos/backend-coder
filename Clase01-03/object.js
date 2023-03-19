const impuestos = {
  impuesto1: 222,
  impuesto: 341,
  impuesto4: 2343,
};

let parClaveValor = Object.entries(impuestos); //devuelve un array de los
let soloClave = Object.keys(impuestos);
let soloValor = Object.values(impuestos);

console.log(parClaveValor);
console.log(soloClave);
console.log(soloValor);
