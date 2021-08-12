const bigFiveButton = document.getElementsByClassName("big-five-button")
const spottedAnimalsList = document.getElementById("spotted-animals-list")
const removeFirstItemButton = document.getElementById("remove-first-item-button")
const removeAllButton = document.getElementById("remove-all-button")


const addBigFive = (number) =>  {
    const text = bigFiveButton[number].textContent
    const newLi = document.createElement("li")
    newLi.innerHTML = text
    spottedAnimalsList.appendChild(newLi)
}

for (let i =0; i < bigFiveButton.length; i++) {
    bigFiveButton[i].addEventListener('click', function(){
        addBigFive(i)
    })
}

const removeChild = (number) => {
    const child = spottedAnimalsList.getElementsByTagName("li")[number]
    spottedAnimalsList.removeChild(child)
}

const removeAll = () => {
    while (spottedAnimalsList.firstChild){
        spottedAnimalsList.removeChild(spottedAnimalsList.firstChild)
    }
    
}

removeFirstItemButton.addEventListener("click", () => removeChild(0))

removeAllButton.addEventListener("click", removeAll)


