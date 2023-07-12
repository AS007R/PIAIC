const nam = "Asad Subhani";

// Lowercase
const lowercaseName: string = nam.toLowerCase();
console.log("Lowercase: "+lowercaseName);

// Uppercase
const uppercaseName: string = nam.toUpperCase();
console.log("Uppercase: "+uppercaseName);

// Titlecase
const words: string[] = nam.split(" ");
const titlecaseName: string = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
console.log("Titlecase: "+titlecaseName);
