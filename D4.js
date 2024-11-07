/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
function area(l1, l2) {
    let area = l1 * l2;
    return area;
} 
    let l1 = 8;
    let l2 = 4;
    let areaRettangolo = area(l1, l2);
    console.log("L'area del rettangolo è: " + areaRettangolo);

  


/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(n1,n2){
    if(n1===n2){
        return (n1+n2)*3;
    }else{
        return n1+n2;
    }
}
    let n1=5;
    let n2=10;
    let mySum=crazySum(n1,n2);
    console.log(mySum);

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(n3,n4){
    if(n3>n4){
        return absDiff*3;
    
    }else{
        return absDiff;
    }    
}
    let n3=18;
    let n4=19;
    let absDiff= Math.abs(n3-n4);
    console.log(absDiff);

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n5){
    if(n5 >= 20 && n5 <= 100|| n5 === 400) {
        return true;
    }
}    
    let n5=99;
    let numberBound=boundary(n5);
    console.log(numberBound);

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(string){
    if (string.startsWith("epicode")) {
        return string;
    } else {
        return "epicode" + string;
    }
}
    let string="..Sono Ettore e frequento epicode";
    let corso=epify(string);
    console.log(corso);

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

 function check3and7(n6){
    if(n6%3===0 || n6%7===0){
        return true;
    }else{
    return false;
 }
}
    let n6=59;
    let check=check3and7(n6);
    console.log(check);

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(string2){
    string2=string2.split('');
    string2=string2.reverse();
    string2=string2.join('');
    return string2;
}
    let string2="epicode";
    let reversing=reverseString(string2);
    console.log(reversing);

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function giveMeRandom() {
    for (let i = 0; i < n; i++) {
        randomNumbers.push(Math.floor(Math.random() * 11)); 
    }
    return randomNumbers;
};
    let randomNumbers = [];
    console.log(randomNumbers);
