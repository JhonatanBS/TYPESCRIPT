// export default e import

import hello_world from "./hello_world";

console.log(hello_world());

// export and import destructuring

import { dataPersonal } from "./dataPersonal";

console.log(dataPersonal);

// import de múltiplos dados

import { mongodb, mysql, connection } from "./databases";

console.log(mongodb,mysql,connection());

// as in import

import { orm as sequelize } from "./orm";

// * para importar todos os dados de um arquivo

import * as names from "./academy";

console.log(names.student, names.teacher);