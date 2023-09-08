let textDiv = document.querySelector('.text')
const stringText = 'Lord You promised not to put me to shame, and indeed you are not a man to Lie, you have not ashemed me. Thank you God. Give me strength to always serve you all the days of my Life. '

const arrString = stringText.split("")

console.log(arrString)

let index = 0

let timeOut = setInterval(() => {
    textDiv.textContent += arrString[index]
    index++
    if(index === arrString.length){
        clearInterval(timeOut)
    }
}, 100);

