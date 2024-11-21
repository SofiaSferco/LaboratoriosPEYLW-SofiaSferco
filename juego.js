let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 10;

document.getElementById("guess-button").addEventListener("click", function() {
  let userGuess = document.getElementById("user-input").value;
  let feedback = document.getElementById("feedback");
  let attemptsElement = document.getElementById("attempts");

  if (userGuess == "") {
    feedback.textContent = "Por favor, ingresa un número.";
    return;
  }

  userGuess = parseInt(userGuess);

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    feedback.textContent = "Ingresa un número entre 1 y 100.";
    return;
  }

  attempts--;

  if (userGuess < randomNumber) {
    feedback.textContent = "¡Demasiado bajo! Intenta de nuevo.";
  } else if (userGuess > randomNumber) {
    feedback.textContent = "¡Demasiado alto! Intenta de nuevo.";
  } else {
    feedback.textContent = "¡Felicidades, adivinaste el número!";
    document.getElementById("guess-button").disabled = true;
  }

  attemptsElement.textContent = attempts;

  if (attempts === 0) {
    feedback.textContent = "Se acabaron los intentos. El número era " + randomNumber;
    document.getElementById("guess-button").disabled = true;
  }
});
