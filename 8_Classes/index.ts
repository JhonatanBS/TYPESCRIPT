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

// implements: Quando classes herdam interfaces ou types

interface Birds {
  fly(): string;
  peck(): string;
}

class PicaPau implements Birds{
  fly() {
    return `O pica-pau voa`;
  }

  peck() {
    return `O pica-pau bica`;
  }
}

const picaPau = new PicaPau();

console.log(picaPau.fly(), picaPau.peck());

// Override: é uma técnica que utilizamos para substituir um método

class Id {
  findById(): void{
    console.log("O id é 1235656");
  }
}

class NewId extends Id{
  findById(): void {
    console.log("O id mudou, agora é 98974545");
  }
}

const id = new NewId();

id.findById();

/* Visibilidades: public, protected e private */

// public: Podem ser acessados em qualquer lugar da aplicação

interface Bike{
  color: string;
  state: string;
  brand: string;
}
class Bicycle {
  public color: string;
  public state: string;
  public brand: string;

  constructor({color, state, brand}: Bike) {
    this.color = color;
    this.state = state;
    this.brand = brand;
  }
}

const gts:Bike = new Bicycle({color:"Red",state:"New",brand:"GTS"});

console.log(gts);

// protected: Só podem ser acessados por métodos

class Fish {
  protected breed: string;

  constructor(breed: string) {
    this.breed = breed;
  }

  protected showBreed() {
    return `A raça do peixe é ${this.breed}`;
  }
}

class Beta extends Fish {
  showBreedAll() {
    console.log(this.showBreed());
  }
}

const betaOne = new Beta("Beta");

betaOne.showBreedAll();

// private: Só podem ser acessados dentro da classe

class CPF {
  private dataCpf: string = "036.547.585-20";

  showCpf(){
    return this.dataCpf;
  }
}

const findCpf = new CPF();

// console.log(findCpf.dataCpf);
console.log(findCpf.showCpf());
