function rnd(){
  do{
    var n = Math.random()*10;
  }while(n<6||n>1);
  var num = parseInt(n);
}
function dado(rnd){
  switch (rnd) {
    case 1:
      document.write("<img onclick='dado()' src='1.png' alt='dado' width='400em'> ");
      break;
    case 2:
      document.write("<img onclick='dado()' src='2.png' alt='dado' width='400em'> ");
      break;
    case 3:
      document.write("<img onclick='dado()' src='3.png' alt='dado' width='400em'> ");
      break;
    case 4:
      document.write("<img onclick='dado()' src='4.png' alt='dado' width='400em'> ");
      break;
    case 5:
      document.write("<img onclick='dado()' src='5.png' alt='dado' width='400em'> ");
      break;
    case 6:
      document.write("<img onclick='dado()' src='6.png' alt='dado' width='400em'> ");
      break;
    default:document.write("ERROR");

  }
}
