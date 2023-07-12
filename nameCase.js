var nam = "Asad Subhani";
// Lowercase
var lowercaseName = nam.toLowerCase();
console.log("Lowercase: " + lowercaseName);
// Uppercase
var uppercaseName = nam.toUpperCase();
console.log("Uppercase: " + uppercaseName);
// Titlecase
var words = nam.split(" ");
var titlecaseName = words.map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); }).join(" ");
console.log("Titlecase: " + titlecaseName);
