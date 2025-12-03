document.addEventListener("DOMContentLoaded", function () {
    const minNumber = parseInt(prompt("Enter the minimum number:"));
    const maxNumber = parseInt(prompt("Enter the maximum number:"));
    const maxAttempts = parseInt(prompt("Enter the number of attempts:"));

    if (isNaN(minNumber) || isNaN(maxNumber) || isNaN(maxAttempts)) {
        alert("Please enter valid input.");
        location.reload();
    }

    let secretNumber = generateRandomNumber(minNumber, maxNumber);
    let attemptsRemaining = maxAttempts;

    document.getElementById("min").textContent = minNumber;
    document.getElementById("max").textContent = maxNumber;
    document.getElementById("attempts").textContent = maxAttempts;

    const submitButton = document.getElementById("submit");
    submitButton.addEventListener("click", checkGuess);

    function generateRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function checkGuess() {
        const guess = parseInt(document.getElementById("guess").value);

        if (isNaN(guess) || guess < minNumber || guess > maxNumber) {
            document.getElementById("message").textContent = "Please enter a valid guess.";
        } else {
            attemptsRemaining--;
            document.getElementById("attempts").textContent = attemptsRemaining;

            if (guess === secretNumber) {
                document.getElementById("message").textContent = `Congratulations! You guessed the number ${secretNumber} correctly😮😮.`;
                submitButton.disabled = true;
            } else if (guess < secretNumber) {
                document.getElementById("message").textContent = "GUESS IT ONE MORE TIME.";}
             else {
                document.getElementById("message").textContent = "GUESS IT ONE MORE TIME.";
            }

            if (attemptsRemaining === 0) {
                document.getElementById("message").textContent = `Game over!😛😛 The correct number was ${secretNumber}😂😂.`;
                submitButton.disabled = true;
            }
        }
    }
});
