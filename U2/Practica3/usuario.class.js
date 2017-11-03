var compra = [
  {
    nombre:'Camiseta',
    descripcion: 'Camiseta 100% algodón en colores oscuros',
    foto:'http://www.regalosfrikis.com/wp-content/uploads/2014/08/regalos-frikis-camiseta-soy-informatico.jpg',
    precio: 15,
    vegano: true
  },
  {
    nombre:'Pescado',
    descripcion: 'Salmón fresco. Envase de 500gr.',
    foto:'http://adiochiropracticclinic.com/wp-content/uploads/sites/39/2016/02/omega3.jpg',
    precio: 8,
    vegano: false
  },
  {
    nombre: "Juego",
    descripcion: "Juego de mesa. Para 4 jugadores",
    foto: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2017/01/mejores-juegos-mesa_2.jpg",
    precio: 29.95,
    vegano: true
  },
  {
    nombre: "Agua",
    descripcion: "Agua para beber. Composicion: H20.",
    foto: "http://www.elpregon.mx/news1/wp-content/uploads/2017/08/salud-2-18.jpg",
    precio: 0.90,
    vegano: true
  },
  {
    nombre: 'Juan',
    descripcion: 'El utilizador de champs asquerosos. Carrito Teemo 0/15/45',
    foto: 'https://i.ytimg.com/vi/n9iARzfbXfE/maxresdefault.jpg',
    precio: 10,
    vegano: true
  }
];
function Usuario (compra){
  this.id = (Math.random()*1000)+1;
  this.idioma = navigator.language
  this.navegador = navigator.userAgent
  this.compra = compra;
  this.importe = 0;

  this.calcularImporte = function (){
    this.importe = this.compra.reduce(function (total,n){
      return total = total + n.precio
    },0);
  }
  this.eliminarCompra = function (){
    if(compra.length>0){
        this.compra.pop();
    }
  }
  this.mostrarCompra = function (){
      cuerpo.innerHTML = "";
      var str = "";
        for (var i = 0; i < this.compra.length; i++) {
          str += "<div>";
          str += "<img src='" + this.compra[i].foto+"'alt ='";
          str += this.compra[i].nombre + "'>";
          str += "<p>El producto" + this.compra[i].nombre +"</p>";
          str += "<p>" + this.compra[i].descripcion +"</p>";
          str += "<p><b>" + this.compra[i].precio +"€</b></p>";
          str += "</div>";
        }
        str += "<hr>";
        str += "<b>El importe total: "+this.importe+"€ </b>";
        cuerpo.innerHTML = str;
  }
}
