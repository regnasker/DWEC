var p = new Surtido(productos);
// var miCompra = [productos[0], productos[3]];
p.dibujarSurtido();

function recarga(){
  window.location.reload();
}
function verPorPrecioMas(p) {
  p.ordenPrecioMas();
  p.dibujarSurtido();
}
function verPorPrecioMenos(p) {
  p.ordenPrecioMenos();
  p.dibujarSurtido();
}
function verVegano() {
  p.dibujarSurtido(p.filtrarVegano());
}

function navegarCarrito() {
  location.assign("carrito.html");
}
function condCompraOnline (){
  var ventana = window.open("",
"", "width=300,height=300");
  ventana.document.write("<title>Condiciones</title>"+
   "Estas son las condiciones de la compra"+
 "<button onclick='window.close()'>Cerrar</button>");
}
