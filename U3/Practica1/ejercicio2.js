var h1 = document.querySelector("h1");
h1.innerHTML = "Sugerencias camiado";

document.getElementsByClassName("destacado")[0].style.fontWeight = "bold";
document.getElementById("resultado").style.display = "none";
document.getElementsByName("sugerencia")[0].setAttribute("required","required");

function mostrar(){
  document.getElementById("resultado").style.display = "block";
}
