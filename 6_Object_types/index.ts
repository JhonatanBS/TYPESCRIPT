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