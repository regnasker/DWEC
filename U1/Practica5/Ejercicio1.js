"use strict"
var x = 'oculto';
var y = 'ver';
function generaSurtido(){
  var kiosko = [" ", "Revistas", "Chucherias", "Bebidas", "Periodicos",
          "Fasciculos", "Papas", "Cartas", "Llaveros"];
  return kiosko;
}

function consultaPrecios(x){
  var precios = [0, 2, 3, 1.5, 1, 5, 2.5, 6, 0.5];
  return precios[x];
}

//primera tabla
function mostrarSurtidoPrecio(surtido) {
  if(document.getElementById('tabla')){
    document.getElementById('tabla').style.display="block";
    document.getElementById('tablaPrecios').style.display="none";
  }else{
  document.write("<div align='center' id='tabla'><table><tr>");
  for (var i = 1; i < surtido.length; i++) {
      document.write('<td><img width="100px" src="' + surtido[i] + '.png" alt="'+ surtido[i] + '">');
    }
  document.write("</tr></table>");
  document.write("<p><button onclick='mostrarPrecios(generaSurtido())'>Mostrar</button></p></div>");
  }
  }
//segunda tabla
function mostrarPrecios(surtido){
  if(document.getElementById('tablaPrecios')){
    document.getElementById('tablaPrecios').style.display="block";
    document.getElementById('tabla').style.display="none";
  }else{
  document.getElementById('tabla').style.display="none";
  document.write("<div align='center' id='tablaPrecios'><table><tr>");

  for (var i = 1; i < surtido.length; i++) {
      document.write('<td><img width="100px" src="' + surtido[i] + '.png" alt="'+ surtido[i] + '">');
    }
    document.write("</tr><tr>");
    for (var i = 1; i < surtido.length; i++) {

        document.write('<td><h2 align="center">' + consultaPrecios(i) + '€</h2></td>' );
      }
    document.write("</tr></table>");
    document.write("<p><button onclick='mostrarSurtidoPrecio(generaSurtido())'>Ocultar</button></p></div>");
    }
  }
