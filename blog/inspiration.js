let textDiv = document.querySelector('.text')
const stringText = 'Hello There, kimutai here wishing you a fruitful month full of Gods grace and favour, may all that the enemy intended to harm you work for your good in this september in Jesus name. Good night😉   #stay Motivated'

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

