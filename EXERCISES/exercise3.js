/*Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente */

function expoente (base, expoente){
  const valorBase = isNaN(base) ? 0 : base;
  const valorExpoente = isNaN (expoente) ? 0 : expoente;

  return resultado = Math.pow(valorBase, valorExpoente);
}

console.log('O resultado é: ', expoente(2, 2));
console.log('O resultado é: ', expoente(4, 3));
console.log('O resultado é: ', expoente(2, 0));
console.log('O resultado é: ', expoente(-1, 2));
console.log('O resultado é: ', expoente(0, -4));