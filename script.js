// let milk = document.getElementById("milk")
// let coke = document.getElementById("coke")
// let beer = document.getElementById("beer")
// let n = prompt("Hi, What's your name?")
// let drink = prompt(`${n} ,What would you like to drink? Milk, Coke or beer?`)



// function (inicio){
//     if (drink == 'Milk'){
//    alert("Here is your glass of milk!")
// }
// else if (drink=="Coke") {
//     let edad = prompt ("How old are you?")
//     if (isNaN(edad)){
//         alert("Is not a number")
//     }
// if (edad >= 14){
//         alert("Here is your glass of Coke")
//     }
//     else{
//         alert("I'm sorry, I can only serve you milk")
//     }
// }
// else if (drink="Beer"){
//     let edad = prompt ("How old are you?")
//     if (isNaN(edad)){
//         alert("Is not a number")}
// if (edad >= 18){
//         alert("Here is your glass of Beer")
//     }
//     else{
//         alert("I'm sorry, I can only serve you milk or Coke")
//     }
// }
// }

const bebida = prompt("Qué quieres beber: leche,coke o cerveza");


bebida=["leche","coke","cerveza"]
let mensaje="";
let edad=0;

if(bebida == [1] || bebida == [2]){
   edad = +prompt("Cuántos años tienes?");

}

if(bebida == [0] || 
  (bebida == [1] && edad >= 14) ||
  (bebida == [2] && edad >=18)){
  mensaje = "Aquí tiene su bebida";
  } else if (bebida == [1]){
  mensaje = "Lo siento solo puedo servirle leche";
  } else if(bebida == [2] ){
  mensaje = "Lo siento solo puedo servirle leche o coke";
  } else{
  mensaje = "No sé de qué me hablas";
  }


/*if(bebida == "coke" || bebida == "cerveza"){
  const edad = prompt("Cuántos años tienes?");
  if(edad <14){
    alert("Lo siento solo puedo servirle leche");
  } else if (edad < 18 && bebida == "cerveza"){
    alert("Lo siento solo puedo servirle leche o coke");
  } else{
    alert("Aquí tiene su bebida");    
  }
}
if(bebida =="leche")
   alert("Aquí tiene su bebida");    */
/*if(bebida == "leche"){
alert("Aquí tiene su bebida");
  } else if(bebida =="coke"){
  const edad = prompt("Cuántos años tienes?");
  if(edad <= 14){
    alert("Lo siento solo puedo servirle leche");
  } else{
alert("Aquí tiene su bebida");    
  }
} else if(bebida =="cerveza"){
  const edad = prompt("Cuántos años tienes?");
  if(edad < 18){
    alert("Lo siento solo puedo servirle leche o coke");
  } else {
alert("Aquí tiene su bebida");    
  }
} else{
  alert("no sé de qué me hablas")
}
*/

//console.log(alerta);
   if(isNaN(edad) || edad > 120)
     mensaje = "debes introducir un número válido";

alert(mensaje);