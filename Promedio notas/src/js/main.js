console.log("Bienvenido a la calculadora del promedio")

let notas = []
let promedio
let estado

while (notas.length < 5)  {
    let nota = parseFloat(prompt("Ingresa tu nota"))
    if (nota < 0 || nota > 5){
        alert("Debes ingresar un valor numérico entre 0 y 5")
        nota = parseFloat(prompt("Ingresa tu nota"))
    } 
        notas.push(nota)
}

promedio = notas.reduce((acumulador, valorActual) => acumulador + valorActual) / notas.length

console.group("Tus notas son:")
console.table(notas)
console.groupEnd()

console.info("Tu promedio es:", promedio)

if (promedio < 3.0) {
    estado = false
    console.error("No aprobaste")
} else {
    estado = true
    console.info("Aprobaste")
} 

