/* Função Generics */

const code = <T>(codigo: T):string => {
    return `O meu código é ${codigo}`;
}
console.log(code("1231564fdsf"));
console.log(code(15545455));