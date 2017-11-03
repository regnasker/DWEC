if(navigator.cookieEnabled){
  alert("Cookies activadas!");
}else{
  alert("Sin cookes");
}

var usuario = new Usuario(compra);
usuario.calcularImporte();
usuario.mostrarCompra();

function inicio (){
  location.assign("home.html");
}

function eliminar (){
usuario.eliminarCompra ();
usuario.calcularImporte ();
usuario.mostrarCompra ();
}

function hacerPedido(){
  var x = confirm("Pedido confirmado! \naceptada las condiciones?");
  if(compra.length>0){

    if(x){
      location.assign("pedidoOk.html");
    }else{
     location.assign("carrito.html");
    }
  }
}

function imprimir (){
  window.print();
}

function condCompraOnline (){
  var myWindow = window.open("",
"", "width=600,height=300");
  myWindow.document.write("<title>Condiciones</title>"+
   "Estas son las condiciones de la compra"+
 "<br/><br/><button onclick='window.close()'>Cerrar</button>");
}

//a.reduce(function (total,n.precio),0);
//Se necesita para que guarde en la posicion 0 el total
