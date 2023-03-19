// una función pasada por parámetros

const array = [1, 2, 3, 4, 5];

// esto
let newArray = array.map((num) => {
  console.log(num);
});




// es lo mismo que esto
let callBack2 = (num) => {
    console.log(num);
}

let newArray2 = array.map(callBack2);
