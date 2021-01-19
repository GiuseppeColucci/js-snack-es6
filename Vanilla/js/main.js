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