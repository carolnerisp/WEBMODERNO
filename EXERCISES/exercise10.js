/**​Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false. */

function divisivelPor3 (num) {

  if (! Number.isInteger(num)) {
    return 'Esse não é um número inteiro!';
  } else if (num % 3 == 0){
    return 'Esse número é divisível por 3';
  } else {
    return 'Esse número não é divisível por 3';
  }
}

console.log(divisivelPor3(81));
console.log(divisivelPor3(17));
console.log(divisivelPor3('a'));
console.log(divisivelPor3('81'));