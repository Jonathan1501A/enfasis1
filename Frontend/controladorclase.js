class controladorclase{
    construct(){
    }
    
    ingresar (req, res) {
        try{
            const myJSON = JSON.stringify(req.body);
            const {nombres, apellidos, tema} = req.body;
            res.status(201).json({id: "Registro exitoso:5.0"});
        } catch (err) {
            res.status(500).send(err.message);
        }
    }
}

module.exports = new controladorclase();