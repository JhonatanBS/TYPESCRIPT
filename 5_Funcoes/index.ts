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