/* Função Generics */

const code = <T>(codigo: T):string => {
    return `O meu código é ${codigo}`;
}
console.log(code("1231564fdsf"));
console.log(code(15545455));

/* Constrains em Generics */

function sum<T extends number>(a: T , b: T):string{
    return `A soma dos números ${a} e ${b} é ${ a + b}`;
}

console.log(sum(120,50));