console.log('The House always wins!')
//verify JS file is pulled in

const cardInput = document.getElementById('card')
const colorInput = document.getElementById('color')
//set variables to the input fields



function setCard(){
    const card = document.getElementById(cardInput.value)
    //assigns value entered into Set Card to variable card
    card.style.color = colorInput.value
}

// function reset(){
//     const cardReset = document.getElementsByTagName('section')
//     for (i = 0; i < cardReset.length; i++){
//        cardReset[i].style.color = grey; 
//     }
// }