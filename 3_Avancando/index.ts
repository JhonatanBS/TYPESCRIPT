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

/* Props opcionais: Com o sinal de interrogação, declaramos que o parãmentro pode receber ou não um argumento */

const dog = (name:string, age: number, color?: string)=>{
    console.log(`Nome: ${name}`);
    console.log(`Idade: ${age}`);
    if(color)
       console.log(`Cor: ${color}`);
}

dog("Dudu",4,"white");

/* Validando dados opcionais */

const data = (name:string,age: number, genre?: string)=>{
    console.log(`Nome: ${name}`);
    console.log(`Idade: ${age}`);

    if(genre !== undefined){
        console.log(`Gênero: ${genre}`);
    }
}

data("Joel",20,"Masculino");
data("Joana",25);

/* Union type */

function age(data: number | string){
    console.log(`A minha idade é ${data}`);
}

age(25);
age("30");
//age(true);

/* Union types com typeof*/

const showProducts = (name:string | boolean)=>{

    if(typeof name === "boolean"){
        console.log(`Produto não encontrado no sistema!`);
        return;
    }

    console.log(`O produto ${name} está em estoque`);
}

showProducts("Televisão");
showProducts(false);

/* type alias */

type ID = string | number;

function showId(id: ID){
    console.log(`O ID é ${id}`);
}

showId(151);
showId("30");

/* interfaces */

interface numbers{
    a: number,
    b: number,
    c: number
}

const sum = (mat: numbers)=>{
    console.log(`A soma de ${mat.a} + ${mat.b} + ${mat.c} = ${ mat.a + mat.b + mat.c}`);
}

const valores: numbers = {
    a: 30,
    b: 50,
    c: 120
}

sum(valores);

/* types alias X interfaces */

interface Person{
    name: string
}

interface Person{
    age: number
}

function dataPerson(data: Person){
    console.log(`Meu nome ${data.name} e tenho ${data.age}`);
}

const showPerson = {name:'Matheus',age: 25}

dataPerson(showPerson);

type products = {
    name: string
}

// type products = {
//     price: string
// }