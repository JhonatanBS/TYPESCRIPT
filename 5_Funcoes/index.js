/* Function void: Não retorna nada */
function welcome() {
    console.log("Seja bem vindo!");
    //return 0; Erro ao tentar retorna algo
}
welcome();
/* Function callback como argumento */
var firstName = function (name) { return "Meu nome \u00E9 ".concat(name); };
var fullName = function (f, firstName, lastName) {
    console.log("Dados:");
    if (lastName) {
        console.log("".concat(f(firstName), " ").concat(lastName));
        return;
    }
    console.log("".concat(f(firstName)));
};
fullName(firstName, "Paulo", "Silva");
fullName(firstName, "Matheus");
