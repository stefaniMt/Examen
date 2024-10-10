"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAverageAge = exports.people = void 0;
//Personas : sumar todas las edades y calcular el promedio de las edades
exports.people = [
    { "id": 1, "name": "Juan", "edad": 30, "sexo": "Masculino" },
    { "id": 2, "name": "Pedro", "edad": 25, "sexo": "Masculino" },
    { "id": 3, "name": "María", "edad": 28, "sexo": "Femenino" },
    { "id": 4, "name": "Ana", "edad": 22, "sexo": "Femenino" },
    { "id": 5, "name": "Luis", "edad": 35, "sexo": "Masculino" },
    { "id": 6, "name": "Sofía", "edad": 27, "sexo": "Femenino" },
    { "id": 7, "name": "Carlos", "edad": 32, "sexo": "Masculino" },
    { "id": 8, "name": "Laura", "edad": 26, "sexo": "Femenino" },
    { "id": 9, "name": "Jorge", "edad": 29, "sexo": "Masculino" },
    { "id": 10, "name": "Marta", "edad": 24, "sexo": "Femenino" },
    { "id": 11, "name": "Andrés", "edad": 31, "sexo": "Masculino" },
    { "id": 12, "name": "Elena", "edad": 23, "sexo": "Femenino" },
    { "id": 13, "name": "Miguel", "edad": 34, "sexo": "Masculino" },
    { "id": 14, "name": "Lucía", "edad": 21, "sexo": "Femenino" },
    { "id": 15, "name": "Fernando", "edad": 33, "sexo": "Masculino" },
    { "id": 16, "name": "Isabel", "edad": 30, "sexo": "Femenino" },
    { "id": 17, "name": "Ricardo", "edad": 28, "sexo": "Masculino" },
    { "id": 18, "name": "Patricia", "edad": 27, "sexo": "Femenino" },
    { "id": 19, "name": "Roberto", "edad": 26, "sexo": "Masculino" },
    { "id": 20, "name": "Gabriela", "edad": 25, "sexo": "Femenino" },
    { "id": 21, "name": "Alberto", "edad": 24, "sexo": "Masculino" },
    { "id": 22, "name": "Verónica", "edad": 23, "sexo": "Femenino" },
    { "id": 23, "name": "Daniel", "edad": 22, "sexo": "Masculino" },
    { "id": 24, "name": "Natalia", "edad": 21, "sexo": "Femenino" },
    { "id": 25, "name": "Francisco", "edad": 35, "sexo": "Masculino" },
    { "id": 26, "name": "Carmen", "edad": 34, "sexo": "Femenino" },
    { "id": 27, "name": "Héctor", "edad": 33, "sexo": "Masculino" },
    { "id": 28, "name": "Alicia", "edad": 32, "sexo": "Femenino" },
    { "id": 29, "name": "Sergio", "edad": 31, "sexo": "Masculino" },
    { "id": 30, "name": "Paula", "edad": 30, "sexo": "Femenino" }
];
//suma de edades
let sumaEdades = 0;
for (let i = 0; i < exports.people.length; i++) {
    sumaEdades += exports.people[i].edad;
}
console.log("Suma de edades:", sumaEdades);
//promedio de edades
const getAverageAge = () => {
    const data = exports.people.reduce((acc, person) => {
        acc.totalAge += person.edad;
        acc.count += 1;
        return acc;
    }, { totalAge: 0, count: 0 });
    const averageAge = data.totalAge / data.count;
    return averageAge;
};
exports.getAverageAge = getAverageAge;
console.log("Promedio de edades:", (0, exports.getAverageAge)());
