/**​Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch. */

const imprimirDia = function(dia){
  switch (dia) {
    case 1 : case 7:
      console.log('Dia não é útil');
      break
      case 2 : case 3 : case 4 : case 5 : case 6:
      console.log('Dia é útil');
      break
      default :
      console.log('Dia Inválido!');
  }
}

imprimirDia(1);
imprimirDia(2);
imprimirDia(3);
imprimirDia(4);
imprimirDia(5);
imprimirDia(6);
imprimirDia(7);

imprimirDia(20);