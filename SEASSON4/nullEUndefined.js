let valor //não inicializada
console.log(valor);

valor = null;
console.log(valor);
//console.log(valor.toString()) Erro! não posso acessar um valor nulo

const produto = {};
console.log(produto.preco);
console.log(produto);

produto.preco = 3.50;
console.log(produto);

produto.preco = undefined; //evite arribuir undefined
console.log(!!produto.preco);
//delete produto.preco //forma correta de excluir
console.log(produto);

produto.preco = null;
console.log(!!produto.preco);

/*const a = {name: "Teste"}
const b = a;

b.name = "Opa" //apontam para o mesmo objeto em memória

console.log(a,b);

let c = 3;
let d = c;

d++;

console.log(c,d);*/