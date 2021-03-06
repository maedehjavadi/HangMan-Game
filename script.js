let dictionary=[
    "chocolate","banana","paper","rug","woman","javascript"
]

let answer=''
let mistakes=0
let guessed=[]
let hiddenWord=null
// document.getElementById('card').setAttribute('disabled',true)

function Start() {
  mistakes = 0;
  guessed = [];
  // document.getElementById('card').setAttribute('disabled',false)
  startTimer()
  randWord()
  guessedWord()
  updateMistakes()
  generateAlphabet()
}

function randWord() {
    answer=dictionary[Math.floor(Math.random()*dictionary.length)]
}


function guessedWord() {
  hiddenWord = answer.split('').map(letter=>(guessed.indexOf(letter) >= 0? letter:"_")).join(' ')
  document.getElementById('word').value=hiddenWord
}

function generateAlphabet() {
    let alphabet ='abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
        `<button class="btn btn-lg btn-outline-dark m-2" id="`+letter+`" onclick="handleGuess('`+letter+`')">`+letter+`</button>`
        ).join('')

    document.getElementById('keyboard').innerHTML=alphabet
}

function handleGuess(chosenLetter) {
    guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null
    document.getElementById(chosenLetter).setAttribute('disabled', true)
    if (answer.indexOf(chosenLetter) >= 0) {
      guessedWord()
      checkIfGameWon()
    } else if (answer.indexOf(chosenLetter) === -1) {
      
    /* TYPING WRONG LETTERS */
      let wrongLetters=guessed.filter(letter=>answer.indexOf(letter)<0? letter:null).join(" , ")
      document.getElementById('wrongLetter').value=wrongLetters
      // console.log(wrongLetters)

      mistakes++;
      updateMistakes()
      checkIfGameLost()
    }
  }

  function checkIfGameWon() {
    hiddenWord=hiddenWord.split(" ").join("")
    console.log()
    if (hiddenWord === answer) {
      document.getElementById('keyboard').innerHTML = 'You Won!!!'
      document.getElementById('keyboard').classList.add('h3','text-success')
      stopTimer()
    }
  }

  function updateMistakes() {
    document.getElementById('mistakes').innerHTML = mistakes
  }

  
  function checkIfGameLost() {
    if (mistakes === 10) {
      
      document.getElementById('keyboard').innerHTML = `You Lost!!!</br>The answer was: ${answer}`
      document.getElementById('keyboard').classList.add('h3','text-danger')
      stopTimer()
    }
  }
  let Interval=null

  function startTimer() {
    stopTimer()
    let minute=9
    let second=60
      Interval=setInterval(function(){
        if (minute == 0 && seconed==1) {
            document.getElementById('timer').innerHTML="00:00"
        }else{
            second--;
            if (second==0) {
                minute--
                second=60
                if (minute==0) {
                    minute=minute
                    // clearInterval(runTime)
                }
            if(minute.toString().length==1){
                minute="0"+minute
            }
            if(second.toString().length==1){
                second="0"+second
            }
            }
        document.getElementById('timer').innerHTML=minute + ":" + second
        }
     },1000)
    }
    function stopTimer() {
      clearInterval(Interval)
    }