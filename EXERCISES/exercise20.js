/**Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1. */

function calculaCedulas(x){
  const valor = isNaN(x) ? 0 : x;
  let notas100, notas50, notas10, notas5, notas1, resto = valor, retorno = '';

  if (valor >= 100) {
    notas100 = Math.trunc(valor / 100);
    resto = valor % 100;

    retorno = notas100.toString() + ' nota(s) de R$100. ';
  }  
  
  if (resto >= 50) {
    notas50 = Math.trunc(resto / 50);
    resto = valor % 50;

    retorno = retorno + notas50.toString() + ' nota(s) de R$50. ';
  }

  if (resto >= 10) {
    notas10 = Math.trunc(resto / 10);
    resto = valor % 10;

    retorno = retorno + notas10.toString() + ' nota(s) de R$10. ';
  }

  if (resto >= 5) {
    notas5 = Math.trunc(resto / 5);
    resto = valor % 5;

    retorno = retorno + notas5.toString() + ' nota(s) de R$5. ';
  }

  if (resto >= 1) {
    notas1 = Math.trunc(resto / 1);
    resto = valor % 5;

    retorno = retorno + notas1.toString() + ' nota(s) de R$1. ';
  }
  
  return retorno;
}

console.log(calculaCedulas(250));
console.log(calculaCedulas(18));
console.log(calculaCedulas(15045));
console.log(calculaCedulas(17));

