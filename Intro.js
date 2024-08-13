// const readlineSync = require('readline-sync');

let total = 0,
    count = 1;

while (count <= 10) {
    total += count;
    count += 1;
}
console.log(total);
// -> 55

let result = 0;

result = 100 + 4 * 11;
console.log(result);
// -> 144

let text = 'hola mundo'
console.log(text);
// -> hola mundo

console.log("Esta es la primera línea\nY esta es la segunda")
// -> Esta es la primera línea
// -> Y esta es la segunda

console.log("A newline character is written like \"\\n\".")
// -> A newline character is written like "\n".

console.log("con" + "cat" + "e" + "nate")
// -> concatenate

console.log(`la mitad de 100 es ${100 / 2}`)
// -> la mitad de 100 es 50

console.log(typeof 4.5)
// -> number

console.log(typeof 'x')
// -> string

console.log(-(10 - 2))
// -> -8

console.log(3 > 2)
// -> true

console.log(3 < 2)
// -> false

console.log("Aardvark" < "Zoroaster")
// -> true

console.log("Granate" != "Rubí")
// -> true

console.log("Perla" == "Amatista")
// -> false

console.log(NaN == NaN)
// -> false

console.log(true && false)
// -> false

console.log(true && true)
// -> true

console.log(false || true)
// → true
console.log(false || false)
// → false

console.log(true ? 1 : 2);
// → 1

console.log(false ? 1 : 2);
// → 2

console.log(8 * null)
// → 0
console.log("5" - 1)
// → 4
console.log("5" + 1)
// → 51
console.log("five" * 2)
// → NaN
console.log(false == 0)
// → true

console.log(null == undefined);
// → true
console.log(null == 0);
// → false

console.log(0 || 100);
// → 100
console.log(0 ?? 100);
// → 0
console.log(null ?? 100);
// → 100

let mood = "light";
console.log(mood);
// → light
mood = "dark";
console.log(mood);
// → dark

let luigisDebt = 140;
luigisDebt = luigisDebt - 35;
console.log(luigisDebt);
// → 105

let one = 1, two = 2;
console.log(one + two);
// → 3

console.log(Math.max(2, 4));
// → 4

// let elNumero = Number(readlineSync.question("Elige un número: "));
// console.log("Tu número es la raíz cuadrada de " +
//     elNumero * elNumero);
// → 25

// let elNumero1 = Number(readlineSync.question("Elige un número: "));
// if (!Number.isNaN(elNumero1)) {
//     console.log("Tu número es la raíz cuadrada de " +
//         elNumero1 * elNumero1);
// }

if (1 + 1 == 2) console.log("Es verdad");
// → Es verdad

// let elNumero2 = Number(readlineSync.question("Elige un número: "));
// if (!Number.isNaN(elNumero2)) {
//     console.log("Tu número es la raíz cuadrada de " +
//         elNumero2 * elNumero2);
// } else {
//     console.log("Oye. ¿Por qué no me diste un número?");
// }

let numero = 0;
while (numero <= 12) {
    console.log(numero);
    numero = numero + 2;
}
// → 0
// → 2
//   … etcétera

// let tuNombre;
// do {
//     tuNombre = readlineSync.question("¿Quién eres? ");
// } while (!tuNombre);
// console.log("Hola " + tuNombre);

for (let numero = 0; numero <= 12; numero = numero + 2) {
    console.log(numero);
}




