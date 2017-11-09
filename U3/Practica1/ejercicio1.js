onload = function () {
  var a = document.body.children;
  var b = document.body.childNodes;
  for (var i = 0; i < a.length; i++) {
    console.log("Children: ");
    console.log(a[i]);
    console.log("Nodes: ")
    console.log(b[i]);
    a[i].innerText = "CAMBIADO";
    a[i].style.color = "blue";
  }
}
var b = document.head.children[1];
console.log(b);
b.innerHTML = "Titulo cambiado";
