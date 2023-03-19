const obj1 = {
  propiedad1: "c",
  propiedad2: true,
  propiedad3: 333,
};

const obj2 = {
  propiedad1: "2",
  propiedad2: false,
  propiedad4: 300,
};

const obj3 = { ...obj2, ...obj1 };

// console.log(obj3);

const { propiedad1, ...rest } = obj2; // se "quita" la propiedad1, con el ...rest se crea uno nuevo con el "resto" del objeto

console.log(propiedad1);
console.log(rest);
