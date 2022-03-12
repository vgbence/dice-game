let player1 = "PLAYER 1";
let player2 = "PLAYER 2";
  
function editNames() {
    player1 = prompt("Change Player1 name");
    player2 = prompt("Change player2 name");
    document.querySelector(".player1").innerHTML = player1;
    document.querySelector(".player2").innerHTML = player2;
}

function roll() {
    let img1 = document.querySelectorAll("img")[0];
    let img2 = document.querySelectorAll("img")[1];
    img1.classList.add("shake")
    img2.classList.add("shake")

    setTimeout(() => {
        img1.classList.remove("shake")
        img2.classList.remove("shake")
   
    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    let randomDiceImage = `images/dice-0${randomNumber1}.png`;
    img1.setAttribute("src", randomDiceImage);

    let randomNumber2 = Math.floor(Math.random() * 6) + 1;
    let randomDiceImage2 = `images/dice-0${randomNumber2}.png`;
    img2.setAttribute("src", randomDiceImage2);

    if (randomNumber1 > randomNumber2) {
        document.getElementById("result").innerHTML = `${player1} Wins`
        document.querySelector("firstdice").setAttribute('style', 'display:none')
    }
    else if (randomNumber2 > randomNumber1) {
        document.getElementById("result").innerHTML = `${player2} Wins`
    }
    else {
        document.getElementById("result").innerHTML = "DRAW!"
    }
    }, 2000)
}