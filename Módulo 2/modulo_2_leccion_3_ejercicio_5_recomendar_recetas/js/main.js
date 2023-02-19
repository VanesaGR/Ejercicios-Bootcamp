'use strict';

let ingredient = 'aceitunas';

switch (ingredient) {
    case 'pollo':
        recipe= "filete con patatas";
        console.log(`Tu ingrediente es ${ingredient}, puedes hacer ${recipe}`);
        break;
    case 'merluza':
        recipe="merluza en salsa verde";
        console.log(`Tu ingrediente es ${ingredient}, puedes hacer ${recipe}`);
        break;
    case 'espinacas':
        recipe="espinacas rehogadas";
        console.log(`Tu ingrediente es ${ingredient}, puedes hacer ${recipe}`);
        break;
    default:
        console.log(`No hay nada en la nevera`);
}