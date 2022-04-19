/**Faça um algoritmo que calcule o fatorial de um número. */

function calculaFatorial(x){
  let fatorial = isNaN(x) ? 0 : x;

  if (fatorial !== 0) {
    for (i = 1; i < x; i++ ){
      fatorial = fatorial * i;
    }
  } 
  return fatorial;
}

console.log(calculaFatorial(4));
console.log(calculaFatorial(2));
console.log(calculaFatorial(3));
console.log(calculaFatorial(10));