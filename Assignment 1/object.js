"use strict";
// Define the objects for each programming language
const javascript = {
    name: "JavaScript",
    popular: true,
    communityShare: 75,
};
const python = {
    name: "Python",
    popular: true,
    communityShare: 80,
};
const java = {
    name: "Java",
    popular: true,
    communityShare: 70,
};
const csharp = {
    name: "C#",
    popular: true,
    communityShare: 65,
};
const ruby = {
    name: "Ruby",
    popular: false,
    communityShare: 55,
};
// Store the objects in an array
const languages = [javascript, python, java, csharp, ruby];
// Print the list of languages
console.log("List of Languages:");
for (let i = 0; i < languages.length; i++) {
    const language = languages[i];
    console.log(`Language: ${language.name}`);
    console.log(`Popular: ${language.popular}`);
    console.log(`Community Share: ${language.communityShare}%`);
    console.log();
}
