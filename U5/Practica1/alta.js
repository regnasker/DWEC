
onload = function () {
  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
  }
  document.getElementsByTagName("h1")[0].innerHTML = "¡Bienvenido  "  + getCookie("Nombre") +" "+ getCookie("Apellidos")+ "!";
  document.getElementById("dni").innerHTML = "Dni: " + sessionStorage.getItem("dni");
  document.getElementById("email").innerHTML = "Email: " + localStorage.getItem("email");
}
