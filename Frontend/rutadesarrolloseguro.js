const express = require("express");
const router = express. Router();
const clasecontrolador = require("./controladorclase.js"); 
router.post("/", clasecontrolador.ingresar);
module.exports = router;
