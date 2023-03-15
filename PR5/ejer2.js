

function insertarTexto(text) {
  var par = $("<p>").text(text); // crea un elemento p con el texto text 
  $("#caja3").append(par);
}