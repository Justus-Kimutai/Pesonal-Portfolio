let textDiv = document.querySelector('.text')

const stringText = `NEHEMIAH CHAPTER 9 
After the walls of Jerusalem were rebuilt, the Israelites spent half of the day confessing and worshiping the Lord. 
They started telling the history of where God had brought them. The clear insight from this Chapter is how God was very compassionate to them, from the time they came from Egypt to cannan. They were full of bitterness and anger despite God providing for them everything, but God held His anger from them. Despite God handing them to the hands of their enemies in the Promised Land, He still couldn’t allow them to be finished. 
God is very compassionate, even if we sink into the deep mud of sin or get lost in the unending black hole of sin when we turn our face towards Him. He comes running towards us. 
`

const arrString = stringText.split("")


let index = 0

let timeOut = setInterval(() => {
    textDiv.textContent += arrString[index]
    index++

    if(index === arrString.length){
        clearInterval(timeOut)
    }
}, 100);