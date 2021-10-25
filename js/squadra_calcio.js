"use strict"
/* 
-creare array di oggetti (squadre di calcio)
-assegnare numeri random per punti e falli subiti
*/

const squadre = [
    {
        nome : "squadra 1",
        puntiFatti : 0,
        falliSubiti : 0,
    },
    {
        nome : "squadra 2",
        puntiFatti : 0,
        falliSubiti : 0,
    },
    {
        nome : "squadra 3",
        puntiFatti : 0,
        falliSubiti : 0,
    }
]

/**
 * funzione che genera un certo numero di numeri random sulla base 
 * del numero massimo e minimo che gli viene dato, questi due valori definiscono
 * il range dei numeri random che vengono generati 
 * @param {number} min - rappresenta il numero minimo che il random può raggiungere
 * @param {number} max - rappresenta il numero massimo che il random può raggiungere 
 * @returns {number} numeriRandom
 */

 function getRandomNumber(max = 100, min = 0 ){
    const numeroRandom = Math.floor(Math.random() * (max - min + 1) + min);

    return numeroRandom;
}   
//questa funzione serve per assegnare i punti e i falli subiti per ogni squadra in maniera randomica
function randomPointFauls(){
    console.log("squadre prima", squadre);
    for (let i = 0; i < squadre.length; i++) {
        squadre[i].puntiFatti = getRandomNumber();
        
        squadre[i].falliSubiti = getRandomNumber();
    }
    console.log("squadre dopo", squadre);
}               
randomPointFauls()

