let milk = document.getElementById("milk")
let coke = document.getElementById("coke")
let beer = document.getElementById("beer")


function (){
let n = prompt("Hi, What's your name?")
let drink = prompt(`${n} ,What would you like to drink? Milk, Coke or beer?`)
if (drink == 'Milk'){
   alert("Here is your glass of milk!")
}
else if (drink=="Coke") {
    let edad = prompt ("How old are you?")
    if (isNaN(edad)){
        alert("Is not a number")
    }
if (edad >= 14){
        alert("Here is your glass of Coke")
    }
    else{
        alert("I'm sorry, I can only serve you milk")
    }
}
else if (drink="Beer"){
    let edad = prompt ("How old are you?")
    if (isNaN(edad)){
        alert("Is not a number")}
if (edad >= 18){
        alert("Here is your glass of Beer")
    }
    else{
        alert("I'm sorry, I can only serve you milk or Coke")
    }
}
}