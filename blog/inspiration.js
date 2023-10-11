let textDiv = document.querySelector('.text')
let img = document.querySelector('.img')

const stringText = 'A Story is told of two men, Who were praying in a mountain. One was a millionaire praying for a breakthrough in a cetain contract. One was a poor guy crying for food to give his Children. The millionare Heard the poor guys graonings, He gave Him 1000 dollars. The poor guy went home with his answered prayer and sure enough God also opened a way for this millionare. You are a millonare today because God has given you a great health. There is a patient lying on the sick bed, some loosing hope of this life. Join us in prayer as we go and encourage them, pray for them and give them milk and Fruits. An God shall remmember the cries of your heart. '

const arrString = stringText.split("")


let index = 0

let timeOut = setInterval(() => {
    textDiv.textContent += arrString[index]
    index++

    if(index === arrString.length){
        clearInterval(timeOut)
        img.style.visibility = 'visible'
    }
}, 100);