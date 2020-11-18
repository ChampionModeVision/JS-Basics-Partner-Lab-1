let first = Number(prompt("Type First Number"));

let second = Number(prompt("Type Second Number"));

//if(number%5 === 0 && number%3 === 0 ){
console.log(first / second);
//}


//else if(number%3 === 0){
//  console.log("Fizz")

//}

//else if(number%5 === 0){
// console.log("Buzz")


//}

//Generate a number between 1-10. Ask the user to guess the number and display if the user guessed correctly or not.

let randomNumber = Math.floor((Math.random() * 10) + 1);
console.log(randomNumber);

let userNum = prompt("Guess a number between 1 and 10");

if (userNum === randomNumber) {
    alert("You're a genius!");
} else if ((userNum !== randomNumber)) {
    alert("Sorry, you guessed wrong...");
}