//Inventario: cual es el producto con mayor existencia y cantidad existencial

export const inventory = [
    { "name": "asparagus", "type": "vegetables", "quantity": 5 },
    { "name": "carrot", "type": "vegetables", "quantity": 10 },
    { "name": "broccoli", "type": "vegetables", "quantity": 7 },
    { "name": "spinach", "type": "vegetables", "quantity": 12 },
    { "name": "potato", "type": "vegetables", "quantity": 20 },
    { "name": "tomato", "type": "vegetables", "quantity": 15 },
    { "name": "cucumber", "type": "vegetables", "quantity": 8 },
    { "name": "bell pepper", "type": "vegetables", "quantity": 6 },
    { "name": "lettuce", "type": "vegetables", "quantity": 9 },
    { "name": "onion", "type": "vegetables", "quantity": 14 },
    { "name": "garlic", "type": "vegetables", "quantity": 11 },
    { "name": "zucchini", "type": "vegetables", "quantity": 4 },
    { "name": "eggplant", "type": "vegetables", "quantity": 5 },
    { "name": "cabbage", "type": "vegetables", "quantity": 13 },
    { "name": "cauliflower", "type": "vegetables", "quantity": 7 },
    { "name": "peas", "type": "vegetables", "quantity": 16 },
    { "name": "corn", "type": "vegetables", "quantity": 18 },
    { "name": "beetroot", "type": "vegetables", "quantity": 3 },
    { "name": "radish", "type": "vegetables", "quantity": 5 },
    { "name": "pumpkin", "type": "vegetables", "quantity": 2 },
    { "name": "mushroom", "type": "vegetables", "quantity": 10 },
    { "name": "apple", "type": "fruits", "quantity": 25 },
    { "name": "banana", "type": "fruits", "quantity": 30 },
    { "name": "orange", "type": "fruits", "quantity": 20 },
    { "name": "grape", "type": "fruits", "quantity": 15 },
    { "name": "strawberry", "type": "fruits", "quantity": 18 },
    { "name": "blueberry", "type": "fruits", "quantity": 12 },
    { "name": "pineapple", "type": "fruits", "quantity": 5 },
    { "name": "mango", "type": "fruits", "quantity": 10 },
    { "name": "watermelon", "type": "fruits", "quantity": 7 },
    { "name": "peach", "type": "fruits", "quantity": 8 },
    { "name": "cherry", "type": "fruits", "quantity": 14 },
    { "name": "pear", "type": "fruits", "quantity": 9 },
    { "name": "kiwi", "type": "fruits", "quantity": 6 },
    { "name": "plum", "type": "fruits", "quantity": 11 },
    { "name": "lemon", "type": "fruits", "quantity": 13 },
    { "name": "lime", "type": "fruits", "quantity": 4 },
    { "name": "coconut", "type": "fruits", "quantity": 3 },
    { "name": "avocado", "type": "fruits", "quantity": 5 },
    { "name": "milk", "type": "dairy", "quantity": 20 },
    { "name": "cheese", "type": "dairy", "quantity": 15 },
    { "name": "yogurt", "type": "dairy", "quantity": 10 },
    { "name": "butter", "type": "dairy", "quantity": 8 },
    { "name": "cream", "type": "dairy", "quantity": 6 },
    { "name": "bread", "type": "bakery", "quantity": 25 },
    { "name": "croissant", "type": "bakery", "quantity": 12 },
    { "name": "bagel", "type": "bakery", "quantity": 18 },
    { "name": "muffin", "type": "bakery", "quantity": 10 }
];
let mayorExistencia = inventory[0];

for (let i = 1; i < inventory.length; i++) {
    if (inventory[i].quantity > mayorExistencia.quantity) {
        mayorExistencia = inventory[i];
    }
}

// Mostrar el producto con mayor existencia y su cantidad
console.log("Producto con mayor existencia:", mayorExistencia.name);
console.log("Cantidad en existencia:", mayorExistencia.quantity);