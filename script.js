const name = "Eltijon";
const project = "Task Manager";
let teamSize = 2;

console.log(`Hallo ${name}!`);
console.log(`Du arbeitest am Projekt "${project}".`);
console.log(`Euer Team besteht aus ${teamSize} Personen.`);

const title = document.querySelector("#button_text");
title.textContent = "Aufgabe 7.4";

const mybutton = document.querySelector("#mybutton");
const mybutton_text = document.querySelector("#button_text");

mybutton?.addEventListener("click", () => {
    mybutton.textContent = "Aufgabe 1.1";
});