/* TIPOS DE DADOS */

// 1 - number
let a: number = 100;
let b: number = 200;

console.log(a + b);
console.log(a, typeof a, b, typeof b);

// 2 - string
let nome: string = "Paulo";
console.log(nome, typeof nome);

// 3 - boolean
let lampada: boolean= true;
console.log(lampada, typeof lampada);

/* INFERENCE E ANNOTATION */

// annotation: O programador declara o tipo de dado
const ann: string= "annotation";

// inference: O Typescrypt detecta o tipo de dado e atribuí
let inf = "inference";
let num = 50;