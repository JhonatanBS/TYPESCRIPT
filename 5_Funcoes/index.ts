/* Function void: Não retorna nada */

function welcome():void{
    console.log("Seja bem vindo!");
    //return 0; Erro ao tentar retorna algo
}

welcome();

/* Function callback como argumento */

const firstName = (name: string):string => `Meu nome é ${name}`;

const fullName = (f: (name:string) => string, firstName:string, lastName?: string) => {
   console.log("Dados:");
   
   if(lastName){
    console.log(`${f(firstName)} ${lastName}`);
    return;
   }

   console.log(`${f(firstName)}`);
}

fullName(firstName, "Paulo", "Silva");
fullName(firstName, "Matheus");

/* function generic */

function genericFunction<T>(list: T[]): T{
    return list[0];
}

console.log(genericFunction([1,2,3,4,5]));
console.log(genericFunction(["caderno", "livro", "mochila"]));

const list = <T>(value: T): T => {
   return value;
}

// Constraints
console.log(list<number>(525));
console.log(list<string>("Julio"));
console.log(list<boolean>(true));
console.log(list<number[]>([2,4,6,8,10]));

function larger<T extends number | string>(x: T, y: T):T{
    let maior:T;

    return +x > +y ? maior = x : maior = y;
}

console.log(larger(10,5));
console.log(larger('50',"20"));
//console.log(154,"20");

/* Function default */

function data(name, age = 20){
   console.log(`Meu nome é ${name} e tenho ${age}`);
}

data("Paulo");
data("Matheus", 35);

/* unknown */

function showId(id: unknown){
    if(Array.isArray(id)){
        console.log(id[0]);
    }else if(typeof id === "number"){
        console.log(id);
    }
}

showId([1,2,3]);
showId(500);

/* never: Não retorna nada */

function option(msg: string): never{
    throw new Error(msg);
}

// option("Erro no código");

/* Operator Rest*/

function sumValues(...numbers: number[]){
    return numbers.reduce((acumalador, valueAtual) => acumalador + valueAtual)
}

console.log(sumValues(1,2,3,4,5,6,7,8,9));

/* Destructuring */

function dog({name,age}: {name:string,age:number}):string{
    return `Meu cachorro tem ${age} anos e seu nome é ${name}`;
}

const dataDog = {name: "Rex", age: 25}

console.log(dataDog);