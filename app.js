const introPage = document.getElementById("front-page");
const playerVsPlayer = document.getElementById("pvp");
const vsComputer = document.getElementById("vscomputer");
const divForButton = document.getElementById("buttonId");
const randomButton = document.getElementById("random");
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const table = document.getElementById("tables");

const gameState = {
  players: ['x', 'o'],
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ]
}

playerVsPlayer.addEventListener("click", function () {
  introPage.className = "frontpage-hide";
  divForButton.className = "button"
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
function randomTurn(){
    let number = Math.floor(Math.random()*2);
    console.log(number)
    if(number===1){
        player1.className = "playeroneturn"
    }else{
        player2.className = "playertwoturn"
    }
}
function chooseBox(event){
  let target = event.target;

}
table.addEventListener("click",chooseBox)

randomButton.addEventListener("click",randomTurn)