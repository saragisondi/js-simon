/****************ARRAY*******************/
//creo un array vuoto
let numberArray = []; 
let numberI = 0;


//creo un array per inserire i numeri dell'utente
let userNumberArr = []
let numberU= 0;


/****************VARIABILI*******************/
//collego l'h1 a una costante
const printNumbers = document.querySelector('h1')
//creo un bottone per il cronometro
const btn = document.querySelector('.start')
//creo un messaggio finale
const msg = document.querySelector('h2')


/****************FUNCTION RANDOM*******************/
//faccio un arrow function per generare i 5 numeri random
const random = (min,max) => Math.floor(Math.random()* (max - min + 1) + min);

//faccio un ciclo per far generare fino a 5 numeri
for (let i = 1; i <= 5; i++) {
const numbers = random(1,100);

//pushare i numeri nell array
if(!numberArray.includes(numbers)){
  numberArray.push(numbers);
  
}}
console.log(numberArray)

//stampo i numeri in pagina
printNumbers.innerHTML = (numberArray)


/****************TIME FUNCTION*******************/
//timer 5 secondi per far sparire i numeri
btn.addEventListener('click',function(){
  setTimeout(() => {
  printNumbers.classList.add("hide")
  msg.innerHTML = `
  hai 5 secondi di tempo per <br> inserire i numeri che hai appena visto`
}, 5000);


//timer 6 secondi per far apparire i prompt
setTimeout(() => {
  for (let i = 1; i <= 5; i++){
  
  let numberUser = parseInt(prompt('inserisci i numeri'));

  const userNum = numberUser

if(!userNumberArr.includes(userNum)){
  userNumberArr.push(userNum);
}
msg.innerHTML = `  Questi sono i numeri che hai visto: ${numberArray} <br> Questi sono i numeri che hai inserito: ${userNumberArr}`

}

console.log(userNumberArr)


FIXME:
for (let i = 0; i < numberArray.length; i++) {
  let numberI = numberArray[i];
  console.log(numberI)
  
}

for (let i = 0; i < userNumberArr.length; i++) {
  let numberU = userNumberArr[i];
  console.log(numberU)
  
}


}, 9000);


})



// TODO:
// - Faccio un confronto tra gli elementi dell'array e i numeri inseriti dall'utente e gli elementi dell'array dei numeri random;
// - Stampo in pagina quali e quanti numeri sono stati indovinati
