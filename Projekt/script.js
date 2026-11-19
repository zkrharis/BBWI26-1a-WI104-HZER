const startButton = document.querySelector("#start");

// NEU: Auf einen Klick reagieren
startButton.addEventListener("click", () => {
    startButton.textContent = "Quiz gestartet!";
});