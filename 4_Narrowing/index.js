/* Typeof guard */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
/* instanceof */
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
var SuperUser = /** @class */ (function (_super) {
    __extends(SuperUser, _super);
    function SuperUser(name) {
        return _super.call(this, name) || this;
    }
    return SuperUser;
}(User));
var jhon = new User('Jhon');
var paul = new SuperUser('Paul');
function userGreeting(user) {
    if (user instanceof SuperUser) {
        console.log("Ol\u00E1 ".concat(user.name, ", deseja ver os dados?"));
    }
    else if (user instanceof User) {
        console.log("Ol\u00E1 ".concat(user.name, "!"));
    }
}
userGreeting(jhon);
userGreeting(paul);
/* Operador in */
var Dog = /** @class */ (function () {
    function Dog(name, breed) {
        this.name = name;
        if (breed) {
            this.breed = breed;
        }
    }
    return Dog;
}());
var turca = new Dog('Turca');
var bob = new Dog('Bob', 'Pastor Alemão');
function showDogDetails(dog) {
    if ('breed' in dog) {
        console.log("O cachorro \u00E9 da ra\u00E7a: ".concat(dog.breed));
    }
    else {
        console.log('O cachorro é um SRD!');
    }
}
showDogDetails(turca);
showDogDetails(bob);
var showReview = function (review) {
    if (!review.review) {
        console.log("Ops! Você não deixou sua avaliação!");
        return;
    }
    console.log("Agradecemos a sua avalia\u00E7\u00E3o de ".concat(review.review));
};
showReview({ review: 1 });
showReview({ review: 2 });
showReview({ review: false });
