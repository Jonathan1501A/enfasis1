const express = require("express");
const cors = require("cors");
const app = express();
const clasedesoftwareseguro = require("./rutadesarrolloseguro.js")

app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
    res.send("Subi el servidor y vamos bien");
})
app.use("/desarrollo", clasedesoftwareseguro);
app.listen (6500, () => {
    console.log("servidor activo.......");
});
