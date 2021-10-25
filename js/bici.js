"use strict"
/* 
stampare a schermo la bici con il peso minore con il template literal

    -innerHTML sul main container
 */

//array di oggetti contenenti bici
const bici =[
    {
        nome : "Bici 01",
        peso : 20,
    },
    {
        nome : "Bici 02",
        peso : 10,
    },
    {
        nome : "Bici 03",
        peso : 50,
    },
    {
        nome : "Bici 04",
        peso : 30,
    }
]

//recupero il container per stampare il messagio
const mainContainer = document.getElementById("container");

/**
 * 
 * @param {} array -qui va inserito l'array da analizzare
 */
function stampLightestBike (array){

    //creo l'array con i pesi delle bici
    const arrayPeso = [];


    for(let i = 0; i < array.length; i++){
        //recupero il peso di ogni oggetto all'interno dell'array
        const {peso} = array[i];
        //inserisco il peso nell'array dei pesi delle bici
        arrayPeso.push(peso)
    }

    //trovo il peso minore all'interno dell'array dei pesi
    const pesoMin = Math.min(...arrayPeso);
    console.log("il peso minore è ", pesoMin);
    
    //scorro l'array principale
    for(let i = 0; i < array.length; i++){
        //comparo il peso di ogni oggetto con il peso minore trovato prima
        if(array[i].peso === pesoMin){
            //stampo a schermo il messaggio contenente il nome della bici con il peso minore e il peso
            mainContainer.innerHTML += `<p>la bici con il peso minore è la bici ${array[i].nome} e pesa ${pesoMin}kg</p>`
        }
    }
}
//invoco la funzione
stampLightestBike(bici)