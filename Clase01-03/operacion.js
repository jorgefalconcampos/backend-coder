const sumar = (numero1, numero2) => numero1 + numero2;
const restar = (numero1, numero2) => numero1 - numero2;

const operacion = (numero1, numero2, cb) => {
    let resultado = cb(numero1, numero2);

    console.log("Este es el resultado: " + resultado);
}

operacion(1, 3, sumar);

