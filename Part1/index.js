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
    winner()
}


 // check horizontal
 //check vertical
 //check diagonal
 //no winner = cats game

function winner(){
    if (status[0] !== undefined && status[0] === status[1] && status[0] === status[2]) {
        alert(status[0] + ' wins!')
        return
    } 
    if(status[3] !==undefined && status[3] === status[4] && status[3] === status[5]) {
        (status[3] + ' wins!')
        return
    }   
    if(status[6] !==undefined && status[6] === status[7] && status[6] === status[8]) {
        alert(status[6] + ' wins!')
        return
    }
    if(status[0] !==undefined && status[0] === status[3] && status[0] === status[6]) {
        alert(status[0] + ' wins!')
        return
    } 
    if(status[1] !==undefined && status[1] === status[4] && status[1] === status[7]) {
        alert(status[1] + ' wins!')
        return    
    } 
    if(status[2] !==undefined && status[2] === status[5] && status[2] === status[8]) {
        alert(status[2] + ' wins!')
        return
    } 
    if(status[0] !==undefined && status[0] === status[4] && status[0] === status[8]) {
        alert(status[0] + ' wins!')
        return
    } 
    if(status[2] !==undefined && status[2] === status[4] && status[2] === status[6]) {
        alert(status[2] + ' wins!')
        return
    }
    let staleMate = true
    
    for (let i = 0; i <= 8; i++){
        if (status[i] === undefined){
            staleMate = false
        }
    }
        if (staleMate === true) {
            alert("Cat's Game!")
    }

      
}






