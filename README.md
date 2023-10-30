####ESERCIZIO : Campo minato
Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
****
Generare una griglia di gioco quadrata in cui ogni cella contiene un numero compreso tra 1 e 100.
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
I numeri nella lista delle bombe non possono essere duplicati.
[23, 65, 1, 4,78,15,....];
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
**BONUS:**
1 - L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
**2- quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle
****3- quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste

**Soluzione**
1. generare 16 bombe: creare un' array composto da 16 numeri random non ripetuti compresi fra 1 e 100 / 81/ 49;

2. definire il numero di tentativi consentiti sottraendo dal numero delle celle in griglia, il numero 16 che corrisponde alle bombe (100/81/49 - 16);

**Logica del gioco**
1. al click della cella :
- SE il numero è compreso nell'arrey delle bombe:
la cella diventa rossa
fine gioco (l'utente ha perso)

- ALTRIMENTI 
la cella diventa azzurra
SE il numero non è stato già cliccato in precedenza:
- aggiungere il numero nell'array delle bombe 
SE la lunghezza dell' array delle bombe è uguale al numero massimo di tentativi:
fine gioco (l'utente ha vinto)

