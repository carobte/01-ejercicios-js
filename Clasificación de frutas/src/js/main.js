let frutas = [{nombre: "banano", citrico: false}, 
{nombre: "limon", citrico: true}, 
{nombre: "manzana", citrico: false}, 
{nombre: "pera", citrico: false}, 
{nombre: "mandarina", citrico: true},
{nombre: "naranja", citrico: true},
{nombre: "uva", citrico: false},
{nombre: "kiwi", citrico: true},
{nombre: "mango", citrico: true},
]

let citricos = []
let noCitricos = []

for (let i = 0; i < frutas.length; i++) {
    const fruta = frutas[i];
    if (fruta.citrico == true) {
        citricos.push(fruta.nombre)
    } else {
        noCitricos.push(fruta.nombre)  
    }  
}

console.group("Citricos")
console.table(citricos)
console.groupEnd()

console.group("No citricos")
console.table(noCitricos)
console.groupEnd()

/* frutas.forEach(fruta => {
    if (fruta.citrico == true) {
        citricos.push(fruta.nombre)
    } else {
        noCitricos.push(fruta.nombre)  
    } 
}); 


console.group("Citricos")
console.table(citricos)
console.groupEnd()

console.group("No citricos")
console.table(noCitricos)
console.groupEnd() */