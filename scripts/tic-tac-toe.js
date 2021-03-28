var gameOver, totalMove, currentPlayer, board;

//creates the empty array to store the board into
function makeEmptyArray()
{
    board = [[],[],[]];
    for(let i = 0; i < 3; i++)
    {
        for(let j = 0; j < 3; j++)
            board[i][j] = '';
    }
    return board;
}

//allows the current player to make a move
//takes in the spot id and x/y loaction
function placeMarker(x, y, spotID)
{
    //checks if the game is still going
    if(gameOver == false)
    {
        var space = document.getElementById(spotID);
        //checks that nothing is in the spot
        if(space.innerHTML == '')
        {
            board[x][y] = currentPlayer;
            space.innerHTML = currentPlayer;
            currentPlayerWon(x, y);
            updateGameStatus();
        }
    }
}

//checks if the current player won, taking on the moves position
function currentPlayerWon(x, y)
{
    let check = currentPlayer + currentPlayer + currentPlayer;
    let row = '', col = '', diag = '', diag2 = '';

    //check row and columb
    for(var i = 0; i < 3; i++)
    {
        row += board[x][i];
        col += board[i][y];
    }

    //checks top left to bottom right
    if(x - y == 0 || (x == 1 && y == 1))
        diag = board[0][0] + board[1][1] + board[2][2];

    //checks top right to bottom left
    if (Math.abs(x - y) == 2 || (x == 1 && y == 1))
        diag2 = board[0][2] + board[1][1] + board[2][0];
    
    //if three in a row, current player wins else, total moves goes up and checks for tie
    if(row == check || col == check || diag == check || diag2 == check)
        gameOver = true;
    else
    {
        totalMove++;
        if(totalMove == 9)
            gameOver = true;
    } 
}

//updates the message, game over status, and button visibility or current player
function updateGameStatus()
{
    let message;
    if (gameOver)
    {
        if(totalMove == 9)
            message = "THE GAME IS A TIE!";
        else
            message = currentPlayer + " WON THE GAME!";
        document.getElementById("start").hidden = false;
    }
    else
    {
        if(currentPlayer == 'X')
            currentPlayer = 'O';
        else
            currentPlayer = 'X';
        message = "Player " + currentPlayer + "'s turn"
    }
    document.getElementById("messageBox").innerHTML = message;
}

//sets the game state back to its starting point for start/restart button
function restartGame()
{
    let button = document.getElementById("start");
    let messageBox =document.getElementById("messageBox");

    button.hidden = true;
    button.innerHTML = "Restart";
    messageBox.hidden = false;
    messageBox.innerHTML = "Player X starts first";
    currentPlayer = 'X';
    board = makeEmptyArray();
    gameOver = false;
    totalMove = 0;
    for(let i = 1; i <= 9; i++)
        document.getElementById(i).innerHTML = '';
}