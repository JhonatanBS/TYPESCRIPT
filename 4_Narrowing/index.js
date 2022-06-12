/* Typeof guard */
var mult = function (a, b) {
    if (typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a) * parseFloat(b));
    }
    else if (typeof a === "number" && typeof b === "number") {
        console.log(a * b);
    }
    else {
        console.log("Impossível somar!");
    }
};
mult(50, 2);
mult("20", "10");
/* Checando se valor existe */
var operations = function (arr, operation) {
    if (operation) {
        if (operation === "+") {
            console.log(arr.reduce(function (i, total) { return i + total; }));
        }
        else if (operation === "-") {
            console.log(arr.reduce(function (i, total) { return i - total; }));
        }
        else if (operation === "*") {
            console.log(arr.reduce(function (i, total) { return i * total; }));
        }
        else if (operation === "/") {
            console.log(arr.reduce(function (i, total) { return i / total; }));
        }
    }
    else {
        console.log("Erro: Escolha uma operação: + / - * ");
    }
};
operations([1, 2, 3, 4, 5, 6, 7, 8, 9]);
operations([1, 2, 3, 4, 5, 6, 7, 8, 9], "+");
operations([1, 2, 3, 4, 5, 6, 7, 8, 9], "-");
operations([1, 2, 3, 4, 5, 6, 7, 8, 9], "*");
operations([1, 2, 3, 4, 5, 6, 7, 8, 9], "/");
