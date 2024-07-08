#! /usr/bin/env node 
import inquirer from "inquirer";
let myBalance = 50000;
const myPinCode = 1802;
let pinAnswer = await inquirer.prompt([
    {
        name: "Pin",
        message: "Enter your pin: ",
        type: "number"
    }
]);
if (pinAnswer.Pin === myPinCode) {
    console.log(myBalance);
    let operations = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select option",
            type: "list",
            choices: ["withdraw", "check balance"]
        },
        {
            name: "transMethod",
            message: " Select your transaction method",
            type: "list",
            choices: [
                "Cash withdrawl",
                "Fast cash"
            ]
        }
    ]);
    if (operations.transaction === "Cash withdrawl") {
        let cashWithdrawlAmount = await inquirer.prompt([
            {
                name: "withdrawl",
                message: "Enter the amount you want to withdraw",
                type: "number",
            }
        ]);
        if (myBalance >= cashWithdrawlAmount.withdraw) {
            myBalance -= cashWithdrawlAmount.withdraw;
            console.log("Your remaining balance is: " + myBalance);
        }
        else {
            console.log("You have insufficient balance");
        }
    }
    else {
        let fastcashAmount = await inquirer.prompt([
            {
                name: "fastcash",
                message: "Select the amount you want to withdraw",
                type: "list",
                choices: [
                    "1000",
                    "3000",
                    "5000",
                ],
            }
        ]);
        if (myBalance >= fastcashAmount.fastcash) {
            myBalance -= fastcashAmount.fastcash;
            console.log(`Your total Balance is : ${myBalance}`);
        }
        else {
            console.log("Insuficient Balance");
        }
    }
    if (operations.operation === "check balance") {
        console.log("Your balance is: " + myBalance);
    }
}
else {
    console.log("Incorrect Pin Code!!");
}
