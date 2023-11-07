import inquirer from "inquirer";

async function wordCount(text: string) {

    let count = 1
    let words:string[]
    
    for(let i=0; i<text.length; i++){

        if(text[i]==" "){
            count++
        }
    }

    words=text.split(" ")
    console.log("Words in the text:");

    words.forEach((word,index)=>{
        console.log(`Word ${index + 1}: ${word}`)
    })
   
    return count
}
do {
    let input = await inquirer.prompt([
        {
            type: "string",
            name: "text",
            message: "enter text here: "
        }

    ])
    let word_count = await wordCount(input.text)
    console.log(`word count: ${word_count}`)
    var input2 = await inquirer.prompt([

        {
            type: "input",
            name: "again",
            message: "do you want to continue? press yes or no:  "
        }
    ])

} while (input2.again=='yes')

// function logWords(text:string) {
//     const words = text.split(/\s+/);
//     console.log(words)
//     const nonEmptyWords = words.filter(word => word !== '');
//     console.log(nonEmptyWords)

//     console.log("Words in the text:");
//     nonEmptyWords.forEach((word, index) => {
//         console.log(`Word ${index + 1}: ${word}`);
//     });
// }

// // Example usage:
// const text = "This is an example sentence for counting words.";
// logWords(text);