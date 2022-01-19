let dictionary=[
    "chocolate","Banana","paper","rug","woman","javascript"
]

let answer=''
let mistakes=0
let guessed=[]
let hiddenWord=null


function randWord(params) {
    answer=dictionary[Math.floor(Math.random()*dictionary.length)]
}
function generateAlphabet() {
    let alphabet ='abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
        `<button class="btn btn-lg btn-outline-dark m-2" id="`+letter+`" onclick="handleGuess('`+letter+`')">`+letter+`</button>`
        ).join('')

    document.getElementById('keyboard').innerHTML=alphabet
}

function guessedWord() {
    hiddenWord = answer.split('').map(letter=>(guessed.indexOf(letter) >= 0? letter:"_")).join(' ');
    // console.log(hiddenWord)
    document.getElementById('word').value=hiddenWord
}
generateAlphabet()
randWord()
guessedWord()