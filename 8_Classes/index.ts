//  ! : Utilizando operador !, para não iniciar os campos em classe

class User {
    name!: string;
    age!: number;
}

const Paulo = new User();

console.log(Paulo);

// constructor: 

class NewUser {
  name;
  age;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;    
  }
}

const Mateus = new NewUser("Mateus", 25);

console.log(Mateus);

// 3 - Readonly: Os campos serão somente para leitura, não é possível sofrear alteração

class Car {
  readonly brand = "Fiat";
  model : string;

  constructor(model: string) {
    this.model = model;
  }
}

const Uno = new Car("Uno");
// Uno.brand = "Audi"; Erro

console.log(Uno);

/* 
   Herança: Quando um classe filho recebe as propriedades de outra classe pai, usamos o 'extends'.
   super(): É chamado quando herdamos propriedades de outra classe.
*/

class Pessoa {
  name: string;
  age: number;
  sex: string;

  constructor(name: string, age: number, sex: string) {
    this.name = name;
    this.age = age;
    this.sex = sex;
  }
}

class Employee extends Pessoa{
    salary: number;
    hours: number;

    constructor(name: string, age: number, sex: string,salary: number, hours: number) {
      super(name,age,sex);
      this.salary = salary;
      this.hours = hours;
    }
}

const Joana = new Pessoa("Joana", 25, "F");
const engineer = new Employee("Marta",30, "F", 4500.50, 8);

console.log(Joana, engineer);