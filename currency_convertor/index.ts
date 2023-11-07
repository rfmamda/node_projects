import inquirer from "inquirer";
import chalk from "chalk"

let apiLink = "https://v6.exchangerate-api.com/v6/2918a9aff164407bc3607555/latest/PKR"


async function fetchData(link: any) {
    let fetchData = await fetch(link)
    let data = await fetchData.json()
    return data

}

async function currencyconvert() {

    let data = await fetchData(apiLink)
    //console.log(data)
    let countries = Object.keys(data.conversion_rates)
    //console.log(countries)
    let firstcurrency = await inquirer.prompt([
        {

            type: "list",
            name: "name",
            message: "select currency you want to convert from: ",
            choices: countries
        }
    ])
    let currency = await inquirer.prompt([
        {
            type: "number",
            name: "amount",
            message: `enter amount in ${chalk.green.bold(firstcurrency.name)} here: `
        }
    ])

    let secondcurrrency = await inquirer.prompt([
        {

            type: "list",
            name: "name",
            message: `convert ${chalk.green.bold(firstcurrency.name)} ${chalk.green.bold(currency.amount)} into: `,
            choices: countries
        },
    ])

    let pair =
        `https://v6.exchangerate-api.com/v6/2918a9aff164407bc3607555/pair/${firstcurrency.name}/${secondcurrrency.name}`
   // console.log(pair)
    let data2 = await fetchData(pair)
    let conv_rate=data2.conversion_rate
    let conv_amount= currency.amount*conv_rate
    console.log(`${chalk.greenBright.bold(firstcurrency.name)} ${chalk.greenBright.bold(currency.amount)} in ${chalk.greenBright.bold(secondcurrrency.name)} is ${chalk.greenBright.bold(conv_amount)}`)
    //console.log(data2)
    //console.log(data2.conversion_rate)
}

console.log("---welcome to currency converter---")
await currencyconvert()
