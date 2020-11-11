//1 change player turn
    //1 aplace x or o
//3 track progress
//4 determine & display winner
//

// click.addEventListener('click', detectClick)


//select which box was clicked

//create listener that operates on a click and performs the play function

let status = []

function play(boxID) { //pass in every time board is clicked
    //pull in player span
    let player = document.getElementById('player')
    //track which box was clicked
    let clickedBox = document.getElementById(boxID)
    //toggle from Player X to Player O
    //change contents of clicked box
    //store value of box in an array
    if (player.innerText === 'X'){
        player.innerText = 'O'
        clickedBox.innerText = 'X'
        status[boxID] = 'X'
    }
    else {
        player.innerText = 'X'
        clickedBox.innerText = 'O'
        status[boxID] = 'O' 
    }
    console.log(status)
    winner(status) 
}

let winningPlayer = ''

function winner(status){
    if(status[0] && status[0] === status[1] === status[2]){
        winningPlayer = document.getElementbyID('player.innerText')}

    
    
    
    
    
    
    
    alert(winningPlayer + ' wins!')
}



 // check horizontal
 //check vertical
 //check diagonal
 //no winner = cats game
