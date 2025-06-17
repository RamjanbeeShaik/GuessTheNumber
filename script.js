let attempts=0;
let randomNum=Math.floor(Math.random()*100+1);
console.log(randomNum);

const guess=document.getElementById("guess");
const submit=document.getElementById("submit");
const hint=document.getElementById("hint");
const attemptsText=document.getElementById("attempts");
const playAgainBtn=document.getElementById("play-again");

submit.addEventListener("click",checkGuess);
playAgainBtn.addEventListener("click", resetGame);

function checkGuess(){
    const userValue=Number(guess.value);
    attempts++;
    if(userValue>randomNum){
       hint.innerText="Guess is Very High..., Try Again";
    }
    else if(userValue < randomNum){
        hint.innerText="Guess is Very Low..., Try Again";
    }
    else{
         hint.innerText='Congratulations, Your guess is Correct !!!';
         attemptsText.innerText="Attempts : "+attempts;
         submit.disabled=true;
         guess.disabled=true;
         playAgainBtn.style.display="inline";
         return;
    }
    attemptsText.innerText="Attempts : "+attempts;
}

function resetGame() {
    attempts = 0;
    randomNum = Math.floor(Math.random() * 100 + 1);
    console.log(randomNum);

    guess.value = "";
    hint.innerText = "";
    attemptsText.innerText = "Attempts: 0";

    guess.disabled = false;
    submit.disabled = false;
    playAgainBtn.style.display = "none"; 
}