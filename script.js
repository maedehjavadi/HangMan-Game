let dictionary=[
    "chocolate","banana","paper","rug","woman","javascript"
]

let answer=''
let mistakes=0
let guessed=[]
let hiddenWord=null
document.getElementById('card').setAttribute('disabled',true)

function randWord() {
    answer=dictionary[Math.floor(Math.random()*dictionary.length)]
}
function generateAlphabet() {
    let alphabet ='abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
        `<button class="btn btn-lg btn-outline-dark m-2" id="`+letter+`" onclick="handleGuess('`+letter+`')">`+letter+`</button>`
        ).join('')

    document.getElementById('keyboard').innerHTML=alphabet
}
function handleGuess(chosenLetter) {
    guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
    document.getElementById(chosenLetter).setAttribute('disabled', true);
  
    if (answer.indexOf(chosenLetter) >= 0) {
      guessedWord();
      checkIfGameWon();
    } else if (answer.indexOf(chosenLetter) === -1) {
      mistakes++;
        //   document.getElementById('wrongLetter').value=chosenLetter+' '
        updateMistakes();
        checkIfGameLost();
        typeWrongLetter(chosenLetter)
    }
  }
  function typeWrongLetter(letter) {
      let wrongLetter=[]
      wrongLetter.forEach(item=>
        )
  }
  function checkIfGameWon() {
    if (hiddenWord === answer) {
      document.getElementById('keyboard').innerHTML = 'You Won!!!';
    }
  }
  function updateMistakes() {
    document.getElementById('mistakes').innerHTML = mistakes;
  }
  
  function checkIfGameLost() {
    if (mistakes === 10) {
      document.getElementById('word').innerHTML = 'The answer was: ' + answer;
      document.getElementById('keyboard').innerHTML = 'You Lost!!!';
    }
  }
  function Start() {
    mistakes = 0;
    guessed = [];
    document.getElementById('card').setAttribute('disabled',false)
  
    randWord();
    guessedWord();
    updateMistakes();
    generateAlphabet();
  }

function guessedWord() {
    hiddenWord = answer.split('').map(letter=>(guessed.indexOf(letter) >= 0? letter:"_")).join(' ');
    // console.log(hiddenWord)
    document.getElementById('word').value=hiddenWord
}
// generateAlphabet()
// randWord()
// guessedWord()