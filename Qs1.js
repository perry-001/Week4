const userInput = prompt("Enter a number:");


const number = Number(userInput);

// Check if the number is a multiple of 5
if (number % 5 === 0) {
    console.log(`${number} is a multiple of 5.`);
} else {
    console.log(`${number} is not a multiple of 5.`);
}