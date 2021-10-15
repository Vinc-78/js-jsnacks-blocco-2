//secondo esercizio

//definisco gli arrey
const array1 = [15, 2, 7];
const array2 = [5];


console.log(array1);
console.log(array2);

//verifico la lunghezza del secondo rispetto al primo

while( array2.length<=array1.length){ 

    //aggiungo un numero random
    array2.push(Math.ceil(Math.random()*100))

    array2.length++;
}


console.log(array1);
console.log(array2);