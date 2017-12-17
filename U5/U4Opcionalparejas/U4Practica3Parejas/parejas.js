var arrayImagenes = new Array (13);
for (var i = 0; i < arrayImagenes.length; i++) {
  if (i > 11) {
    arrayImagenes[12] = "img/cruz.png";
  }else{
    arrayImagenes[i] = "img/"+i+".png";
  }
}
onload = function(){
  var tablero = document.getElementById('tablero');
  var array = [];
    while(array.length < 12){
        var random = Math.floor(Math.random()*12);
        if(array.indexOf(random) > -1) continue;
        array[array.length] = random;
    }
  for (var i = 0; i < arrayImagenes.length-1; i++) {
    var rnd = Math.floor(Math.random()*12);
    if (i%4==0 || i==0) {
      var tr = document.createElement("tr");
    }
      var td = document.createElement("td");
      var imagen = document.createElement("img");
      tablero.appendChild(tr);
      tr.appendChild(td)
      td.appendChild(imagen).setAttribute("src", arrayImagenes[array[i]]);
  }
}
