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

/* Métodos: São funções dentro de uma classe, que são chamadas quando as classes são instanciadas */

class Cell {
  brand: string;
  model: string;

  constructor(brand: string, model: string) {
    this.brand = brand;
    this.model = model;
  }

  showCell() {
    console.log(`A marca do celular é ${this.brand} e o modelo é ${this.model}`);
  }
}

// Cell.showCell();
const iphone = new Cell("Iphone", "Pro 13");

iphone.showCell();

// getters: Faz a leitura do objeto chamado ou retornado

class VideoGame {
  public brand: string;
  public model: string;

  constructor(brand: string, model: string) {
    this.brand = brand;
    this.model = model;
  }

  get showVideoGame () {
    return `A marca do video game é ${this.brand} e o modelo ${this.model}`;
  }

}

const xbox = new VideoGame("Xbox", "Xbox 360");

console.log(xbox, xbox.showVideoGame);

// setters: Faz a modificação e atribuição de objetos

class Moon {
  public states!: Array<string>;

  set alterState (states: Array<string>) {
    this.states = states;
  }

  get readState() {
    return this.states; 
  }
}

const lua = new Moon();

lua.alterState = ["Nova","Minguante","Crescente", "Cheia"];

 console.log(lua.readState);

  

