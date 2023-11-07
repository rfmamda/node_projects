import { add } from "./add.js";
import { subtract } from "./sub.js";
import { multiply } from "./mul.js";
import { divide } from "./div.js";
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
async function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}
async function welcome() {
    let animate = chalkAnimation.rainbow("---Lets start calculation!!!---");
    await delay(2000);
    animate.stop();
}
async function calculate() {
    do {
        let input = await inquirer.prompt([
            {
                type: "number",
                name: "num1",
                message: chalk.yellow("Enter your first number: ")
            },
            {
                type: "number",
                name: "num2",
                message: chalk.yellow("Enter your second number: ")
            },
            {
                type: "list",
                name: "operator",
                message: chalk.red("Which opertion do you want to perform? "),
                choices: ["Addition", "Subtraction", "Multiplication", "Division"]
            }
        ]);
        if (input.operator == "Addition") {
            let answer = add(input.num1, input.num2);
            console.log(chalk.green(`${input.num1} + ${input.num2} = ${answer}`));
        }
        if (input.operator == "Subtraction") {
            let answer = subtract(input.num1, input.num2);
            console.log(chalk.green(`${input.num1} - ${input.num2} = ${answer}`));
        }
        if (input.operator == "Multiplication") {
            let answer = multiply(input.num1, input.num2);
            console.log(chalk.green(`${input.num1} * ${input.num2} = ${answer}`));
        }
        if (input.operator == "Division") {
            let answer = divide(input.num1, input.num2);
            console.log(chalk.green(`${input.num1} / ${input.num2} = ${answer}`));
        }
        var restart = await inquirer.prompt({
            type: "input",
            name: "again",
            message: chalk.red("do you want to continue? press Y or N: ")
        });
    } while (restart.again == 'y' || restart.again == 'Y' || restart.again == 'yes' ||
        restart.again == 'Yes' || restart.again == 'YES');
    console.log(chalk.red("-----THANK YOU!!!-----"));
}
await welcome();
calculate();
