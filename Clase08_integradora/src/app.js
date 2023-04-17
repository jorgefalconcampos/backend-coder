const express = require("express");
const routerApp = require("./routes");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/static", express.static(__dirname + "/public"));


app.use(routerApp);

const PORT = 8080;

app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    }
    console.log(`Server escuchando en el puerto: ${PORT}`);
});