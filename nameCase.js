"use strict";
const nam = "Asad Subhani";
// Lowercase
const lowercaseName = nam.toLowerCase();
console.log("Lowercase: " + lowercaseName);
// Uppercase
const uppercaseName = nam.toUpperCase();
console.log("Uppercase: " + uppercaseName);
// Titlecase
const words = nam.split(" ");
const titlecaseName = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
console.log("Titlecase: " + titlecaseName);
//This Program transform the given name in to Uper Case, Lower Case and Tirle Case
