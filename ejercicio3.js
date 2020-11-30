var x = 0;
function aleatorio(a,b){
  const MIN = 0;
  const MAX = 10;
  return Math.floor(Math.random() * (MAX-MIN+1)) + MIN;
}
function condicional(a,b,x){
  if (x >=5) {
    let multi = multiplicacion(a,b);
      document.getElementById('ejercicio3resultado').innerHTML = 'El numero es mayor a 5, la multiplicacion de los numero es: '+ multi;
  } else {
    let res = resta(a,b);
    document.getElementById('ejercicio3resultado').innerHTML = 'El numero es menor a 5, la resta de los numero es: '+ res;
  }
}
function Calcularejercicio3(){
  let a = document.getElementById('ejercicio3numero1').value;
  let b = document.getElementById('ejercicio3numero2').value;
  x = aleatorio(a,b)
  condicional(a,b,x)
  console.log(x);
}
