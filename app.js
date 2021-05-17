//HINTS!

// cells[i].textContent

// !!if else statements are your friend!!

// === use comparison operators!
// "is something on the left hand side = to X?"

// if(conditionOne && conditionTwo) {}

// ||

// || &&

// else if statments!!



// let cells = document.querySelectorAll(".row > div ");

// //console.log(cells);

// //to find out if there is a winner or not
// //cells[i].textContent

// for (let i = 0; i < cells.length; i++) {
//     //console.log(cells[i]);
//     cells[i].addEventListener("click", cellCLicked);
// }

// function cellCLicked() {
//     //console.log("IT WORKED!!");
//     //console.log(event.target.textContent);
//     event.target.textContent = "X" 
// } 

/***************************************************************/

// var cells = document.querySelectorAll(".row > div");

// startGame();

// function startGame() {
//     for (let j = 0; j < cells.length; j++) {
//         cells[j].textContent = "";
//         cells[j].removeEventListener("click", startGame);
//     }
//     cellListener();
//     gameLogicO = false;
//     gameLogicX = false;
//     clickCounter = 0;
// };

// function cellListener () {
// for (let i = 0; i < cells.length; i++) {
//     cells[i].addEventListener("click", cellClicked);
//   }
// };

// function xoSwitch () {
//  var switcher = (clickCounter % 2 == 0) ? "X" : "O";
//  return switcher;
// };

// function cellClicked(){
//     var clickTarget = event.target;
//     clickTarget.textContent = xoSwitch();
//     clickTarget.removeEventListener("click", cellClicked);
//     clickCounter++;
//     checkWinner();
//     announceWinner();
// };


// function checkWinner() {
//     if (botLeft.textContent == "X" && botMid.textContent == "X" && botRight.textContent == "X") {
//         gameLogicX = true;
//     } else if (midLeft.textContent == "X" && midMid.textContent == "X" && midRight.textContent == "X") {
//         gameLogicX = true;
//     } else if (topLeft.textContent == "X" && topMid.textContent == "X" && topRight.textContent == "X") {
//         gameLogicX = true;
//     } else if (topLeft.textContent == "X" && midLeft.textContent == "X" && botLeft.textContent == "X") {
//         gameLogicX = true;
//     } else if (topMid.textContent == "X" && midMid.textContent == "X" && botMid.textContent == "X") {
//         gameLogicX = true;
//     } else if (topRight.textContent == "X" && midRight.textContent == "X" && botRight.textContent == "X") {
//         gameLogicX = true;
//     } else if (topLeft.textContent == "X" && midMid.textContent == "X" && botRight.textContent == "X") {
//         gameLogicX = true;
//     } else if (topRight.textContent == "X" && midMid.textContent == "X" && botLeft.textContent == "X") {
//         gameLogicX = true;
//     } else if (botLeft.textContent == "O" && botMid.textContent == "O" && botRight.textContent == "O") {
//         gameLogicO = true;
//     } else if (midLeft.textContent == "O" && midMid.textContent == "O" && midRight.textContent == "O") {
//         gameLogicO = true;
//     } else if (topLeft.textContent == "O" && topMid.textContent == "O" && topRight.textContent == "O") {
//         gameLogicO = true;
//     } else if (topLeft.textContent == "O" && midLeft.textContent == "O" && botLeft.textContent == "O") {
//         gameLogicO = true;
//     } else if (topMid.textContent == "O" && midMid.textContent == "O" && botMid.textContent == "O") {
//         gameLogicO = true;
//     } else if (topRight.textContent == "O" && midRight.textContent == "O" && botRight.textContent == "O") {
//         gameLogicO = true;
//     } else if (topLeft.textContent == "O" && midMid.textContent == "O" && botRight.textContent == "O") {
//         gameLogicO = true;
//     } else if (topRight.textContent == "O" && midMid.textContent == "O" && botLeft.textContent == "O") {
//         gameLogicO = true;
//     } 
// };
/**************************/


// /*Constants*/

// const wins = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8]
// ];


/******************** */

// //WALKTHROUGH//

let cells = document.querySelectorAll(".row > div");
let player = "X";
let moves = 0;
let gameOver = false;
let endGameText = document.getElementById("endgame-text");

//adding functionanlity to every cell
for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", cellClicked, { once: true });
}

function cellClicked(event) {
    moves++; //number of turns the game is on increases by 1..
    //console.log(moves);
    event.target.textContent = player;

    winCheck(); //called after turns/moves++
    togglePlayer();

    if (moves === 9 && gameOver === false) {
        tieGame();
    }
}

function togglePlayer() {
    if (player === "X") {
        player = "O";
    } else {
        player = "X";
    }
}

//represents cells[i]...
let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
];

// function winCheck() {
//     //this outer for loop that loops over the outer most arrays...
//     for (let i = 0; i < wins.length; i++) {
//         let oneWinCombo = wins[i];
//         let winCtr = 0;

//         //inner for loop that allows us to loop over each individual item in the nested arrays..
//         for (let j = 0; j < oneWinCombo.length; j++) {
//             if (oneWinCombo[j].textContent === player) {
//                 //increment win counter up by 1 every time textContect of a cell in a winCombo === player...
//                 winCtr++;
//                 //console.log(winCtr);
//             }

//             if (winCtr === 3) {
//                 //message to display when game over and restart button creation!..
//                 //console.log("Game over");
//                 gameOver = true
//                 endGameText.innerHTML = "${player} wins! <br> <button onClick={location.reload()}>Restart</button>";
//             }
//         }
//     }
// }

function winCheck() {
    if (cells[0].textContent === player) {
        if (cells[1].textContent === player && cells[2].textContent === player) {
            gameOver = true
            console.log(player + " wins")
        }
    }
    if (cells[3].textContent === player) {
        if (cells[4].textContent === player && cells[5].textContent === player) {
            gameOver = true
            console.log(player + " wins")
        }
    }
    if (cells[6].textContent === player) {
        if (cells[7].textContent === player && cells[8].textContent === player) {
            gameOver = true
            console.log(player + " wins")
        }
    }
    if (cells[0].textContent === player) {
        if (cells[4].textContent === player && cells[8].textContent === player) {
            gameOver = true
            console.log(player + " wins")
        }
    }
    if (cells[2].textContent === player) {
        if (cells[4].textContent === player && cells[6].textContent === player) {
            gameOver = true
            console.log(player + " wins")
        }
    }
    if (cells[0].textContent === player) {
        if (cells[3].textContent === player && cells[6].textContent === player) {
            gameOver = true
            console.log(player + " wins")
        }
    }
    if (cells[1].textContent === player) {
        if (cells[4].textContent === player && cells[7].textContent === player) {
            gameOver = true
            console.log(player + " wins")
        }
    }
    if (cells[2].textContent === player) {
        if (cells[5].textContent === player && cells[8].textContent === player) {
            gameOver = true
            console.log(player + " wins")
        }
    }
}


function tieGame() {
    endGameText.innerHTML = "It's a tie! <br> <button onClick={location.reload()}>Restart</button>";
}