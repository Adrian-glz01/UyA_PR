function insertarTexto(text) {
  var parrafo = document.createElement("p");

  var texto_to_print = document.createTextNode(text);

  parrafo.appendChild(texto_to_print);

  document.getElementById("caja3").appendChild(parrafo);
}