/* Parâmetros com interface */

interface Student{
    name: string,
    register: string,
    isEnrolled: boolean
}

const showStudent = (student: Student) =>{
    console.log(`O nome do aluno é ${student.name} e seu registro na escola é ${student.register}`);
    if(student.isEnrolled){
        console.log(`Ele está matrículado!`);
        return;
    }

    console.log("Ele não está matrículado!");
}

const dataStudent: Student = {
    name: "Jhonatan",
    register: "485956657-5",
    isEnrolled: true
}

showStudent(dataStudent);
showStudent({name:"Paulo", register: "45845995-1", isEnrolled: false});

/* dados opcionais de interface */

interface Employee{
    office: string,
    salary: number,
    extraHour?: boolean
}

function showEmployee(employee: Employee){
    console.log(`O cargo do empregado é ${employee.office} e seu salário é ${employee.salary}`);
    if(employee.extraHour){
       console.log(`O empregado fez horas extras esse mês!`);
    }
}

const dataEmployee: Employee = {
    office: "Programador",
    salary: 7560.90,
    extraHour: true
}

showEmployee(dataEmployee);
showEmployee({office:"design", salary: 5600.00});

/* readonly: Utilizado somente para leitura, nao é possível alterar o dado */

interface Product{
    name: string,
    readonly description: string
}

const showProduct: Product = {
    name: "Video game",
    description: "Video game com 1T"
} 

console.log(showProduct);
// showProduct.description = "Video game caro";

/* index signature: Não existe uma definição para a chave */

interface Coordinate{
    [index: string] : number
}

const coordData: Coordinate = {
    x: 48
}

coordData.y = 50;
coordData.z = 7;

console.log(coordData);

/* extends */

interface Person{
    name: string,
    age: number,
}

interface Son extends Person{
    hobby: string,
    food: string
}

const dataPerson: Son = {
    name: "Lucas",
    age: 25,
    hobby: "Academia",
    food: "estrogonofe"
}

console.log(dataPerson);

/* intersection types : Une duas ou mais interfaces */

interface Character{
    name: string,
    color: string
}

interface Skills{
    powers: string[]
}

type Sonic = Character & Skills;

const dataSonic: Sonic = {
    name: "Sonic",
    color: "blue",
    powers: ["jump","fly", "roll" ] 
}

console.log(dataSonic);

/* Tuplas */

type numbers =  [number, number,number];

const numberArray: numbers = [1,2,3];
 console.log(numberArray);