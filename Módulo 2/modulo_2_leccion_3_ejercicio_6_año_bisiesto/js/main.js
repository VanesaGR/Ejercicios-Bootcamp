'use strict';

let currentYear = 2020;
let yearCalc = currentYear % 4;
let hundredException = currentYear % 100;
let fourHundredException = currentYear % 400;


switch (yearCalc) {
  case 0:
    console.log('El próximo año bisiesto será' + ' ' + (currentYear + 4));
    break;
  case 1:
    console.log('El próximo año bisiesto será' + ' ' + (currentYear + 3));
    break;
  case 2:
    console.log('El próximo año bisiesto será' + ' ' + (currentYear + 2));
    break;
  case 3:
    console.log('El próximo año bisiesto será' + ' ' + (currentYear + 1));
    break;
  case 4:
    console.log('Este año es bisiesto');
    break;
}

// const year = new Date().getFullYear(); // Obtenemos el año actual
// let nextLeapYear = year; // Inicializamos la variable con el año actual

// while ((nextLeapYear % 4 !== 0) || (nextLeapYear % 100 === 0 && nextLeapYear % 400 !== 0)) {
//   nextLeapYear++; // Incrementamos el año hasta encontrar el siguiente año bisiesto
// }

// console.log(`El siguiente año bisiesto será ${nextLeapYear}`);
