import inquirer from "inquirer";
import { todo } from "node:test";

let todoList: string[] = []
let no:number=0
async function creatTodos() {
    do {

        let input = await inquirer.prompt([
            {
                type: "list",
                name: "select",
                message: "choose an action you want to perform:",
                choices: ["add", "delete", "update", "view", "exit"]
            }
        ])

        if (input.select == "add") {
            console.log("add items in todo list:\npress ok when you are done with your list")
           // var i=0;

            do{
            var input2 = await inquirer.prompt([
                {
                    type: "input",
                    name: "todo",
                    message: "+"
                }
            ])
            todoList.push(input2.todo)
            //i++
                // var input2 = await inquirer.prompt([
                //     {
                //         type: "input",
                //         name: "again",
                //         message: " press ok when you are done with your list"
                //     }
                // ])
            // console.log(i)
        }while(input2.todo != "ok")
        //console.log(todoList)
        let popitem=todoList.pop()
        //console.log(`pop item ${popitem}`)
        }

        if (input.select == "view") {

            console.log("your todo list:")

            for(let i=0;i<todoList.length;i++){
                console.log(`${i+1}. ${todoList[i]}`)

            }
        }
        if (input.select == "exit") {
            break
        }
        if (input.select == "update") {
            let input = await inquirer.prompt([
                {
                    type: "list",
                    name: "todo",
                    message: "choose an item you want to update: ",
                    choices: todoList
                }
            ])
            let newTodo = await inquirer.prompt([
                {
                    type: "input",
                    name: "todo",
                    message: "enter new todo",
                }
            ])
            let index = todoList.findIndex(item => item == input.todo)
            todoList[index] = newTodo.todo
            console.log(todoList)
        }
        if (input.select == "delete") {
            let input = await inquirer.prompt([
                {
                    type: "list",
                    name: "todo",
                    message: "choose an item you want to delete:",
                    choices: todoList
                }
            ])
            let index=todoList.findIndex(item => item == input.todo)
            todoList.splice(index,1)
            console.log(todoList)

        }
    } while (true)
}

console.log("---your todo list---")
creatTodos()

