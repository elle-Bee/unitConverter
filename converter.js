let buttonEl = document.getElementById("button-el")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

let defaultNum = 10

let length= []
let volume = []
let mass = []

buttonEl.addEventListener("click", function(){
    let newValue = document.getElementById("input-el").value
    defaultNum = newValue
    convertLength()
    convertVolume()
    convertMass()
    display()
    console.log(defaultNum)
    console.log(length)
})

function convertLength(){
    length[0] = ((3.28084*defaultNum).toFixed(3)) //to meter
    length[1] = ((0.3048*defaultNum).toFixed(3))
}
 
function convertVolume(){
    volume[0] = ((0.264172*defaultNum).toFixed(3)) //togallon
    volume[1] = ((3.78541*defaultNum).toFixed(3))
}

function convertMass(){
    mass[0] = ((2.20462*defaultNum).toFixed(3)) // to pound
    mass[1] = ((0.453592*defaultNum).toFixed(3))
}

function display(){
    lengthEl.textContent = `${defaultNum} metres = ${length[1]} feet | ${defaultNum} feet = ${length[0]} metres`
    volumeEl.textContent = `${defaultNum} litres = ${volume[0]} gallons | ${defaultNum} gallons = ${volume[1]} litres`
    massEl.textContent = `${defaultNum} kilos = ${mass[1]} pounds | ${defaultNum} pounds = ${mass[0]} kilos`
}           