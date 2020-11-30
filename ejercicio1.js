function  resta(a,b){
  return a-b;
}
function Calcularejercicio1(){
  let numero1 = document.getElementById('ejercicio1numero1').value;
  let numero2 = document.getElementById('ejercicio1numero2').value;
  const total = resta(numero1,numero2);
  document.getElementById('ejercicio1resultado').innerHTML = total;
}
