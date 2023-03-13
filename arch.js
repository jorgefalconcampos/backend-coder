const fs = require("fs");

// síncrono

// fs.writeFileSync("./data.txt", "THIS es el texto a guardar", "utf-8");

// fs.appendFileSync("./data.txt", "\nEsto es otro texto agregado con append", "utf8");

// console.log(fs.existsSync("./data.txt"));

// const archivo = fs.readFileSync("./data.txt", "utf-8");

// console.log(archivo);

// fs.unlinkSync("./data.txt");




// callbacks

// fs.writeFileSync("./data.txt", "Esto es lo que agregamos al archivo", "utf-8", (err) => {
//     if (err) {
//         console.error("Hubo un error:" + err);
//     }
// });

// fs.readFile("./data.txt", "utf-8", (err, resultado) => {
//     if (err) {
//         console.log(err);
//     }

//     console.log(resultado);

//     fs.appendFile("./data.txt", "\nAppend", "utf-8", (err) => {
         
//     });
// });



// promesas

// fs.promises.writeFile("./data.txt", "Creando y escribiendo el archivo", "utf-8")
// .then(() => console.log("se escribió el archivo"))
// .catch(err => console.log(err));


const manejoArchivo = async () => {
    await fs.promises.writeFile("./data.txt", "Esto es el texto", "utf-8");
    console.log("se terminó de escribir el archivo");
    
    await fs.promises.appendFile("./data.txt", "\nEsto es el append", "utf-8");
    console.log("se terminó de adjuntar al archivo");

    let res = await fs.promises.readFile("./data.txt", "utf-8");
    console.log(res);
}

manejoArchivo();


