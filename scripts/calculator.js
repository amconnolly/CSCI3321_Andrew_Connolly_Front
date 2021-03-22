//This function is used to calculate the answer for the equation that is in the display box from left to right when the equal key is pressed
function calculate()
{
    var d = document.getElementById('display');
    var equation = d.innerHTML;
    //checks if the key is pressed with a blank display box
    if(equation == '')
       return;
    //checks if the equation ends in an operation, returning an error
    else if(equation.endsWith(" + ") || equation.endsWith(" - ") || equation.endsWith(" * ") || equation.endsWith(" / "))
    {
        d.innerHTML = "ERR";
        return;
    }
    //splits up the equation based on spaces
    var seperated = equation.split(' ');
    //I put the * 1 because I was having some issues with the addition operator duing a concatination instead of addition
    var total = seperated[0] * 1;
    //loops through each of the operations
    for(let i = 1; i < seperated.length - 1; i += 2)
    {
        //looks at which operation it is and adjusts the total accordingly
        switch(seperated[i])
        {
            //same *1 for the concat issue
            case '+':
                total += seperated[i + 1] * 1;
                break;
            case '-':
                total -= seperated[i + 1];
                break;
            case '*':
                total *= seperated[i + 1];
                break;
            //and additional check needed to be made for deviding by zero, simply stoping the loop and returning UNDEFINED
            case '/':
                if(seperated[i + 1] == 0)
                {
                    d.innerHTML = "UNDEFINED" 
                    return;
                }
                else
                    total /= seperated[i + 1]; 
        }
    }
    //set the display to be the total
    d.innerHTML = total;
}

function updateDisplay(newValue)
{
    var d = document.getElementById('display');
    //if either ERR or UNDEFINED is displayed, they are removed before the next item is added
    if (d.innerHTML == "ERR" || d.innerHTML == "UNDEFINED")
        d.innerHTML = ''
    //makes sure the equation does not go outside of the box
    if (d.innerHTML.length >= 22 && newValue != '')
        return;
    //checks which key is pressed
    switch(newValue)
    {
        case ' + ':
        case ' - ':
        case ' * ':
        case ' / ':
            //stops the equation from starting with an operation
            if (d.innerHTML == '')
                return;
            //stops the user from entering two operation signs in a row
            else if (d.innerHTML.endsWith(" + ") || d.innerHTML.endsWith(" - ") || d.innerHTML.endsWith(" * ") || d.innerHTML.endsWith(" / "))
                return;
            else
                break;
        //if clear is pressed, wipe the display box
        case '':
            d.innerHTML = '';
        break;
    }
    //add the key pressed to the display box
    d.innerHTML += newValue;
}