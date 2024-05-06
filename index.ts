#! /usr/bin/env node
import inquirer from 'inquirer';

let isFriend = await inquirer.prompt([{
    name: "name",
    type: "string",
    message: "Enter your Friend name:"
}]);

if (isFriend.name === "Amna" || isFriend.name === "Aisha"){
    console.log(`${isFriend.name} is your friend`)
}else {
    console.log(`${isFriend.name} is not your friend`)
};