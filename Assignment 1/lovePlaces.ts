const travelDestinations: string[] = ["Paris", "Tokyo", "New York", "Maldives", "Rome"];

// Print the array in its original order
console.log("Original order:");
console.log(travelDestinations);

// Print the array in alphabetical order without modifying the original list
console.log("\nAlphabetical order:");
console.log([...travelDestinations].sort());

// Print the array to show it is still in its original order
console.log("\nOriginal order:");
console.log(travelDestinations);

// Print the array in reverse alphabetical order without modifying the original list
console.log("\nReverse alphabetical order:");
console.log([...travelDestinations].sort().reverse());

// Print the array to show it is still in its original order
console.log("\nOriginal order:");
console.log(travelDestinations);

// Reverse the order of the list
travelDestinations.reverse();
console.log("\nReversed order:");
console.log(travelDestinations);

// Reverse the order of the list again to restore the original order
travelDestinations.reverse();
console.log("\nOriginal order:");
console.log(travelDestinations);

// Sort the array in alphabetical order
travelDestinations.sort();
console.log("\nSorted in alphabetical order:");
console.log(travelDestinations);

// Sort the array in reverse alphabetical order
travelDestinations.sort((a, b) => b.localeCompare(a));
console.log("\nSorted in reverse alphabetical order:");
console.log(travelDestinations);
