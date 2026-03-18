const array =['manzana', 'banana', 'cereza'];

console.log('Array original:', array);

const primerArray = array[0];
console.log('Primer elemento del array:', primerArray);

const caracterPrimerElemento = primerArray.charAt(0);
console.log('Primer caracter del primer elemento:', caracterPrimerElemento);

const ejemplo = array[0][0];
console.log(ejemplo);

const ejemplo2 = array[2].length;
console.log(ejemplo2);

let senTence = "JavaScript is awesome!";
let position = senTence.indexOf("awesome!");
console.log(position); //14

const production1 = [
    { toy: 'car', quantity: 3 },
    { toy: 'doll', quantity: 1 },
    { toy: 'ball', quantity: 2 }
]

console.log(production1[2].toy)
