/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let inputNum = ""

let inputEl = document.getElementById("input-el")
let btnConvert =document.getElementById("btn-convert")
let conversionLength = document.getElementById("conversion-length")
let conversionVolume = document.getElementById("conversion-volume")
let conversionMass = document.getElementById("conversion-mass")


let inputFromLocalStorage = localStorage.getItem("inputNum")


if(inputFromLocalStorage){
    inputNum = inputFromLocalStorage
    // render(inputNum)
    
}

function render (input){
    let inputHtml_length = ""
    let inputHtml_volume = ""
    let inputHtml_mass = ""
    
            let toMeters = ""
            let toFeet = ""
            let toLiters = ""
            let toGallon = ""
            let toKilograms = ""
            let toPounds = ""
            
                toFeet = input * 3.281
                toMeters = input /3.281
                toGallon = input * 0.264
                toLiters = input / 0.264
                toPounds = input * 2.204
                toKilograms = input / 2.204
            
        inputHtml_length = `${input} meters = ${toFeet.toFixed(3)} feet | ${input} feet = ${toMeters.toFixed(3)} meters`

            conversionLength.innerHTML = inputHtml_length

        inputHtml_volume = `${input} liters = ${toGallon.toFixed(3)} gallon | ${input} gallons= ${toLiters.toFixed(3)} liters`

            conversionVolume.innerHTML = inputHtml_volume
            
        inputHtml_mass = `${input} kilos = ${toPounds.toFixed(3)} pounds | ${input} pounds = ${toKilograms.toFixed(3)} kilos`

            conversionMass.innerHTML = inputHtml_mass
            
}



btnConvert.addEventListener("click", function(){
    if(inputEl.value){
    
        inputNum = inputEl.value
        inputEl.value = ""
        // console.log(inputNum)
        localStorage.setItem("inputNum", inputNum)
    
        render(inputNum)
        
    }
    
})

