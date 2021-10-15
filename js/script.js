// chiedi un numero 

let numero = prompt ("Inserisci un numero pari :")

if ( numero % 2 === 0){ console.log("hai scritto", numero)
                        alert( `Hai scritto un numero pari,${numero}`)
                      }



else { console.log("Il tuo numero non è pari, scrivo il successivo")
       console.log("Il primo numero pari dopo il tuo è", numero++) 
       alert( `Il tuo numero non è pari, scrivo il successivo ,${numero}, Il primo numero pari dopo il tuo è  ${numero++}`)
                     }