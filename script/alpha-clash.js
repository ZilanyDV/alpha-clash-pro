function continueGame() {
   const alphabet = getARandomAlphabet();
   const setCurrentAlphabet = document.getElementById('current-Alphabet');
   setCurrentAlphabet.innerText = alphabet;
   addBackgroundColorById(alphabet);
}
function play() {
    hideElementById('home-screen');
    addElementById('play-ground');
    continueGame()
}