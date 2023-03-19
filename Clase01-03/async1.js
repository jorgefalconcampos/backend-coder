const temporizador = (cb) => {
  setTimeout(() => {
    cb();
  }, 3000);
};


let operacion = () => {
    console.log("Realizando operación...")
}

console.log("Iniciando tarea");
temporizador();
console.log("Finalizando tarea");