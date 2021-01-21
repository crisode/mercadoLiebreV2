var express = require('express');
var router = express.Router();

let productoController = require("../controller/productoController")

router.get('/', productoController.index);
router.get("/:id",productoController.detalle);


module.exports = router;
