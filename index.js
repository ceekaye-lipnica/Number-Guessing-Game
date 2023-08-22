const randomNum = Math.floor(Math.random() * 10 + 1);
let guesses = 0;

document.getElementById("submitBtn").onclick = function(){
    let guess = document.getElementById("numberField").value;
    guesses += 1;

    if(guess == randomNum){
        alert(`${randomNum} is the correct number! It took you ${guesses} guesses.`)
    }
    else if (guess < randomNum){
        alert("Your guess is too small!");
    }
    else{
        alert("Your guess is too big!");
    }

}