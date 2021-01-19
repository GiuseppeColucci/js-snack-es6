/**
 * Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal (backtick `)
 */
let bici=[
    {'nome':'fulmine','peso':35},
    {'nome':'razzo','peso':25},
    {'nome':'batman','peso':15},
];
let biciPeso=[0];
for(let x=1; x<bici.length; x++){
    if(bici[x].peso<biciPeso.peso){
        biciPeso=bici[x];
    }
}
console.log(biciPeso);
/**
 * Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
 */
function Nrandom(max, min){
    return Math.floor(Math.random() * (max - min)+1) - min;
}
 const sq1=[
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
        falliSubiti:0,
    },
    

 ]
 for(let y=0; y<sq1.length; y++){
     let teams=sq1[y];
     teams. puntiFatti=Nrandom(1, 10);
     teams.falliSubiti=Nrandom(1, 10);
     console.log(teams)
 }
//ultima parte
const newsq2=[];
for(let t=0; t<sq1.length; t++){
    let thisSq=sq1[t];
    const{nome, falliSubiti}=thisSq;
    
    newsq2.push({nome,falliSubiti});
}
console.log(newsq2)