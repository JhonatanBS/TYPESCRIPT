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