//
const gameQwerty = document.querySelector("#qwerty");
const gamePhrase = document.querySelector("#phrase");

// create a missed variable initialized to 0
let guessesMissed = 0;

// set div element ID of overlay to variable as well as anchor button
const startOverlay = document.querySelector("#overlay");
const startButton = document.querySelector(".btn__reset");

// Atached Event listener to start the game
startButton.addEventListener("click", (e) => {
   const btn = e.target;

   // ! need to somehow make this two buttons perhaps by using a conditional
   // ! Then perhaps change textContent in checkWin???
   if (btn.textContent === "Start Game") {
      startOverlay.style.display = "none";
   } else if (btn.textContent === "Play Again?") {
      gameReset();
   }
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
      } else {
         li.className = "space";
      }
      ul.appendChild(li);
   });
}

const phraseArray = getRandomPhraseAsArray(phraseArr);
addPhraseToDisplay(phraseArray);

// create function checkLetter
function checkLetter(btn) {
   // get all elements with class of letter
   const userLetters = document.querySelectorAll(".letter");
   let letterMatch;

   // iterate userLetters check if they match btn player clicked
   userLetters.forEach((letter) => {
      // check for match
      if (letter.textContent.toLowerCase() === btn.textContent) {
         letter.className += " show";
         letterMatch = letter.textContent;
      }
   });
   // return function result
   return letterMatch;
}

// addEventListener to the game keyboard first using gameQwerty to get all buttons

const keyBtns = gameQwerty.querySelectorAll("button");

// Now: loop all buttons so addEventListener can be added to them

keyBtns.forEach((kBtn) => {
   kBtn.addEventListener("click", (ev) => {
      // REFACTORED: Changed param sbove to ev so I can set variable to ev.target
      const button = ev.target;
      // player chooses letter so add chosen class
      button.className += "chosen";
      // disable button so buttons clicked can only be clicked once
      button.disabled = true;
      // Pass the button to checkLetter function,
      // set returned letter to letterFound
      const letterFound = checkLetter(button);

      // check letterFound to determine if null
      if (!letterFound) {
         // if !letterFound then remove a trie/heart
         // first collect tries in tries variable
         const tries = document.querySelectorAll(".tries");
         // remove trie/heart
         tries[guessesMissed].style.display = "none";
         // set count guessesMissed++
         guessesMissed++;
      }
      // call function checkWin();
      checkWin();
   });
});

function checkWin() {
   // collect all "li" with classes show and letter into their respective variables
   const allShows = document.querySelectorAll(".show");
   const allLetters = document.querySelectorAll(".letter");
   const overlay = document.querySelector("#overlay");

   // compare allShows and allLetters by their length to see if they are equal
   if (allShows.length === allLetters.length) {
      // if === then show overlay by adding win class to it
      overlay.className = "win";
      // change its display to flex to show it
      overlay.style.display = "flex";
      // change overlay title text to show the WIN!!!
      const overlayTitle = overlay.querySelector("h2.title");
      overlayTitle.textContent = "You've WON!!!";
   } else if (guessesMissed >= 5) {
      // if guessesMissed >= 5 show overlay screen
      overlay.className = "lose";
      // change its display to flex to show it
      overlay.style.display = "flex";
      // change overlay title text to show the WIN!!!
      const overlayTitle = overlay.querySelector("h2.title");
      overlayTitle.textContent = "You lose, Try Again?";
   }
}

function gameReset() {
   // add button??? to success and failure screens
   // recreate buttons in keyboard ???
   // generate new random phrase on reset I assume
   // set guessesMissed back to 0
}
