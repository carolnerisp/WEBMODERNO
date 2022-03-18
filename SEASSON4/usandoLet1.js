var numero = 1;
{
    let numero = 2; //respeita o escopo de bloco
    console.log("dentro =", numero);
}
console.log("fora =", numero);