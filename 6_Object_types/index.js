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
function showEmployee(employee) {
    console.log("O cargo do empregado \u00E9 ".concat(employee.office, " e seu sal\u00E1rio \u00E9 ").concat(employee.salary));
    if (employee.extraHour) {
        console.log("O empregado fez horas extras esse m\u00EAs!");
    }
}
var dataEmployee = {
    office: "Programador",
    salary: 7560.90,
    extraHour: true
};
showEmployee(dataEmployee);
showEmployee({ office: "design", salary: 5600.00 });
var showProduct = {
    name: "Video game",
    description: "Video game com 1T"
};
console.log(showProduct);
var coordData = {
    x: 48
};
coordData.y = 50;
coordData.z = 7;
console.log(coordData);
var dataPerson = {
    name: "Lucas",
    age: 25,
    hobby: "Academia",
    food: "estrogonofe"
};
console.log(dataPerson);
