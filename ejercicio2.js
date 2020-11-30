function  multiplicacion(a,b){
  return a*b;
}
function Calcularejercicio2(){
  let numero1 = document.getElementById('ejercicio2numero1').value;
  let numero2 = document.getElementById('ejercicio2numero2').value;
  const total = resta(numero1,numero2);
  const totalmultiplicacion = multiplicacion(numero1,numero2);
  document.getElementById('ejercicio1resultadoResta').innerHTML = total;
  document.getElementById('ejercicio1resultadoMultiplicacion').innerHTML = totalmultiplicacion;
}
