//creo un array vuoto
let numberArray = []; 
//collego l'h1 a una costante
const printNumbers = document.querySelector('h1')
//creo un bottone per il cronometro
const btn = document.querySelector('.start')

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
}, 5000);


//timer 6 secondi per far apparire i prompt
setTimeout(() => {
  for (let i = 1; i <= 5; i++){
  const numberUser = prompt('inserisci i numeri che hai appena visto');
  console.log(numberUser)
}
}, 6000);
})

