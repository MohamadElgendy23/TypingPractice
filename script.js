const timeToType = document.getElementById("time");
const numSuccess = document.getElementById("num-success");
const numTotal = document.getElementById("num-total");
const toggleButton = document.getElementById("toggle-practice-btn");
const promptWord = document.getElementById("prompt-word");
const inputWord = document.getElementById("user-input-word");

const api = "https://random-word-api.herokuapp.com/word";

async function getWord() {
  const response = await fetch(api);
  return await response.json();
}

function toggle() {
  if (toggleButton.innerText === "Start Practice &#9654;&#65039") {
    toggleButton.innerText = "Stop Practice &#9616;&#9616;";
  } else {
    toggleButton.innerText = "Start Practice &#9654;&#65039;";
  }
}
