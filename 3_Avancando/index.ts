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