let player = {
    name:"Kimutai",
    chips:185,
}
let cards = []
let sum = 0

let  hasBlackJack = false
var isAlive = false

let message = " "
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.querySelector(".cards-el")
let playerEl = document.querySelector(".player-el")
const startGamebtn = document.querySelector(".startGame-btn")
const newCardbtn = document.querySelector(".newCard-btn")
const Instbtn = document.getElementById("instructions")
const guideBtn = document.querySelector(".guide")


startGamebtn.addEventListener('click',()=>{
    startGame()
})
newCardbtn.addEventListener('click',()=>{
    newCard()
})
Instbtn.addEventListener('click',()=>{
    guideBtn.classList.toggle('toggle-guide')
    
})
console.log(guideBtn)

function getRandomCard(){
     
    let randomNumber =  Math.floor(Math.random()*13) + 1

    if ( randomNumber > 10){
        return 10
    }else if( randomNumber === 1 ){
        return 1
    }
    else{
        return randomNumber
    }

}

function startGame(){
    isAlive = true
    hasBlackJack = false
   
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()

    cards = [firstCard,secondCard]
    sum = firstCard + secondCard
   
    renderGame()
}


function renderGame(){

    cardsEl.textContent = "Cards:"
 
    for ( i=0; i<cards.length; i++ ){
        cardsEl.textContent +=" " +  cards[i] + " "
    }

    sumEl.textContent = "sum: " + sum

    if ( sum <= 20 ){
        message = "Do you want to draw a new card?"
        messageEl.style = `
        color: #ffff;
        

`
        
    }
    else if(sum === 21 || sum ===  26 || sum === 30){   
        message = "You've got a Blackjack 🎉"
        hasBlackJack = true
        messageEl.style = `
            color: gold;
            font-size: 1.5rem;
        `

    }
    else {
        message = "You're out of the game"
        isAlive = false
        messageEl.style = `
        color: rgb(255, 0, 85);
        font-size: 1.5rem;

    `
    }
    
    messageEl.textContent = message
    
}
function newCard(){
    if( isAlive === true && hasBlackJack === false ){
    var card = getRandomCard()
    cards.push(card)
    sum += card
    renderGame()
}
}


//animation text







//A function that randomises the cards from 1-6

// function rollDice(){
//    let randomNumber = Math.floor(Math.random()*6) + 1;
//    return randomNumber;
// }

// let diceSide = rollDice();

// console.log(diceSide)




// let person = {
//     name:"Captain",
//     age:19,
//     county:"EMC"
// }


// function logData(){
//     console.log(person.name + " is " + person.age + " Years old and lives in " + person.county )
//  }

// logData()





// function randomAge(){
//     return Math.floor(Math.random()*70) +1
// }
// let age = randomAge()

// if(age<6){
//     console.log("Free")
// }else if(age<=17){
//     console.log("Child Disount")
// }else if(age<=26){
//     console.log("Student Discount")
// }else if(age<=66){
//     console.log("Full Price")
// }else{
//     console.log("Senior Citizen Discount")
// }

// let largeCountries = ["china","India","USA","Indonesia","Pakistan"]

// largeCountries.pop()
// largeCountries.push("Aghakan")

// largeCountries.shift()
// largeCountries.unshift("Australia")

// for(let i = 0; i < largeCountries.length ; i++){
//     console.log(" - " + largeCountries[i]) 
// }


// let dayOfMonth = 13
// let weekday = "Friday"

// if(dayOfMonth === 13 && weekday === "Friday"){
//     console.log("😱")
// }




// let hands =["rock","paper","scissor"]

// function getHand(){
//     let randomIndex = Math.floor(Math.random()*3)

//     return hands[randomIndex]
// }
// console.log(getHand())

// A program to sort specific items on an array
// let fruits = ["🍎","🍌","🍎"]

// let appleShelf = document.querySelector(".apple-shelf")
// let bananashelf = document.querySelector(".banana-shelf")

// function sortFruit(){
//   for(i=0;i<fruits.length;i++){
//       if(fruits[i] === "🍎"){
//           appleShelf.textContent += "🍎" 
//       }else{
//           bananashelf.textContent += "🍌"
//       }
//   }
// }

// sortFruit()


