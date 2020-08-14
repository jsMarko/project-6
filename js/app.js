const gameQwerty = document.querySelector("#qwerty");
const gamePhrase = document.querySelector("#phrase");

// create a missed variable initialized to 0
let guessesMissed = 0;

// set div element ID of overlay to variable as well as anchor button
const startOverlay = document.querySelector("#overlay");
const startButton = document.querySelector(".btn__reset");

// Atached Event listener to start the game
startButton.addEventListener("click", () => {
   startOverlay.style.display = "none";
});

// create an Array of phrases - no punctuation; Only letters and spaces
const phraseArr = [
   "To each his own",
   "One day at a time",
   "Good vs Evil",
   "He aint heavy he is my brother",
   "What goes up must come down"
];

function getRandomPhraseAsArray(arr) {
   // choose RANDOM phrase from phraseArr split that phrase newArr of characters
   const rndPhraseArr = arr[Math.floor(Math.random() * arr.length)];
   const charactersArr = rndPhraseArr.split("");
   return charactersArr;
}

function addPhraseToDisplay(arr) {
   // loop through array of characters
   arr.forEach((charItem) => {
      // create 2 variables set 1 to ul and set 2nd to created li
      const ul = document.querySelector("#phrase ul");
      const li = document.createElement("li");

      // add character to li then append it to ul
      li.textContent = charItem;
      if (li.textContnet !== " ") {
         // add class letter to li
         li.className = "letter";
      }
      ul.appendChild(li);
   });
}

const phraseArray = getRandomPhraseAsArray(phraseArr);
console.log(addPhraseToDisplay(phraseArray));
