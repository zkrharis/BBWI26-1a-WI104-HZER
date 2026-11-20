const startButton = document.querySelector("#start");

// NEU: Auf einen Klick reagieren
startButton.addEventListener("click", () => {
    startButton.textContent = "Quiz gestartet!";});

const bern = document.querySelector("#bern");
const zuerich = document.querySelector("#zuerich");
const genf = document.querySelector("#genf");
const basel = document.querySelector("#basel");
const auswahl = document.querySelector("#auswahl");

bern.addEventListener("click", () => {
    auswahl.textContent = "Du hast Bern ausgewählt.";});

zuerich.addEventListener("click", () => {
    auswahl.textContent = "Du hast Zürich ausgewählt.";});

genf.addEventListener("click", () => {
    auswahl.textContent = "Du hast Genf ausgewählt.";});

basel.addEventListener("click", () => {
    auswahl.textContent = "Du hast Basel ausgewählt.";});