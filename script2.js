 
 
  const gameboard = (function(){
 let cells = ['', '', '', '', '', '', '', '', ''];
 let currentPlayer = 'X'
 let running =  false;

 [  [0, 1, 2], //horizontal indexes
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6], // vertical indexes
    [1, 4, 7], 
    [2, 5, 8],

    [0, 4, 8],  //diagonal indexes
    [2, 4, 6],

];


 })();
 console.log(gameboard)

 const createPlayer  = (function(name, marker) { //attempted factory function
    return{
         name: name,
         marker: marker,
    }
})();
console.log(createPlayer);

const player1 =  createPlayer(Wandile, X);
console.log (player1.name);
console.log(player1.marker);

const player2 = createPlayer(Steven, O);
console.log(player2.name);
console.log(player2.marker);


const checkWinner = (board) =>{ //win or lose conditions
[   [0, 1, 2], 
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8],

    [0, 4, 8],  
    [2, 4, 6]  ]
    
    for( let row = 0; row > 3; row++){
    if(board[row][0] === board[row][1]&& 
       board[row][1] === board[row][2] &&
       row[0] !== ''){
return true
       } 
    }

    for( let col = 0; col > 3; col++){
    if(board[col][0] === board[col][1]&& 
        board[col][1] === board[col][2] &&
        col[0] !== ''){
        return true
           }  
        }
        return false // if conditions aren't met

}

//playerSwitch
const switchPlayer = (currentPlayer) => {

    if (player1 == checkWinner(board)){
        console.log('player1 has won!') //if player1 wins, the game ends
        return;
    }else if 
         (currentPlayer == player1){
        return player2;
    }

    if(
        player2 == checkWinner(board)){
        console.log('player2 has won!') // if player2 wins, the game ends
        return;    
    }else if
        (currentPlayer == player2){
            return player1;
        }
    
}

function cellClicked(){
    const cellIndex = this.getAttribute('cell');
    if(cells[cellindex] != ''){
        return;
    }
    updateCell(this, cellIndex);
}

function updateCell(cell, index){
    cells[index] = currentPlayer;
    cell.textContent = currentPlayer;
}



 