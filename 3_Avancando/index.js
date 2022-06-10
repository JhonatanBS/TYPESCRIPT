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
/* Retorno de uma função com tipo de dado*/
function pessoa(name, age) {
    return "Meu nome \u00E9 ".concat(name, " e tenho ").concat(age, " anos.");
}
// Não é possível retornar uma string em função com retorno de números
// function pessoa2(name: string, age: number):number{
//     return `Meu nome é ${name} e tenho ${age} anos.`;
// }
console.log(pessoa("Lucas", 20));
/* Tipos de Objetos*/
function rectangle(area) {
    return "A \u00E1rea do ret\u00E2ngulo da base ".concat(area.b, " e a altura ").concat(area.h, " \u00E9 ").concat(area.b * area.h);
}
console.log(rectangle({ h: 50, b: 20 }));
/* Props opcionais */
var dog = function (name, age, color) {
    console.log("Nome: ".concat(name));
    console.log("Idade: ".concat(age));
    if (color)
        console.log("Cor: ".concat(color));
};
dog("Dudu", 4, "white");
