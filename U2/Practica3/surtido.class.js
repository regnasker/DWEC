function Surtido(productos) {
  this.productos = productos;
  this.ordenPrecioMas = function(){
    this.productos.sort(function (n1,n2){
      return n1.precio - n2.precio;
    });
  }
  this.ordenPrecioMenos = function () {
    this.productos.sort(function (n1,n2){
      return n2.precio - n1.precio;
    });
  }
  this.filtrarVegano = function() {
    var a = this.productos.filter(function(n) {
      return n.vegano == true;
    });
    return a;
  }
  this.dibujarSurtido = function (prod) {
    cuerpo.innterHTML = "";
    var str = "";
    if (prod == undefined) {
      for (var i = 0; i < this.productos.length; i++) {
        str += "<div>";
        str += "<img src='" + this.productos[i].foto + "' alt='";
        str += this.productos[i].nombre + "'>";
        str += "<p>Productos: " + this.productos[i].nombre + "</p>";
        str += "<p>Descripcion: " + this.productos[i].descripcion + "</p>";
        str += "<p><b>Precio: " + this.productos[i].precio + "</b></p>";
        str += "</div>";
        // this.productos[i];
        }
        cuerpo.innerHTML = str;
      }else {
        for (var i = 0; i < prod.length; i++) {
          str += "<div>";
          str += "<img src='" + prod[i].foto + "' alt='";
          str += prod[i].nombre + "'>";
          str += "<p>Productos: " + prod[i].nombre + "</p>";
          str += "<p>Descripcion: " + prod[i].descripcion + "</p>";
          str += "<p><b>Precio: " + prod[i].precio + "</b></p>";
          str += "</div>";
          // this.prod[i];
        }
        cuerpo.innerHTML = str;
      }
    }
  }
