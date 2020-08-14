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
   "TO EACH HIS OWN",
   "ONE DAY AT A TIME",
   "GOOD VS EVIL",
   "HE AINT HEAVY HE IS MY BROTHER",
   "WHAT GOES UP MUST COME DOWN"
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
      if (li.textContent !== " ") {
         // add class letter to li
         li.className = "letter";
      }
      ul.appendChild(li);
   });
}

// const phraseArray = getRandomPhraseAsArray(phraseArr);
// addPhraseToDisplay(phraseArray);

// create function checkLetter
function checkLetter(btn) {
   // get all elements with class of letter
   const userLetters = document.querySelectorAll("letter");
   let letterMatch;

   // iterate userLetters check if they match btn player clicked
   userLetters.forEach((letter) => {
      // check for match
      if (letter.textContent.toLowerCase === btn.textContent) {
         letter.className += "show";
         letterMatch = letter.textContent;
      }
   });
   // return function result
   return letterMatch;
}

// addEventListener to the game keyboard first using gameQwerty to get all buttons

const keyBtns = gameQwerty.querySelectorAll("button");

// Now: loop all buttons so addEventListener can be added to all buttons

keyBtns.forEach((kBtn) => {
   kBtn.addEventListener("click", (button) => {
      // player chooses letter so add chosen class
      button.className += "chosen";
      // disable button so buttons clicked can only be clicked once
      button.disabled = true;
   });
});
