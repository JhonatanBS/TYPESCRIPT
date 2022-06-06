"use strict";
/* TIPOS DE DADOS */
// 1 - number
let a = 500;
let b = 200;
console.log(a + b);
console.log(a, typeof a, b, typeof b);
// 2 - string
let nome = "Paulo";
console.log(nome, typeof nome);
// 3 - boolean
let lampada = true;
console.log(lampada, typeof lampada);
/* INFERENCE E ANNOTATION */
// annotation: O programador declara o tipo de dado
const ann = "annotation";
// inference: O Typescrypt detecta o tipo de dado e atribuí
let inf = "inference";
let num = 50;
/* TAREFA 02*/
let n = 100;
let s = n.toString();
console.log(typeof n, typeof s);
console.log(`O número ${n} que é um ${typeof n}, foi convertido para uma ${typeof s}: '${s}'`);
