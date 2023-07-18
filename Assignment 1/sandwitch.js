"use strict";
function order_sandwich(...items) {
    console.log("Sandwich Order:");
    console.log("Bread: " + items[0]);
    if (items.length > 1) {
        console.log("Ingredients:");
        for (let i = 1; i < items.length; i++) {
            console.log("- " + items[i]);
        }
    }
    else {
        console.log("No additional ingredients.");
    }
    console.log("---");
}
// Call the function with different numbers of arguments
order_sandwich("White Bread", "egg", "Cheese");
order_sandwich("Whole Wheat Bread", "Turkey");
order_sandwich("Rye Bread");
