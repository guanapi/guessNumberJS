//Generate a number from 1 - 10
function generateSecretNum () {
    const secretNumber = Math.floor(Math.random() * 10 + 1)
    // numberGenerated.textContent = "New Number Generated"
    return secretNumber
}


function getPlayerNumber () {
    const playerNumberConverted = parseInt(playerNumber.value)
    const computerNumber = generateSecretNum() 
    if (playerNumberConverted > 10 || playerNumberConverted < 1) {
        verificationParagraph.textContent = "Choose a number within the range"
    } else if (playerNumberConverted != computerNumber) {
        verificationParagraph.textContent = `You guessed wrong, the number was ${computerNumber}`
    } else {
        verificationParagraph.textContent = "You guessed right!"
    }
}

const playerNumber = document.querySelector(".user-number")


const numberGenerated = document.querySelector(".number-generated")

const checkButton = document.querySelector(".check-button")

const generateButton = document.querySelector(".generate-button")

const verificationParagraph = document.querySelector(".verification")

generateButton.addEventListener("click", generateSecretNum)

checkButton.addEventListener("click", getPlayerNumber)









