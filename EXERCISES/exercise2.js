/*Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo)*/

function triangle (a, b, c){
  const valorA = isNaN(a) ? 0 : a;
  const valorB = isNaN(b) ? 0 : b;
  const valorC = isNaN(c) ? 0 : c;
  
  if (valorA <= 0 || valorB <= 0 || valorC <= 0) {
    return 'Os três lados precisam ser maiores que 0'
  } else if (valorA === valorB && b === valorC ){
    return 'Triângulo Equilátero'
  } else if (valorA !== valorB && valorB!== valorC && valorA !== valorC) {
    return 'Triângulo Escaleno'
  } else {
    return 'Triângulo Isósceles'
  }
  
}

console.log(triangle(0, 5, 6));
console.log(triangle(5, 5, 6));
console.log(triangle(5, 5, 5));
console.log(triangle(9, 5, 6));
console.log(triangle('a', 5, 0));
console.log(triangle(0, 0, 0));
console.log(triangle(-8, 5, 6));