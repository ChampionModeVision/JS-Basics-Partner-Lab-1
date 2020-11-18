let randomNumber = Math.floor((Math.random() * 10) + 1);


let randomNumber2 = Math.floor((Math.random() * 10) + 1);


let userNum = Number(prompt(`Add ${randomNumber} and ${randomNumber2}`));


let x = (randomNumber) + (randomNumber2);





if (userNum === x) {
    alert("You're a genius!");
} else if ((userNum !== x)) {
    alert(`Sorry, you guessed wrong the number is ${x}...`);
}