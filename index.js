// Write your code here!
// Remove the <main> element if it exists
const mainElement = document.getElementById("main");
if (mainElement) {
  mainElement.remove();
}

const newHeader = document.createElement("h1");

newHeader.id = "victory";

newHeader.textContent = "YOUR-NAME is the champion"; // Replace YOUR-NAME with your name

document.body.append(newHeader);
