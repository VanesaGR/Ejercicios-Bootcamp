// Crea una función get100Numbers que devuelve un array con los números del 1 al 100. Como no nos apetece tener que escribir 100 números a mano, usaremos un bucle y el método push para ir guardándolos. Para comprobar que los tenemos todos, vamos a ejecutar la función y loguearlos (con console.log) uno a uno en la consola en orden.
// Crea una nueva función getReversed100Numbers que llama a la función del ejercicio anterior para obtener 100 números y los cambia de orden. Para comprobar que los tenemos todos, vamos a ejecutar la función y a loguearlos (con console.log) uno a uno en la consola en orden.

'use strict';

const numbers = [];
let number = 0;

function get100Numbers() {
  for (let i = 0; i < 100; i++) {
    number++;
    numbers.push(number);
  }
  return numbers;
}

get100Numbers();

console.log(arr.length);
console.log(arr[0]);
console.log(arr[10]);

function getReversed100Numbers() {
    arr.reverse();
    for(let i=0; i<arr.length; i++){
        console.log(`Número ${arr[i]} de 100`);
    }
}

console.log('reversed');

getReversed100Numbers();

console.log(arr.length);
console.log(arr[0]);
console.log(arr[10]);