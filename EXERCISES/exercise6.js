/* Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos. */


function jurosSimples(capitalInicial, taxaDeJuros, tempoDeAplicacao){
  capitalInicial = isNaN(capitalInicial) ? 0 : capitalInicial;
  taxaDeJuros = isNaN(taxaDeJuros) ? 0 : taxaDeJuros;
  tempoDeAplicacao = isNaN(tempoDeAplicacao) ? 0 : tempoDeAplicacao;

  taxaDeJuros = taxaDeJuros / 100;

  let montante = capitalInicial * taxaDeJuros * tempoDeAplicacao;
  //montante = (Math.round(montante * 100) / 100).toFixed(2);
  
  return montante;
}

function jurosCompostos (capitalInicial, taxaDeJuros, tempoDeAplicacao){
  capitalInicial = isNaN(capitalInicial) ? 0 : capitalInicial;
  taxaDeJuros = isNaN(taxaDeJuros) ? 0 : taxaDeJuros;
  tempoDeAplicacao = isNaN(tempoDeAplicacao) ? 0 : tempoDeAplicacao;

  taxaDeJuros = taxaDeJuros / 100;

  let montante = capitalInicial * Math.pow((1 - taxaDeJuros), tempoDeAplicacao);
  montante = (Math.round(montante * 100) / 100).toFixed(2);

  return montante;
}

const montanteJurosSimples = jurosSimples(1000, 11.75, 3);
const montanteJurosComposto = jurosCompostos(1000, 11.75, 3);

console.log(`Montante Juros Simples: R$${montanteJurosSimples} \nMontante Juros Compostos: R$${montanteJurosComposto}`);