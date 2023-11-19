const partRedDOM   = document.querySelector(".part-red")
const partGreenDOM = document.querySelector(".part-green")
const partWhiteDOM = document.querySelector(".part-white")
const partBlackDOM = document.querySelector(".part-black")

const MAX_IMAGES = 500

const IMAGES_RED = 29
const IMAGES_GREEN = 29
const IMAGES_WHITE = 32
const IMAGES_BLACK = 28


function generateVertical(color, parentDOM, totalImgs) {
    for (let i = 0; i < MAX_IMAGES; i++) {
        const imgDOM = document.createElement("img")
        const divDOM = document.createElement("div")

        divDOM.setAttribute("class", "img-container")
        divDOM.appendChild(imgDOM)

        imgDOM.setAttribute("class", "img")
        imgDOM.setAttribute("src", `imgs/${color}/img (${rand(1, totalImgs)}).jpg`)
        const randRot = color!="red"? rand(-30, 30) : rand(-30, 30)+135
        imgDOM.setAttribute("style", `--rotation:${randRot}deg;`)

        parentDOM.appendChild(divDOM)
    }
}


generateVertical("green", partGreenDOM, IMAGES_GREEN)
generateVertical("white", partWhiteDOM, IMAGES_WHITE)
generateVertical("black", partBlackDOM, IMAGES_BLACK)
generateVertical("red", partRedDOM, IMAGES_RED)


function rand(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}
