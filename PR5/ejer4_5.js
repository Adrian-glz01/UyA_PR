const datosCompra = {
  dni: '43842779H',
  anioNacimiento: 2001,
  numeroCuenta: 'ES1111111111111111111111',
  productos: [
    {
      nombre: 'Pinceles',
      precio: 10.00,
      cantidad: 2
    },
    {
      nombre: 'Archivador',
      precio: 20.00,
      cantidad: 1
    },
    {
      nombre: 'Papelera',
      precio: 5.00,
      cantidad: 1
    },
    {
      nombre: 'Pegamento',
      precio: 2.00,
      cantidad: 3
    },
    {
      nombre: 'Lápices',
      precio: 1.00,
      cantidad: 10
    }
  ],
  descuento: 39, // 30% de descuento
  modalidaDePago: 'Efectivo',
  fecha_de_pago: '2023-03-09'
};

function CalcularImporte(datosCompra) {
  let importeTotal = 0;
  
  /**
   * Calcular el importe total de la compra
   */
  $.each(datosCompra.productos, function(index, producto) {
    importeTotal += producto.precio * producto.cantidad;
  });
  

  /**
   * Aplicar descuento si lo hay ( en este caso 30%)
   */
  if (datosCompra.descuento) {
    importeTotal = importeTotal * (1 - (datosCompra.descuento / 100));
  }

  return importeTotal;
} 

function printDatos() {
  var datos = CalcularImporte(datosCompra);
  var par = $("<p>").text('Se ha cobrado ' + datos + '€' + ' en el dia ' + datosCompra.fecha_de_pago); // crea un elemento p con el texto text 
  $("#caja3").append(par);
}