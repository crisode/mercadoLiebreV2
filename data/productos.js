const fs = require("fs");

module.exports = JSON.parse(fs.readFileSync(__dirname + "/datosProductos.json", "utf-8"));