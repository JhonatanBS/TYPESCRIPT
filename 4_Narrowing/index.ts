/* Typeof guard */

const mult = (a: number | string , b?: number | string)=>{

    if(typeof a === "string" && typeof b === "string" ){
        console.log(parseFloat(a) * parseFloat(b));
    }else if(typeof a === "number" && typeof b === "number"){
        console.log( a * b);
    }else{
        console.log("Impossível somar!");
    }
}

mult(50, 2);
mult("20", "10");

/* Checando se valor existe */
const operations = (arr: number[], operation?: string | undefined)=>{

    if(operation){
        if(operation === "+"){
            console.log(arr.reduce((i,total)=> i + total));  
        }else if(operation === "-"){
            console.log(arr.reduce((i,total)=> i - total));  
        }else if(operation === "*"){
            console.log(arr.reduce((i,total)=> i * total));  
        }else if(operation === "/"){
            console.log(arr.reduce((i,total)=> i / total));  
        }
    }else{
        console.log("Erro: Escolha uma operação: + / - * ")
    }
}

operations([1,2,3,4,5,6,7,8,9]);
operations([1,2,3,4,5,6,7,8,9],"+");
operations([1,2,3,4,5,6,7,8,9],"-");
operations([1,2,3,4,5,6,7,8,9],"*");
operations([1,2,3,4,5,6,7,8,9],"/");

/* instanceof */
class User {
    name;
  
    constructor(name: string) {
      this.name = name;
    }
  }
  
  class SuperUser extends User {
    constructor(name: string) {
      super(name);
    }
  }
  
  const jhon = new User('Jhon');
  const paul = new SuperUser('Paul');
  
  function userGreeting(user: object) {
    if (user instanceof SuperUser) {
      console.log(`Olá ${user.name}, deseja ver os dados?`);
    } else if (user instanceof User) {
      console.log(`Olá ${user.name}!`);
    }
  }
  
  userGreeting(jhon);
  userGreeting(paul);

  /* Operador in */
  class Dog {
    name
    breed
  
    constructor(name: string, breed?: string) {
      this.name = name
      if (breed) {
        this.breed = breed
      }
    }
  }
  
  const turca = new Dog('Turca')
  const bob = new Dog('Bob', 'Pastor Alemão')
  
  function showDogDetails(dog: Dog) {
    if ('breed' in dog) {
      console.log(`O cachorro é da raça: ${dog.breed}`)
    } else {
      console.log('O cachorro é um SRD!')
    }
  }
  
  showDogDetails(turca)
  showDogDetails(bob)