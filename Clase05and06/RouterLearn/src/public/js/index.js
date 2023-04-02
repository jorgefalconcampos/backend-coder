const socket = io()  

socket.emit("message", "Mensaje del cliente")

// socket.on("evento-para-socket-individual", data => {
//     console.log(data);
// });


// socket.on("evento-para-todos-menos-para-el-socket-actual", data => {
//     console.log(data);
// });


// socket.on("evento-para-todos", data => {
//     console.log(data);

// });

const input = document.getElementById("textbox");

const log = document.getElementById("log");

input.addEventListener("keyup", event => {
    if (event.key === "Enter") {
        socket.emit("message2", input.value);
        input.value = "";
    }
});

socket.on("log", data => {
    let logs = "";
    data.logs.forEach(element => {
        logs += `<b>${element.socketId}</b> dice: ${element.message} <br/>`
    });
    log.innerHTML = logs;
})
