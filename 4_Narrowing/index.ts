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
