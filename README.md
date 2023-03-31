SIMON SAYS
========

Visualizzare in pagina 5 numeri casuali (tutti differenti). Da lì parte un timer di 5 secondi. <br>
Dopo 5 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente(tramite il prompt() o traminte input). <br>
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

## STEPS

- Creo un array per inserire i numeri random e uno per inserire i numeri dell'utente;
- Creo delle variabili per collegare i numeri che stamperò in pagina e il bottone che userò per collegare l'inizio del timer di 5 secondi;
- Creo una funzione per creare i numeri random poi creo un ciclo for per farli generare fino a 5;
- Creo una condizione in cui se i numeri random non sono presenti nell'array allora li pusho;
- Stampo i numeri in pagina;
- Creo una funzione in cui dopo 5 secondi dal click, i numeri vengono nasconti e al loro posto appare il testo e i prompt per inserire i  numeri appena visti;
- Creo un'altra time function dove inserisco un ciclo for per generare i prompt dei 5 numeri che l'utente dovrà inserire;
- Creo i Prompt; 
- Creo una condizione in cui se i numeri nei prompt inseriti dall'utente non sono presenti tra i numeri inseriti nell 'array  dall'utente, vengono pushati nell'array.

### TO DO
- Faccio un confronto tra la lunghezza dell' array dei numeri inseriti dall'utente e dell'array dei numeri random;
- Faccio un confronto tra gli elementi dell'array ei numeri inseriti dall'utente e gli elementi dell'array dei numeri random;
- Stampo in pagina quali e quanti numeri sono stati indovinati