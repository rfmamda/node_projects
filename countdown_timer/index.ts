import inquirer from "inquirer";

function countdown(seconds:number) {
    let timer = seconds;

    console.log("countdown start!")

    const intervalId = setInterval(() => {
        if (timer === 0) {
            //console.log(intervalId)
            //clearInterval(intervalId);
            console.log("Countdown stop!");
            process.exit()
        
        } else {
            console.log(`Time remaining: ${timer} seconds`);
            timer--;
        }
    }, 1000); // Update every 1 second (1000 milliseconds)
}
let time= await inquirer.prompt([
    {
        type:"number",
        name:"sec",
        message:"enter count in sec: ",
        validate: (input)=>{
            if(isNaN(input)){
                return "please enter valid number."
               
            }
            else if(input>60)
            {
                return "second must be in 60"
            }
            else{
                return true
            }

        }

    }
])
countdown(time.sec)
// // Example usage: Set the countdown time (in seconds)
// const countdownTime = 10; // Change this to your desired countdown time
// countdown(countdownTime);
// function countdown(targetDate:Date) {
//     const intervalId = setInterval(updateCountdown, 1000);

//     function updateCountdown() {
//         const currentDate = new Date();
//         const timeDifference = targetDate.getTime() - currentDate.getTime();
       

//         if (timeDifference <= 0) {
//             clearInterval(intervalId);
//             console.log("Countdown complete!");
//         } else {
//             const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
//             const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//             const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
//             const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

//             console.log(`Time remaining:  ${hours}h: ${minutes}m: ${seconds}s`);
//         }
//     }
// }

// // Example usage: Set the target date and time for the countdown
// const targetDate = new Date("12:00:00"); // Replace with your target date and time
// console.log(targetDate)
// countdown(targetDate);



