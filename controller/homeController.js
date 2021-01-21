const productos = require("../data/productos") //REQUIERO EL MODULO PRODUCTOS!

module.exports ={
    index: (req, res)=>{
        res.render("index", {
            productos:productos,
            title:"Mercado Liebre"
        })
    }
}