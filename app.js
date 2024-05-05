#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let idCard = false;
console.log(chalk.bold.magentaBright("\n\t    Welcome To Our Information Technology Program"));
let stuRegistration = await inquirer.prompt([
    { message: "Student Name: ", name: "name", type: "input" },
    {
        message: "Enter your N.I.C or B-Form Number: ",
        name: "nic",
        type: "number",
    },
    { message: "Password: ", name: "pass", type: "password" },
    {
        message: "Select Course to Enrolled",
        name: "courses",
        type: "list",
        choices: [
            "Artificial Intelligence",
            "Web3 and Metaverse",
            "Cloud-Native Computing",
        ],
    },
]);
if (stuRegistration.name !== "" &&
    stuRegistration.pass !== "" &&
    stuRegistration.nic !== "") {
    console.log(chalk.bold.magentaBright("\n\t   Fee Structure"));
    console.log(chalk.yellowBright("Artificial Intelligence = 30000 PKR Per Semester \nWeb3 and Metaverse = 30000 PKR Per Semester \nCloud-Native Computing = 30000 PKR Per Semester\n"));
    let confirmation = await inquirer.prompt({
        message: "Do you want to Login?",
        name: "confirm",
        type: "confirm",
    });
    if (confirmation.confirm === true) {
        let stuSignup = await inquirer.prompt([
            { message: "Student Name: ", name: "name", type: "input" },
            { message: "Password: ", name: "pass", type: "password" },
        ]);
        if (stuSignup.name === stuRegistration.name &&
            stuSignup.pass === stuRegistration.pass) {
            console.log(chalk.yellowBright(`\nStudent Name: ${stuRegistration.name} \nSelected Course: ${stuRegistration.courses} \nFees: Rs.30000 (Not Paid)\n`));
            let fees = await inquirer.prompt({
                message: "You have to Pay Fees to enter in our Program!!",
                name: "fees_submit",
                type: "confirm",
            });
            if (fees.fees_submit === true) {
                let account = await inquirer.prompt({
                    message: "Select Payment Method to Submit the Fees!!",
                    name: "accountDetails",
                    type: "list",
                    choices: ["Bank Transfer", "Easy Paisa", "Jazz Cash"],
                });
                if (account.accountDetails === "Bank Transfer") {
                    let bankTransfer = await inquirer.prompt([
                        { message: "Enter Amount: ", name: "amount", type: "number" },
                        { message: "Enter IBAN Number: ", name: "iban", type: "input" },
                        {
                            message: "Do You want to confirm this Transaction? ",
                            name: "confirm",
                            type: "confirm",
                        },
                    ]);
                    if (bankTransfer.confirm === true && bankTransfer.amount === 30000) {
                        console.log(chalk.greenBright("Fees Has Been Submit Successfully!!"));
                        idCard = true;
                    }
                    else {
                        console.log("Enter Valid Amount!!");
                    }
                }
                else if (account.accountDetails === "Easy Paisa") {
                    let easyPaisa = await inquirer.prompt([
                        { message: "Enter Amount: ", name: "amount", type: "number" },
                        {
                            message: "Enter Account Number: ",
                            name: "number",
                            type: "number",
                        },
                        {
                            message: "Do You want to confirm this Transaction? ",
                            name: "confirm",
                            type: "confirm",
                        },
                    ]);
                    if (easyPaisa.confirm === true && easyPaisa.amount === 30000) {
                        console.log(chalk.greenBright("Fees Has Been Submit Successfully!!"));
                        idCard = true;
                    }
                    else {
                        console.log("Enter Valid Amount!!");
                    }
                }
                else {
                    let jazzCash = await inquirer.prompt([
                        { message: "Enter Amount: ", name: "amount", type: "number" },
                        {
                            message: "Enter Account Number: ",
                            name: "number",
                            type: "number",
                        },
                        {
                            message: "Do You want to confirm this Transaction? ",
                            name: "confirm",
                            type: "confirm",
                        },
                    ]);
                    if (jazzCash.confirm === true && jazzCash.amount === 30000) {
                        console.log(chalk.greenBright("Fees Has Been Submit Successfully!!"));
                        idCard = true;
                    }
                    else {
                        console.log("Enter Valid Amount!!");
                    }
                }
            }
        }
        else {
            console.log("Please Enter Valid Details!!");
        }
    }
    else {
    }
}
else {
    console.log("Please Enter Empty Fields!!");
}
if (idCard === true) {
    let idCard2 = await inquirer.prompt({
        message: chalk.blueBright("\nType 'View Identity Card' to view: "),
        name: "id",
        type: "input",
    });
    if (idCard2.id === "View Identity Card") {
        let y = "10";
        let x = Math.floor(Math.random() * 90 + 1);
        y = "10" + x;
        console.log(chalk.yellowBright(`\nStudent Id: ${y} \nName: ${stuRegistration.name} \nSelected Course: ${stuRegistration.courses} \nFees: Paid\n`));
    }
}
