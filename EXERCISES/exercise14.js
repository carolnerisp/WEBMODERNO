/**Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três
casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com
escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie
também um default, que retornará uma mensagem de erro no console. */

const fruta = function testaFruta(x){
  const nomeFruta = x.toString();

  switch (nomeFruta.toUpperCase()) {
    case 'MAÇÃ' :
      console.log('Não vendemos esta fruta aqui');
      break

      case 'KIWI' :
      console.log('Estamos com escassez de Kiwi');
      break

      case 'MELANCIA' :
      console.log('Aqui está, são 3 reais o quilo');
      break

      default :
      console.error('ERRO!');
      break
  }  

}

fruta('maçã');
fruta('MAÇÃ');
fruta('mAçÃ');
fruta('melancia');
fruta('kiwi');
fruta('banana');
fruta('$');
fruta(1);