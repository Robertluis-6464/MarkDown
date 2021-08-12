

const cardArray = [
    {
        name: 'akira',
        img: 'images/akira.jpg'
    },
    {
        name: 'cowboy',
        img: 'images/cowboy.jpg'
    },
    {
        name: 'ghost',
        img: 'images/ghost.jpg'


    }]

cardArray.sort(() => 0.5 - Math.random())




const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
var cardChosen = []
var cardChosenId = []
var cardsWon = []

    
function createBoard(){
    for(let i=0; i < cardArray.length; i++){
        var card = document.createElement('img')
        card.setAttribute('src', 'images/blank.jpg')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
        
        }
    }
   

function checkForMatch() {
    var cards = document.querySelectorAll('img')
    const optionOneId = cardChosenId[0]
    const optionTwoId = cardChosenId[1]
    if (cardChosen[0] === cardChosen[1]){
        alert('YOU FOUND A MATCH')
        cards[optionOneId].setAttribute('src', 'images/white.jpg')
        cards[optionTwoId].setAttribute('src', 'images/white.jpg')
        cardsWon.push(cardChosen)
    }   else{
        cards[optionOneId].setAttribute('src', 'images/blank.jpg')
        cards[optionTwoId].setAttribute('src', 'images/blank.jpg')
        alert(' Sorry, try agian')
    }
    cardChosen = []
    cardChosenId = []
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length == cardArray.length/2){
        resultDisplay.textContent = 'Congratulations! You found them all!'
    }




function flipCard(){
    var cardId = this.getAttribute('data-id')
    cardChosen.push(cardArray[cardId].name)
    cardChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].imgages)
        if( cardChosen.length === 2){
            setTimeout(checkForMatch, 500)
}


}

createBoard()

}







   
