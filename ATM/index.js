import inquirer from "inquirer";
const userData = [
    {
        id: 0,
        username: "ramsha",
        accountno: Math.floor(10000000 * Math.random() * 9000000),
        pincode: 3991,
        balance: 100000
    },
    {
        id: 1,
        username: "owais",
        accountno: Math.floor(10000000 * Math.random() * 9000000),
        pincode: 1234,
        balance: 50000
    },
    {
        id: 1,
        username: "rabeeba",
        accountno: Math.floor(10000000 * Math.random() * 9000000),
        pincode: 3456,
        balance: 50000
    }
];
async function CreatUser() {
    let input = await inquirer.prompt([
        {
            type: "string",
            name: "name",
            message: "enter your user name: "
        },
        {
            type: "number",
            name: "pin",
            message: "enter your 4-digit pin code: "
        },
        // {
        //     type: "number",
        //     name: "bal",
        //     message: "enter your balance amount: "
        // },
    ]);
    let user = {
        id: userData.length + 1,
        username: input.name,
        accountno: Math.floor(10000000 * Math.random() * 9000000),
        pincode: input.pin,
        balance: 1000
    };
    userData.push(user);
}
async function validation() {
    let input = await inquirer.prompt([
        {
            type: "string",
            name: "name",
            message: "enter your user name: "
        }
    ]);
    const usermatch = userData.find((value) => input.name == value.username);
    //console.log("users:" + userData)
    if (usermatch) {
        do {
            var input2 = await inquirer.prompt([
                {
                    type: "number",
                    name: "pin",
                    message: "enter your 4-digit pin code: "
                }
            ]);
            if (usermatch.pincode == input2.pin) {
                break;
            }
            else {
                console.log("wrong pin code, try again!");
            }
        } while (input2.pin != usermatch.pincode);
        await atm(usermatch);
    }
    else {
        console.log("no such user account, Create your account.");
        await CreatUser();
        console.log("your account has been created, login again.");
        await validation();
    }
}
async function atm(usermatch) {
    do {
        let input = await inquirer.prompt([
            {
                type: "list",
                name: "select",
                message: "what do you want to do?  ",
                choices: ["change pin code", "deposit", "withdrawal", "check info", "exit"]
            }
        ]);
        if (input.select == "change pin code") {
            let input = await inquirer.prompt([
                {
                    type: "number",
                    name: "pin",
                    message: "enter your 4-digit pin code: "
                }
            ]);
            usermatch.pincode = input.pin;
            console.log("your pin code has been updated");
            console.log(usermatch);
        }
        if (input.select == "deposit") {
            let input2 = await inquirer.prompt([
                {
                    type: "number",
                    name: "amount",
                    message: "enter your amount: "
                }
            ]);
            usermatch.balance = usermatch.balance + input.amount;
            console.log(`your deposit amount is: ${input.amount}`);
            console.log(`your account balance is: ${usermatch.balance}`);
        }
        if (input.select == "withdrawal") {
            let input = await inquirer.prompt([
                {
                    type: "number",
                    name: "amount",
                    message: "enter your amount: "
                }
            ]);
            if (input.amount > usermatch.balance) {
                console.log("your withdrawal amount exceed your balance.");
            }
            else {
                usermatch.balance = usermatch.balance - input.amount;
                console.log(`amount withdrawal: ${input.amount}`);
                console.log(`your accout balance is: ${usermatch.balance} `);
            }
        }
        if (input.select == "check info") {
            console.log(`${usermatch.username}, your account no. is ${usermatch.accountno}`);
            console.log(`your account balance is: ${usermatch.balance}`);
        }
        if (input.select == "exit") {
            console.log("thank you for using atm machine");
            break;
        }
    } while (true);
}
console.log("---Welcome to ATM machine!!!---");
validation();
//creat
