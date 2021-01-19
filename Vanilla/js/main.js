/**
 * jsnack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore
 */

 var bici=[
     {'nome':'fulmine','peso':35},
     {'nome':'razzo','peso':25},
     {'nome':'batman','peso':15},
 ];
var biciPeso=bici[0];

for(var x=1; x<bici.length; x++){
    if(bici[x].peso<biciPeso.peso){
        biciPeso=bici[x]
    }
}
console.log(biciPeso)
/**
 * /**
 * Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
 */
function Nrandom(max, min){
    return Math.floor(Math.random() * (max - min)+1) - min;
}
 var sq1=[
     {
        nome:'Roma',
        puntiFatti:0,
        falliSubiti:0
    },
    {
        nome:'inter',
        puntiFatti:0,
        falliSubiti:0,
    },{
        nome:'milan',
        puntiFatti:0,
        falliSubiti:0
    },
    

 ];

 for(var y=0; y<sq1.length; y++){
    var teams=sq1[y];
    teams. puntiFatti=Nrandom(1, 10);
    teams.falliSubiti=Nrandom(1, 10);
    console.log(teams)
}
 

