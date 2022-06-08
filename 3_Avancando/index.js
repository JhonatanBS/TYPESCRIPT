/* Tipagem de Arrays */
var numeros = [1, 3, 5, 7, 9, 11, 15];
// Não é possível inserir um dado do tipo string em um array numérico
//numeros.push("string");
var names = ["João", "Paulo", "Matheus"];
// Não é possível inserir um dado do tipo numérico em um array de string
//names.push(5);
/* Tipagem alternativa para array*/
var num = [2, 4, 6, 8, 10];
// Não é possível inserir um dado do tipo string em um array numérico
//num.push("string");
/* Quebrando a tipagem com any */
var list = [{}, " ", [], 520]; // Aceita diversos tipos de dados
list.push([7, 9, "Paulo"]);
/* Funções e a tipagem nos parâmetros */
function subtracao(a, b) {
    console.log(a - b);
}
subtracao(15, 4);
//subtracao("ola", "World");
