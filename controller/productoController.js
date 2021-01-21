const productos = require("../data/productos") //REQUIERO EL MODULO PRODUCTOS!

module.exports ={
    index: (req, res)=>{
        res.render("index")
    },
    detalle:(req, res)=>{
        let id = productos.find(producto=>producto.id === Number(req.params.id))
         
        res.render("productoDetalle",{ 
            title:id.name,
            id, 
        })

    }
}