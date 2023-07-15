"use strict";
const favoritePizzas = ['Pepperoni', 'Margherita', 'BBQ Chicken'];
console.log("Pizza Names:");
for (let i = 0; i < favoritePizzas.length; i++) {
    const pizzaName = favoritePizzas[i];
    console.log(pizzaName);
}
console.log("\nPizza Statements:");
for (let i = 0; i < favoritePizzas.length; i++) {
    const pizzaName = favoritePizzas[i];
    console.log(`I like ${pizzaName} pizza.`);
}
console.log("\nPepperoni is one of my all-time favorites! I love its simplicity and fresh flavors. The combination of barbecue sauce and grilled chicken is amazing in BBQ Chicken. I really love pizza!");
