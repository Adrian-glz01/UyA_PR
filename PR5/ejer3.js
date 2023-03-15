
function informe() {
  var numParrafos = $("p").length;
  var numListas = $("li").length;
  var numDivs = $("div").length;
  var box3_text = $("#caja3").html();
  var mensaje = box3_text + "La página de inicio tiene " + numParrafos + " párrafos, " + numListas + " elementos de lista y " + numDivs + " elementos div.";
  $("#caja3").html(mensaje);
}