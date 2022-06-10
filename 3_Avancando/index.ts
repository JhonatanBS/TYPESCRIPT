/* Tipagem de Arrays */

const numeros: number[] = [1,3,5,7,9,11,15]; 

// Não é possível inserir um dado do tipo string em um array numérico
//numeros.push("string");

const names: string[] = [ "João", "Paulo", "Matheus"];

// Não é possível inserir um dado do tipo numérico em um array de string
//names.push(5);

/* Tipagem alternativa para array*/

const num: Array<number> = [2,4,6,8,10];

// Não é possível inserir um dado do tipo string em um array numérico
//num.push("string");

/* Quebrando a tipagem com any */

const list: any[] = [{}, " ", [],520];// Aceita diversos tipos de dados

list.push([7,9, "Paulo"]);

/* Funções e a tipagem nos parâmetros */

function subtracao(a: number,b: number){// Os parâmetros só podem receber números
    console.log(a - b);
}

subtracao(15, 4);
//subtracao("ola", "World");

/* Retorno de uma função com tipo de dado*/

function pessoa(name: string, age: number):string{// É permitod apenas retorno de string
     return `Meu nome é ${name} e tenho ${age} anos.`;
}

// Não é possível retornar uma string em função com retorno de números
// function pessoa2(name: string, age: number):number{
//     return `Meu nome é ${name} e tenho ${age} anos.`;
// }

console.log(pessoa("Lucas", 20));

/* Tipos de Objetos*/

function rectangle(area: {h:number,b:number}):string{
    return `A área do retângulo da base ${area.b} e a altura ${area.h} é ${area.b * area.h}`;
}

console.log(rectangle({h:50,b:20}));