'use strict';

//array

const array=[5,25,458,23,120];

let acc2=0; //acumulador

// for (let i = 0; i <arr.length; i++) {
//     acc2 +=  arr[i]; 
//   }
// const result= acc2/arr.length;
// console.log(result);


arr [5]= 8923; //ponerle un número más
arr [6] = 10;

// for (let i = 0; i <arr.length; i++) {
//     acc2 +=  arr[i]; //acumulador
//   }
// const result2= acc2/arr.length;
// console.log(result2);

//creamos una función que haga esto:

function average (numbers){
    for (let i = 0; i <[numbers.length]; i++) {
        acc2 +=  numbers[i];
      }
      const result= acc2/numbers.length; 
      return result;
};
const arrAverage =average(arr); //guardamos el return de la función
console.log(arrAverage);