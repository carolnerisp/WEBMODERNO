/*Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo)*/

function triangle (a, b, c){
  a = isNaN(a) ? 0 : a;
  b = isNaN(b) ? 0 : b;
  c = isNaN(c) ? 0 : c;
  
  if (a <= 0 || b <= 0 || c <= 0) {
    return 'Os três lados precisam ser maiores que 0'
  } else if (a === b && b === c ){
    return 'Triângulo Equilátero'
  } else if (a !== b && b!== c && a !== c) {
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