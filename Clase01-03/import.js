
let modo = 'calculadora';

async function ejemploImportar() {
    if (modo === 'calculadora') {
        const { default: Calculadora } = await import("./Calculadora");
        const calculadora = new Calculadora();
        console.log(calculadora.sumar(2+4));
    }
}

ejemploImportar();