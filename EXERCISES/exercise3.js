/*Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente */

function expoente (base, expoente){
  base = isNaN(base) ? 0 : base;
  expoente = isNaN (expoente) ? 0 : expoente;

  return resultado = Math.pow(base, expoente);
}

console.log('O resultado é: ', expoente(2, 2));
console.log('O resultado é: ', expoente(4, 3));
console.log('O resultado é: ', expoente(2, 0));
console.log('O resultado é: ', expoente(-1, 2));
console.log('O resultado é: ', expoente(0, -4));