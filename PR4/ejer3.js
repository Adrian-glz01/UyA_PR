function informe() {
  var parrafos = document.getElementsByTagName("p").length;
  var lis = document.getElementsByTagName("li").length;
  var divs = document.getElementsByTagName("div").length;

  var parrafo = document.createElement("p");
  var texto_to_print = document.createTextNode("Hay " + parrafos + " párrafo/s, " + lis + " listas y " + divs + " divisiones");
  var texto_limpio = document.createTextNode("");
  
  parrafo.appendChild(texto_to_print);
  document.getElementById("caja3").appendChild(parrafo);

} 