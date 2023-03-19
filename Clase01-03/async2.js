let conteo = () => {
    let counter = 1;
    console.log("Realizando operación 2");

    let timer = setInterval(() => {
        console.log(counter++);
        if (counter > 5) {
            clearInterval(timer);
        }

    }, 1000);
}

console.log("Iniciando tarea 1");

conteo();
console.log("Iniciando tarea 3");