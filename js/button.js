const noButton = document.getElementById("no-btn");
const yesButton = document.getElementById("yes-btn");
const imageCon = document.getElementById("image-content");
const newText = [
  "No",
  "Really???",
  "Are you sure?",
  "Ok please dont say no",
  "Anni dont click no again",
  "NOOOOOOOOO ANNI DONT",
  "Please anni dont do this :(",
  "Ok ill kill u anni wtf",
  "NOOOOOOOOOOOOOOOOOO",
];
let currentIndex = 0;

noButton.addEventListener("click", function () {
  const currentSize = window.getComputedStyle(yesButton).fontSize;

  const newSize = parseInt(currentSize) * 1.5;

  yesButton.style.fontSize = newSize + "px";

  noButton.textContent = newText[currentIndex];
  currentIndex = (currentIndex + 1) % newText.length;

  imageCon.src = "./images/me.jpg";
});
