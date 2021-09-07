var app = require("./express/server");
var port = process.env.PORT || 3000;
var server = app.listen(port, function () {
  console.log("Escuchando en el puerto " + port);
});