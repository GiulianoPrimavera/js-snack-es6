"use strict"
/* 
-creare array di oggetti (squadre di calcio)
-assegnare numeri random per punti e falli subiti
-creare array contentente solo nomi e falli subiti
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
    for (let i = 0; i < squadre.length; i++) {
        squadre[i].puntiFatti = getRandomNumber(20, 0);
        squadre[i].falliSubiti = getRandomNumber(20, 0);
    }
    console.log("squadre dopo", squadre);
}               
randomPointFauls()

//destrutturo l'array delle squadre e creo un array contenente un oggetto per squadra contenente solo il nome e i falli subiti
function desctructuringAndStamp(){
    const arrayNomiFalli = [];
    for (let i = 0; i < squadre.length; i++){
        //recupero solo i nomi e i falli subiti di ogni oggetto
        const {nome, falliSubiti} = squadre[i];
        //popolo l'array
        arrayNomiFalli.push({nome, falliSubiti});
    }
    console.log(arrayNomiFalli);
}
desctructuringAndStamp()


