function modificarSize() {
  var h1 = document.querySelector("h1");
  var p = document.querySelectorAll("p");
  for (var i = 0; i < p.length; i++) {
    p[i].style.fontSize = document.getElementById("combo").value;
  }
  h1.style.fontSize = document.getElementById("combo").value;
}
