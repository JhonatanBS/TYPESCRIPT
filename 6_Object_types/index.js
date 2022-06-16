/* Parâmetros com interface */
var showStudent = function (student) {
    console.log("O nome do aluno \u00E9 ".concat(student.name, " e seu registro na escola \u00E9 ").concat(student.register));
    if (student.isEnrolled) {
        console.log("Ele est\u00E1 matr\u00EDculado!");
        return;
    }
    console.log("Ele não está matrículado!");
};
var dataStudent = {
    name: "Jhonatan",
    register: "485956657-5",
    isEnrolled: true
};
showStudent(dataStudent);
showStudent({ name: "Paulo", register: "45845995-1", isEnrolled: false });
