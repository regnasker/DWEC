for (var i = 0; i < document.getElementsByTagName("p").length; i++) {
    document.getElementsByTagName("p")[i].innerHTML = "Parrafo " + (i+1);
}
function recorreTag(){
  var color =  document.getElementById("txtColor");
  for (var i = 0; i < document.getElementsByTagName("p").length; i++) {
  document.getElementsByTagName("p")[i].style.color = color.value;
  }
}
