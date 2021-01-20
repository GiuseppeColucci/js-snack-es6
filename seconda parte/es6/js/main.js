/**
 * jsnack 3
Si scriva una funzione che accetti tre argomenti, un array e due numeri (A più piccolo di B).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri

 */

function newArray(index,min,max){
  let box=[];
  box.forEach((element,index,array)=>{
      if(element>=min && element<=max){
          box.push(element)
      }
  })
  return box
};

newArray(['paolo','calcio','somma','papera','mao']);
newArray(1,3)


