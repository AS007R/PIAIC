"use strict";
const guests = ["Baba Jan", "Amma Jan", "Sister"];
// Print the original invitation message for each person
console.log("Old invitations:");
for (let i = 0; i < guests.length; i++) {
    const person = guests[i];
    console.log("Dear " + person + ", you are cordially invited to dinner. Please join us for an evening of great blessings.\n");
}
// One guest cancels
const canceled = guests.splice(2, 1, "Uncle Usman")[0];
console.log("Unfortunately, my " + canceled + " cannot make it to the dinner.\n");
// Adding a new guest to the start of the array
guests.unshift("Nabeel Ahmad");
// Adding a new guest to the middle of the array
const middle = Math.floor(guests.length / 2);
guests.splice(middle, 0, "Nasira Jameel");
// Using push() to add a new guest to the end of the array
guests.push("Aiman Akash");
//Printing new messages
for (let i = 0; i < guests.length; i++) {
    const person = guests[i];
    console.log("Dear " + person + ", you are cordially invited to dinner. Please join us for an evening of great blessings.\n");
}
console.log("Unfortunately, the new dinner table won't arrive in time for the dinner, and we can only invite two people.\n");
// Remove guests until only two names remain in the list
while (guests.length > 2) {
    const removedGuest = guests.pop();
    console.log("Sorry, " + removedGuest + ", we can't invite you to dinner anymore.\n");
}
// Print invitation messages for the remaining two guests
console.log("Final invitations:");
for (let i = 0; i < guests.length; i++) {
    const person = guests[i];
    console.log("Dear " + person + ", you are still invited to dinner. Please join us for an evening of great blessings.\n");
}
// modifid for exercise 19 to display latest number of guests invited.
console.log("The number of people invited to dinner is now " + guests.length);
// Remove the last two names from the list
guests.splice(0, 2);
// Print the list to confirm it is empty
console.log("Guest list:", guests);
