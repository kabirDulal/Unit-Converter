/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let unit = 0;
const inputEl = document.getElementById("input-el");
const btnEl = document.getElementById("btn-el");
const lengthEL = document.getElementById("length-el");
const volumeEL = document.getElementById("volume-el");
const massEL = document.getElementById("mass-el");
btnEl.addEventListener("click",function (){
    unit = inputEl.value;
    if(!isNaN (unit)){
        let feetToMeter = (1/3.281) * unit;
        feetToMeter = feetToMeter.toFixed(2);
        let meterToFeet = 3.281 * unit;
        meterToFeet = meterToFeet.toFixed(2);
        let literToGallon = 0.264 * unit;
        literToGallon = literToGallon.toFixed(2);
        let gallonToLiter = (1/0.264) * unit;
        gallonToLiter = gallonToLiter.toFixed(2);
        let kilogramToPound = 2.204 * unit;
        kilogramToPound = kilogramToPound.toFixed(2);
        let poundToKilogram = (1/2.204)* unit; 
        poundToKilogram = poundToKilogram.toFixed(2);
        lengthEL.innerHTML = `${unit} meters = ${meterToFeet} feet | 
                                ${unit} feet = ${feetToMeter} meters`
                                
        volumeEL.innerHTML = `${unit} liters = ${literToGallon} gallons | 
                                ${unit} gallons = ${gallonToLiter} liters`
       massEL.innerHTML = `${unit} kilograms = ${kilogramToPound} pounds | 
                                ${unit} pounds = ${poundToKilogram} kilograms`
    }
    else{
        alert("please enter numbers only!")
    }
    
    
})
function nextValue() {
    inputEl.value = " ";
    lengthEL.innerHTML = " ";
    massEL.innerHTML = " ";
    volumeEL.innerHTML

}