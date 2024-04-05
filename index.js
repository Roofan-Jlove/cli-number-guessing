#! /usr/bin/env node
import inquirer from "inquirer";
// 1) Computer will generate a random number.  Done
// 2) User input for guessing number.          Done 
// 3) Campare user input with Com Genrated number and show result.
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Please guess a nuber:",
    }
]);
if (answers.userGuessNumber === randomNumber) {
    console.log("congratulation! you guesed right number");
}
else {
    console.log("You guess wrong number");
}
// console.log(answers);
