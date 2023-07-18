"use strict";
const current_users = ['Asad', 'nabeel', 'nasira', 'Sarah', 'aiman'];
const new_users = ['NABEEL', 'Adeel', 'Aiman', 'Asif', 'Saim'];
for (let i = 0; i < new_users.length; i++) {
    const new_username = new_users[i];
    const is_username_taken = current_users.some((current_users) => current_users.toLowerCase() === new_username.toLowerCase());
    if (is_username_taken) {
        console.log(`Sorry, the username '${new_username}' is already taken. Please enter a new username.`);
    }
    else {
        console.log(`Congratulations! The username '${new_username}' is available.`);
    }
}
