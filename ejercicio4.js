function aleatorio2(){
  const MIN = 1;
  const MAX = 12;
  return Math.floor(Math.random() * (MAX-MIN+1)) + MIN;
}

function Calcularejercicio4(){
  let = numeroaleatorio = aleatorio2();
  (numeroaleatorio == 1 || numeroaleatorio == 3 || numeroaleatorio == 5 || numeroaleatorio == 7 || numeroaleatorio == 8 || numeroaleatorio == 10 || numeroaleatorio == 12 ) ? document.getElementById('ejercicio4resultado').innerHTML = "El mes "+numeroaleatorio+" tiene 31 dias." : '';

  (numeroaleatorio == 4 || numeroaleatorio == 6 || numeroaleatorio == 9 || numeroaleatorio == 11) ? document.getElementById('ejercicio4resultado').innerHTML = "El mes "+numeroaleatorio+" tiene 30 dias." : '';
  (numeroaleatorio == 29) ? document.getElementById('ejercicio4resultado').innerHTML = "El mes "+numeroaleatorio+" tiene 29 dias." :'';

}
