/* Função Generics */
var code = function (codigo) {
    return "O meu c\u00F3digo \u00E9 ".concat(codigo);
};
console.log(code("1231564fdsf"));
console.log(code(15545455));
/* Constrains em Generics */
function sum(a, b) {
    return "A soma dos n\u00FAmeros ".concat(a, " e ").concat(b, " \u00E9 ").concat(a + b);
}
console.log(sum(120, 50));
