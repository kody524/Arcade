const introPage = document.getElementById("front-page");
const playerVsPlayer = document.getElementById("pvp");
const vsComputer = document.getElementById("vscomputer");
const divForButton = document.getElementById("buttonId");
const randomButton = document.getElementById("random");
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const table = document.getElementById("tables");
const tdzero = document.getElementById("0").innerHTML
const tdone = document.getElementById("1").innerHTML
const tdtwo = document.getElementById("2").innerHTML
const tdthree = document.getElementById("3").innerHTML
const tdfour = document.getElementById("4").innerHTML
const tdfive = document.getElementById("5").innerHTML
const tdsix = document.getElementById("6").innerHTML
const tdseven = document.getElementById("7").innerHTML
const tdeight = document.getElementById("8").innerHTML
let firstPlayer;
let secondPlayer;
let indexBoard = []
let valueBoard =[]


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
  const number = Math.floor(Math.random()*2);
    if(number===1){
        player1.className = "playeroneturn";
        firstPlayer = true;
        secondPlayer = false;
    }if(number===0){
        player2.className = "playertwoturn";
        secondPlayer = true;
        firstPlayer = false;
    }
    randomButton.disabled = true 
}

 function chooseBox(event){
   let target = event.target;
   if(firstPlayer&&!secondPlayer){
     target.innerHTML = "X"
     firstPlayer = false;
     secondPlayer = true;
     player1.className = "playerone"
     player2.className = "playertwoturn"
     indexBoard.push(target)
     valueBoard.push(target.innerHTML)

     
   }else if(!firstPlayer&&secondPlayer){
    target.innerHTML = "O"
    firstPlayer = true;
     secondPlayer = false;
     player2.className = "playertwo"
     player1.className = "playeroneturn"
     indexBoard.push(target)
     valueBoard.push(target.innerHTML)
     
   }

   }



table.addEventListener("click",chooseBox)

  
randomButton.addEventListener("click",randomTurn)
console.log(indexBoard)
console.log(valueBoard)