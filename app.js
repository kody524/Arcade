const introPage = document.getElementById("front-page");
const playerVsPlayer = document.getElementById("pvp");
const vsComputer = document.getElementById("vscomputer");
const divForButton = document.getElementById("buttonId");
const randomButton = document.getElementById("random");
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const table = document.getElementById("tables");
const one = document.getElementById("0")
const two = document.getElementById("1")
const three = document.getElementById("2")
const four = document.getElementById("3")
const five = document.getElementById("4")
const six = document.getElementById("5")
const seven = document.getElementById("6")
const eight = document.getElementById("7")
const nine = document.getElementById("8")
const winner = document.getElementById("winner")
let name1;
let name2;
let number;



playerVsPlayer.addEventListener("click", function () {
  introPage.className = "frontpage-hide";
  divForButton.className = "button";
  names();
});

function names() {
  let firstPlayerName = prompt("First Player Name");
  let secondPlayerName = prompt("Second Player Name");
  if (firstPlayerName != null) {
    player1.innerHTML = "X:" + firstPlayerName;
  }
  if (secondPlayerName != null) {
    player2.innerHTML = "O:" + secondPlayerName;
  }
}
function randomTurn() {
  const randomNumber = Math.floor(Math.random() * 2);
  if (randomNumber === 0) {
    number = 0
    player1.className = "playeroneturn";  
  }
  if (randomNumber === 1) {
    number = 1
    player2.className = "playertwoturn";
  }
  randomButton.disabled = true;
}

function chooseBox(event) {
  let target = event.target;
  if (number === 0) {
    target.innerText = "X";
    player1.className = "playerone";
    player2.className = "playertwoturn";
    number = 1
  }else{
    target.innerText = "O";
    player2.className = "playertwo";
    player1.className = "playeroneturn";
    number  = 0
  }
  
}

function check(){


  if(one.innerText=='X'&&two.innerText=='X'&&three.innerText=='X'){
   console.log('hi')

    winner.innerText =  'X has Won'


  }


  if(four.innerText=='X'&&five.innerText=='X'&&six.innerText=='X'){
    console.log('hi')

    winner.innerText = 'X has Won'


  }


  if(seven.innerText=='X'&&eight.innerText=='X'&&nine.innerText=='X'){
    console.log('hi')

    winner.innerText = 'X has Won'


  }


  if(one.innerText=='X'&&four.innerText=='X'&&seven.innerText=='X'){

    console.log('hi')
    winner.innerText = 'X has Won'


  }


  if(two.innerText=='X'&&five.innerText=='X'&&eight.innerText=='X'){

    console.log('hi')
    winner.innerText = 'X has Won'


  }


  if(three.innerText=='X'&&six.innerText=='X'&&nine.innerText=='X'){
    console.log('hi')

    winner.innerText = 'X has Won'


  }


  if(one.innerText=='X'&&five.innerText=='X'&&nine.innerText=='X'){

    console.log('hi')
    winner.innerText = 'X has Won'


  }


  if(three.innerText=='X'&&five.innerText=='X'&&seven.innerText=='X'){

    console.log('hi')
    winner.innerText = 'X has Won'


  }


  if(one.innerText=='O'&&two.innerText=='O'&&three.innerText=='O'){
    console.log('hi')

    winner.innerText ='X has Won'


  }


  if(four.innerText=='O'&&five.innerText=='O'&&six.innerText=='O'){

    console.log('hi')
    winner.innerText ='X has Won'


  }


  if(seven.innerText=='O'&&eight.innerText=='O'&&nine.innerText=='O'){
    console.log('hi')

    winner.innerText ='X has Won'


  }


  if(one.innerText=='O'&&four.innerText=='O'&&seven.innerText=='O'){

    console.log('hi')
    winner.innerText ='X has Won'


  }


  if(two.innerText=='O'&&five.innerText=='O'&&eight.innerText=='O'){

    console.log('hi')
    winner.innerText ='X has Won'


  }


  if(three.innerText=='O'&&six.innerText=='O'&&nine.innerText=='O'){
    console.log('hi')

    winner.innerText ='X has Won'


  }


  if(one.innerText=='O'&&five.innerText=='O'&&nine.innerText=='O'){

    console.log('hi')
    winner.innerText ='X has Won'


  }


  if(three.innerText=='O'&&five.innerText=='O'&&seven.innerText=='O'){

    console.log('hi')
    winner.innerText ='X has Won'


  }


 }
table.addEventListener("click", chooseBox);
table.addEventListener('click',check)
randomButton.addEventListener("click", randomTurn);




