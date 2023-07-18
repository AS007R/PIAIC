"use strict";
function create_car(manufacturer, model, ...kwargs) {
    const car = {
        manufacturer: manufacturer,
        model: model,
    };
    // Process the keyword arguments
    for (let i = 0; i < kwargs.length; i += 2) {
        const key = kwargs[i];
        const value = kwargs[i + 1];
        car[key] = value;
    }
    return car;
}
// Call the function with required information and additional name-value pairs
const carInfo = create_car('Toyota', 'Camry', 'color', 'Silver', 'year', 2022);
// Print the returned Object to verify the stored information
console.log(carInfo);
