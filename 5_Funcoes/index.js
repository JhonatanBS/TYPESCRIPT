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
/* function generic */
function genericFunction(list) {
    return list[0];
}
console.log(genericFunction([1, 2, 3, 4, 5]));
console.log(genericFunction(["caderno", "livro", "mochila"]));
var list = function (value) {
    return value;
};
// Constraints
console.log(list(525));
console.log(list("Julio"));
console.log(list(true));
console.log(list([2, 4, 6, 8, 10]));
function larger(x, y) {
    var maior;
    return +x > +y ? maior = x : maior = y;
}
console.log(larger(10, 5));
console.log(larger('50', "20"));
//console.log(154,"20");
/* Function default */
function data(name, age) {
    if (age === void 0) { age = 20; }
    console.log("Meu nome \u00E9 ".concat(name, " e tenho ").concat(age));
}
data("Paulo");
data("Matheus", 35);
/* unknown */
function showId(id) {
    if (Array.isArray(id)) {
        console.log(id[0]);
    }
    else if (typeof id === "number") {
        console.log(id);
    }
}
showId([1, 2, 3]);
showId(500);
/* never: Não retorna nada */
function option(msg) {
    throw new Error(msg);
}
// option("Erro no código");
/* Operator Rest*/
function sumValues() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (acumalador, valueAtual) { return acumalador + valueAtual; });
}
console.log(sumValues(1, 2, 3, 4, 5, 6, 7, 8, 9));
/* Destructuring */
function dog(_a) {
    var name = _a.name, age = _a.age;
    return "Meu cachorro tem ".concat(age, " anos e seu nome \u00E9 ").concat(name);
}
var dataDog = { name: "Rex", age: 25 };
console.log(dataDog);
