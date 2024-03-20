let systemNumber;
let chances = 10;
var playagainButton = document.getElementById('playagain');
playagainButton.style.display="none"

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

let guesses=[];
function displayGuesses() {
    const resultsList = document.getElementById("final");
    resultsList.innerHTML = "";
    for (let i = Math.max(0, guesses.length - 10); i < guesses.length; i++) {
        const listItem = document.createElement("li");
        listItem.textContent = `Guess ${i + 1}: ${guesses[i]}`;
        resultsList.appendChild(listItem);
    }
  }
function checkGuess() {
    let userInput = parseInt(document.getElementById("userInput").value);
    console.log(userInput);
    guesses.push(userInput);

    if (userInput >= 0 && userInput <= 100) {
        chances--;

        if (userInput === systemNumber) {
            document.getElementById("result").textContent = "Congratulations! You guessed the number correctly.";
            disableInput();
        } else if (chances === 0) {
            document.getElementById("result").textContent = "Game over! You've run out of chances. The correct number was " + systemNumber + ".";
            document.getElementById("chancesLeft").textContent = chances;
            playagainButton.style.display="block";
            disableInput();
        } else {
           
            document.getElementById("chancesLeft").textContent = chances;
            document.getElementById("result").textContent = "Incorrect guess. Please try again.";
        }
    } else {
        document.getElementById("result").textContent = "Invalid input. Please enter a number between 0 and 100.";
    }
    displayGuesses();
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


  
  // Example usage:
//   let chances = 0; // Set chances to 0 or any other value
//   togglePlayAgainButton(chances); // Call the function to toggle the button visibility








window.onload = generateSystemNumber;