
 const gameboard = (function(){ 
    const rows = 3;
    const columns = 3;
    const board = [];  //creates empty space in rows & columns
    
    
    function Cell() { 
        let value = ['', '', '', '', '', '', '', '', ''];
        const addMark =  (index, player) => {   // takes players argument
            if (index < 0 || index >= value.length) {
                return false;
        }

        if (value[index] === '') {
            value[index] = player; 
            return true; 
        }
        return false;
    }

        const getValue = () =>  value;       // makes value accessable outside scope
            return {addMark, getValue};
        
    }

    for (let i = 0; i < rows; i++){
        board[i] = []
        for (let j = 0; j < columns; j++){
            board[i].push(Cell());  // adds cells to the gameboard
        }
       
    }
    return board
})();

    
    function createPlayer(name, marker){
        return{
            name: name,
            marker: marker
        };
    }

    const player1 = createPlayer('Wandile', 'X');
    console.log(player1.name);
    console.log(player1.marker);
    
    const player2 = createPlayer('Steven', 'O');
    console.log(player2.name);
    console.log(player2.marker);

    switchPlayer = (currentPlayer) => {
         currentPlayer = player1
        if (currentPlayer === player1){
          currentPlayer = player2;
          console.log(currentPlayer)
          
        } else if( currentPlayer === player2){
           currentPlayer = player1;
           console.log(currentPlayer)
        }

    }

const grid =   [[0, 1, 2], //rows
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6], //columns
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8], //diagonals
                [2, 4, 6]
];

//checks if any player has won or tie 
    function checkWinner(board) {
    for(let row = 0; row < 3; row++) {
        if ( board[row][0] === board[row][1] &&
                 board[row][1] === board[row][2] && 
                 board[row][0] !== ''){
     return true;}  
    }
    //checks columns
    for(let col = 0; col < 3; col++) {
        if ( board[col][0] === board[col][1] &&
             board[col][1] === board[col][2] && 
             board[col][0] !== ''){
 return true;}
    }

   
//checks diagonal-left -> right
        if ( board[0][0] === board[1][1] &&
             board[1][1] === board[2][2] &&
             board[0][0] !== ''){
 return true;}

 //checks diagonal right -> left
        if ( board[0][2] === board[1][1] && 
             board[1][1] === board[2][0] && 
             board[0][2] !== '') {
        return true;
        } 
            return false;
        }

 function playGame(){
    console.log(gameboard);
    console.log(createPlayer('Wandile', 'X'));
 }

