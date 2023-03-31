//creo un array vuoto
let numberArray = []; 
//collego l'h1 a una costante
const printNumbers = document.querySelector('h1')
//creo un bottone per il cronometro
const btn = document.querySelector('.start')
//creo un messaggio finale
const msg = document.querySelector('h2')
//

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

//stampiamo i numeri in pagina
printNumbers.innerHTML = (numberArray)

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
  let numberUser = prompt('inserisci i numeri');
  console.log(numberUser)

}
}, 9000);


setTimeout(() => {
let numberUser;

if (numberArray === numberUser) {
  console.log('hai vinto')
}else{
  console.log('hai perso')
}
}, 13000);



})

