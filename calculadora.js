let x  = parseInt(prompt("Ingrese el numero 1"))
let y  = parseInt(prompt("Ingrese el numero 2"))

const add = (x,y) => x+y
const substract = (x, y) =>x-y
const multiply = (x,y) => y === 1? x : add(x,multiply(x, substract(Math.abs(y), 1)))
const divide = (x,y,cociente) => x < 0? substract(Math.abs(cociente), 1)
                                        : divide(substract(Math.abs(x),Math.abs(y)), y, add(cociente,1))

alert("La suma es: " + add(x,y) + "\n" + 
    "la resta es: " + substract(x,y) + "\n" +
    "la multiplicación es: "+ multiply(x,y) + "\n" +
    "la división es: "+ divide(x,y,0))
