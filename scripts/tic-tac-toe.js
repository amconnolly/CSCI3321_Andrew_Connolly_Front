var gameOver = false;
var totalMove = 0;
var currentPlayer = 'X';

function placeMarker(spotID)
{
    if (!gameOver){
    //get spot by spot/element ID
    // if the game is not over
        //if spot is empty
            //place the marker by changing the innerHTML)
            //check if the current player won the game using currentPlayerWon()
            //if yes, display message
            //if no, switch player, totalMove++
        //else
            //do nothing
    //else the game is over
        //do nothing
    }
}

function CurrentPlayerWon(){
    // get each spot using getElementByID()
    // for example, s1 = document.getElementById('1')
    // s2 = document.getElementByID('2')
    // s2 = document.getElementByID('3')
    //if
        //(s1.innerHTML ===s2.innerHTML && s2.innerHTML === s3.innerHTML) <= first row
        // || (s4.innerHTML ===s5.innerHTML && s5.innerHTML === s6.innerHTML) <= first row
        // || (s7.innerHTML ===s8.innerHTML && s8.innerHTML === s9.innerHTML) <= first row
        //...
        //gameOver = true;
    //else
        //gameOver = false;
    
        // if (!gameOver){
            //if (totalMove == 8){
                //gameOver = true
            //}

        //}
    
}