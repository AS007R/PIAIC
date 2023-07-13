"use strict";
const oldDinnerGuests = ["Baba Jan", "Amma Jan", "Sister"];
// Print the original invitation message for each person
console.log("Old invitations:");
for (let i = 0; i < oldDinnerGuests.length; i++) {
    const person = oldDinnerGuests[i];
    console.log("Dear " + person + ", you are cordially invited to dinner. Please join us for an evening of great blessings.\n");
}
// One guest cancels
const canceledGuest = oldDinnerGuests.splice(2, 1, "Uncle Usman")[0];
console.log("Unfortunately, my " + canceledGuest + " cannot make it to the dinner.\n");
// Adding a new guest to the start of the array
oldDinnerGuests.unshift("Nabeel Ahmad");
// Adding a new guest to the middle of the array
const middleIndex = Math.floor(oldDinnerGuests.length / 2);
oldDinnerGuests.splice(middleIndex, 0, "Nasira Jameel");
// Using push() to add a new guest to the end of the array
oldDinnerGuests.push("Aiman Akash");
//Printing new messages
for (let i = 0; i < oldDinnerGuests.length; i++) {
    const person = oldDinnerGuests[i];
    console.log("Dear " + person + ", you are cordially invited to dinner. Please join us for an evening of great blessings.\n");
}
