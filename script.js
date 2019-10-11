let winners = new Array();
let player1Selections = new Array();
let player2Selections = new Array();
let timer;
let numberOfPlayers = 2;
let currentPlayer = 0;
let move = 0;
let points1 = 0; // player 1 points
let points2 = 0; // player 2 points
let size = 3;

function winningSolutions() {
  winners.push([0, 1, 2]);
  winners.push([3, 4, 5]);
  winners.push([6, 7, 8]);
  winners.push([0, 3, 6]);
  winners.push([1, 4, 7]);
  winners.push([2, 5, 8]);
  winners.push([0, 4, 8]);
  winners.push([2, 4, 6]);
}

for (i = 0; i < 3; i++) {
  var handler = function(e) {
    if (currentPlayer == 0) {
      this.innerHTML = "X";
      player1Selections.push(parseInt(this.id));
      player1Selections.sort(function(a, b) {
        return a - b;
      });
      d("player1").classList.remove("selected");
      d("player2").classList.add("selected");
    } else {
      this.innerHTML = "O";
      player2Selections.push(parseInt(this.id));
      player2Selections.sort(function(a, b) {
        return a - b;
      });
      d("player1").classList.add("selected");
      d("player2").classList.remove("selected");
    }

    if (checkWinner()) {
      if (currentPlayer == 0) points1++;
      else points2++;

      document.getElementById("player1").innerHTML = points1;
      document.getElementById("player2").innerHTML = points2;

      reset();
    }
  };
}

function reset() {
  currentPlayer = 0;
  player1Selections = new Array();
  player2Selections = new Array();
  d("player1").classList.add("selected");
  d("player2").classList.remove("selected");
}
