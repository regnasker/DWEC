
onload = function () {
  if(window.XMLHttpRequest){
    var xhr = new XMLHttpRequest();
  }else if (ActiveXObject("Microsoft.XMLHTTP")) {
    var xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }
  nombre.onkeyup = function () {
    var str = nombre.value;
      console.log(str);
      xhr.open("GET","Sugerencias.php?q="+str,true);
      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200){
          sugerencia.innerHTML = xhr.responseText;
        }
      }
    xhr.send();
  }
}
