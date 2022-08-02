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