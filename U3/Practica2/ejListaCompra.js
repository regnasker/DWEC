function borrarElemento(){
  var del = document.querySelector("p:hover");
  del.parentNode.removeChild(del);
}
function anadirElemento() {
  var txt = document.getElementsByName("text")[0];
  var type = document.getElementById("selector");
  var miP = document.createElement("p");

  var d = document.createElement("div");

  var textoCaja = document.createTextNode(txt.value);

  if (txt.value && type.value != 0) {

      document.body.appendChild(d);
      miP.appendChild(textoCaja);
      d.appendChild(miP);
      // d.style.border= "2px solid "+ selector.value ;
      d.setAttribute("class",selector.value);
      miP.style.color = selector.value;
      miP.setAttribute("onclick","borrarElemento()");
  }else{
    alert("No has introducido un producto o no has seleccionado una categoría");
  }
}
function borrarLista() {
  var del = document.body.getElementsByTagName("p");
  for (var i = del.length-1; i >= 0; i--) {
    del[i].parentNode.removeChild(del[i]);
  }
}
