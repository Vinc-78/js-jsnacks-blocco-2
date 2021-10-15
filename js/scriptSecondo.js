//secondo esercizio

//definisco gli arrey
const array1 = [15, 2, 7];
const array2 = [5];

let arrayPiccolo=[];

let arrayGrande=[];

//controllo lunghezze array :

let lunghezzaArray1=array1.length;
let lunghezzaArray2 =array2.length;

console.log(lunghezzaArray1);
console.log(lunghezzaArray2);

if ( lunghezzaArray1===lunghezzaArray2) { console.log("sono uguali")}

else  if (lunghezzaArray1 < lunghezzaArray2){ 
        arrayPiccolo = array1;
        arrayGrande  = array2;

        console.log("array1 < array2 ");
       
}

else { arrayPiccolo = array2;
       arrayGrande  = array1;
    
       console.log("array1 < array2 ");
    }


//calcolo la differenza

let differenza;

differenza =arrayGrande.length-arrayPiccolo.length;

console.log("la differenza è ", differenza);


for ( let i=0; i<differenza; i++) {

    arrayPiccolo.push( Math.ceil(Math.random()*100 ));

    console.log(arrayPiccolo);

     


}


console.log(array1);
console.log(array2);

