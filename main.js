let systemNumber;
let chances = 10;

// function check() {

//     let userinput = document.getElementById("userinput");
//     let number = userinput.value;
//     let paravalue = document.getElementById("firstparagraph")
//     if (number<0 || number>100){
//         paravalue.textContent="not correct number please enter between 0 to 100";
        

//     }
//     else{
//         paravalue.textContent="you entered: "+number;
        
//     }
// }
function checkGuess() {
    let userInput = parseInt(document.getElementById("userInput").value);

    if (userInput >= 0 && userInput <= 100) {
        chances--;

        if (userInput === systemNumber) {
            document.getElementById("result").textContent = "Congratulations! You guessed the number correctly.";
            disableInput();
        } else if (chances === 0) {
            document.getElementById("result").textContent = "Game over! You've run out of chances. The correct number was " + systemNumber + ".";
            document.getElementById("chancesLeft").textContent = chances;
            disableInput();
        } else {
            document.getElementById("result").textContent = "Incorrect guess. Please try again.";
            document.getElementById("chancesLeft").textContent = chances;
        }
    } else {
        document.getElementById("result").textContent = "Invalid input. Please enter a number between 0 and 100.";
    }
}
function generateSystemNumber() {
    systemNumber = Math.floor(Math.random() * 101);
    // document.getElementById("systemNumber").textContent = systemNumber;
}
function disableInput() {
    document.getElementById("userInput").disabled = true;
    document.querySelector("button").disabled = true;
}
function resetGame() {
    window.location.reload()
}


window.onload = generateSystemNumber;