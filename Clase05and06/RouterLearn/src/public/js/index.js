const socket = io()  

socket.emit("message", "Mensaje del cliente")

socket.on("evento-para-socket-individual", data => {
    console.log(data);
});


socket.on("evento-para-todos-menos-para-el-socket-actual", data => {
    console.log(data);
});


socket.on("evento-para-todos", data => {
    console.log(data);

});