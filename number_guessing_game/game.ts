import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation"


async function delay(ms: number) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms)
    })
}

async function welcome() {
    let animate = chalkAnimation.rainbow("\n---Lets start guessing number game!!!---\n")
    await delay(2000)
    animate.stop()
}

let score=0
async function callGame() {
    do{
    let input = await inquirer.prompt(
        {
            type: "number",
            name: "guessNum",
            message: chalk.yellow("Enter any guess number you want to: ")
    
        }
    )
    
    let randomNo=Math.random();
    //console.log("random no. "+randomNo)
    if(input.guessNum < randomNo)
    {
        console.log(chalk.green("Congratulatons your guess number match, YOU WIN!!!\n"))
        score++
    }
    else{

        console.log(chalk.red("Oops sorry your guess number doesnot match, YOU LOST!!!\n"))
    }

    var restart=await inquirer.prompt(
        {
            type:"input",
            name:"again",
            message:chalk.yellow("Do you want to try again? press Y or want to quit press N: ")

        }
    )
}while(restart.again == 'Y' || restart.again == 'y' || restart.again == 'yes' || 
        restart.again == 'Yes' || restart.again == 'YES')

        console.log(chalk.green(`your final score is ${score}\n`))
        console.log(chalk.blue("-----THANK YOU!!!-----"))
}

await welcome()
callGame()
