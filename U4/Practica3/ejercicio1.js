
onload = function () {
  var form = document.forms[0];
  /*Focos*/
  var inputs = document.getElementsByTagName("input");
  function enFoco(e){
    e.target.style.outline = "none"
    e.target.style.border = "purple solid 2px";
  }

  function sinFoco(e) {
    e.target.style.outline = "none";
    e.target.style.borderColor = "initial";
    e.target.style.borderStyle = "inset";
  }

  for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("focus", enFoco);
    inputs[i].addEventListener("blur", sinFoco);

  }
  form.onsubmit = function(e){
    var error = document.getElementsByClassName("errores")[0];
    var listaError = "";
    var compr = true;
    e.preventDefault();

    /*Validar nombres*/
    var nom = document.getElementById("nombre").value;
    console.log(nom);
    if (nom = null || nom.length == 0 || !(/^\S+[\s?\S+]*$/.test(nom))) {
      listaError += "El nombre es erróneo </br>";
      compr = false;
    }

    /*Validar Apellidos*/
    var ape = document.getElementById("apellidos").value;
    console.log(ape);
    if (ape = null || ape.length == 0 || !(/^\S+[\s?\S+]*$/.test(ape))) {
      listaError += "Los apellidos son erróneos </br>";
      compr = false;
    }

    /*Validar Email*/
    var email = document.getElementById("email").value;
    console.log(email);
    if ( !/^\w+@\w+\.\w+$/.test(email) ){
      listaError += "El email es incorrecto <br/>";
      compr = false;
    }

    /*Validar Repeticion Email*/
    var emailRepe = document.getElementById("emailRepe").value;
    console.log(emailRepe);
    if (emailRepe != email){
      listaError += "El email introducido es diferente <br/>";
      compr = false;
    }
    /*Validar DNI*/
    var dni = document.getElementById("dni").value;
    console.log(dni);
    var letras = ['T','R','W','A','G','M','Y','F','P','D','X',
    'B','N','J','Z','S','Q','V','H','L','C','K','E','T'];
    if(isNaN(dni)){
      if(!/^\d{8}[A-Z]$/.test(dni)){
      listaError += "El dni introducido es erróneo <br/>";
      compr = false;
      }
      if(dni.charAt(8) != letras[(dni.substring(0, 8))%23]){
      compr = false;
      }
    }
    /*Validar Fecha*/
    var fecha = (document.getElementById("fecha").value).split("-");
    var year = fecha[0];
    var month = fecha[1];
    var day = fecha[2];
    console.log(day + "/" + month + "/" + year);
    var fechaCreada = new Date(year,(month - 1),day);
    console.log("Fecha creada: " + fechaCreada);

    var hoy = new Date();
    /*Comprobar si ha cumplido años*/
    var edad = hoy.getFullYear() - year - 1;
    if(hoy.getMonth() + 1 - month > 0){
      edad++;
    }
    if(hoy.getUTCDate() - year >= 0){
      edad++;
    }
    console.log("Edad: " + edad);

    /*Comprobación de edad y fecha introducida*/
    if( isNaN(fechaCreada) || day > 31 ||day < 1 || month < 1 || month >12 || year < 0 || year >= hoy.getFullYear()){
      listaError += "La fecha introducida es errónea";
      compr = false;
    }else if (edad < 18) {
      listaError += "Debe ser mayor de edad para inscribirse </br>"
      compr = false;
    }

    /*Comprobacion seccion favorita*/
    var fav = document.getElementById("selector").value;
    if (fav == 0 || fav == null) {
      listaError += "Escoja una sección <br>"
      compr = false;
    }

    /*Comprobacion metodo pago*/
    if (!document.getElementById("efectivo").checked && !document.getElementById("tarjeta").checked) {
      compr = false;
      listaError += "No ha seleccionado un método de pago <br>";
    }

    /*Comprobación de condiciones de alta*/
    if (!document.getElementById("cond").checked) {
      compr = false;
      listaError += "No se ha aprobado las condiciones de alta <br>";
    }

    /*Comprobación de la validacion*/
    if (compr){
      // listaError = "Tu petición se ha enviado correctamente";
      // error.style.color= "blue";
      formulario.action = fav+".html"
      formulario.submit();
      document.getElementById("enviar").value = "Enviando...";
      document.getElementById("enviar").disabled = true;
    }else{
      error.style.color= "red";

    }
    error.innerHTML = listaError;
  }

}
