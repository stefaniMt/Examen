"use strict";
//Marcas: contar cuantas marcas hay ( no usar length) y ordenar e la a - z
Object.defineProperty(exports, "__esModule", { value: true });
exports.marcas = void 0;
exports.marcas = [
    { "marca": "Toyota", "modelo": "Corolla", "combustible": "Gasolina" },
    { "marca": "Honda", "modelo": "Civic", "combustible": "Gasolina" },
    { "marca": "Ford", "modelo": "Focus", "combustible": "Gasolina" },
    { "marca": "Chevrolet", "modelo": "Malibu", "combustible": "Gasolina" },
    { "marca": "Nissan", "modelo": "Altima", "combustible": "Gasolina" },
    { "marca": "BMW", "modelo": "X5", "combustible": "Diesel" },
    { "marca": "Audi", "modelo": "A4", "combustible": "Gasolina" },
    { "marca": "Mercedes-Benz", "modelo": "C-Class", "combustible": "Gasolina" },
    { "marca": "Volkswagen", "modelo": "Golf", "combustible": "Gasolina" },
    { "marca": "Hyundai", "modelo": "Elantra", "combustible": "Gasolina" },
    { "marca": "Kia", "modelo": "Sorento", "combustible": "Gasolina" },
    { "marca": "Mazda", "modelo": "CX-5", "combustible": "Gasolina" },
    { "marca": "Subaru", "modelo": "Outback", "combustible": "Gasolina" },
    { "marca": "Tesla", "modelo": "Model S", "combustible": "Eléctrico" },
    { "marca": "Volvo", "modelo": "XC90", "combustible": "Gasolina" },
    { "marca": "Lexus", "modelo": "RX", "combustible": "Gasolina" },
    { "marca": "Jaguar", "modelo": "F-Pace", "combustible": "Gasolina" },
    { "marca": "Land Rover", "modelo": "Range Rover", "combustible": "Diesel" },
    { "marca": "Porsche", "modelo": "Cayenne", "combustible": "Gasolina" },
    { "marca": "Ferrari", "modelo": "488", "combustible": "Gasolina" },
    { "marca": "Lamborghini", "modelo": "Huracan", "combustible": "Gasolina" },
    { "marca": "Maserati", "modelo": "Levante", "combustible": "Gasolina" },
    { "marca": "Bentley", "modelo": "Bentayga", "combustible": "Gasolina" },
    { "marca": "Rolls-Royce", "modelo": "Phantom", "combustible": "Gasolina" },
    { "marca": "Aston Martin", "modelo": "DBX", "combustible": "Gasolina" },
    { "marca": "McLaren", "modelo": "720S", "combustible": "Gasolina" },
    { "marca": "Bugatti", "modelo": "Chiron", "combustible": "Gasolina" },
    { "marca": "Pagani", "modelo": "Huayra", "combustible": "Gasolina" },
    { "marca": "Koenigsegg", "modelo": "Jesko", "combustible": "Gasolina" },
    { "marca": "Rimac", "modelo": "C_Two", "combustible": "Eléctrico" }
];
// Contar marcas sin length
let contar = 0;
for (let i in exports.marcas) {
    contar++;
}
console.log("hay:", contar, "marcas");
// Ordenar marcas alfabéticamente
exports.marcas.sort((a, b) => {
    if (a.marca < b.marca) {
        return -1;
    }
    if (a.marca > b.marca) {
        return 1;
    }
    return 0;
});
console.log("marcas ordenadas de la A a la Z:", exports.marcas);
