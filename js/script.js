//creo un array vuoto
const numberArray = [] ; 

//faccio un ciclo per far generare fino a 5 numeri
for (let i = 1; i <= 5; i++) {

//faccio un arrow function per generare i 5 numeri random
const random = (min,max) => Math.floor(Math.random()* (max - min + 1) + min);

console.log(numberArray)


//pushare i numeri nell array
if(!numberArray.includes(random)){
  numberArray.push(random);
  
}

}

