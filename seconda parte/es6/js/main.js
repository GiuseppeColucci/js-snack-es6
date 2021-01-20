/**
 * jsnack 3
Si scriva una funzione che accetti tre argomenti, un array e due numeri (A più piccolo di B).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri

 */

function listArray(arg,min,max){
  const listBox=array.filter((element,index)=>{
    return index >=min &&index<=max
  });
  // for(var t=0; t<arg.length; t++){
  //     if(t>=min && t<=max){
  //         listBox.push(arg[t])
  //     }
  // }
  return listBox
}

const array=[1,2,3,4,5,6,7,8,9]

const boxy=listArray(array,2,5)
console.log(boxy)


