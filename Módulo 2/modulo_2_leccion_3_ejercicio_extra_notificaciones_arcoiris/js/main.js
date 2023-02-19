'use strict';

let divElement = document.querySelector('#main_div');
let mainDivClass = divElement.className; //coge el class del elemento anterior

let elementTitle = document.querySelector('.title');
let elementParagraph=document.querySelector('.text');

// if(mainDivClass=='success'){
//     elementTitle.innerHTML='Correcto';
//     elementParagraph.innerHTML='Los datos son correctos';
// }else if(mainDivClass=='error'){
//     elementTitle.innerHTML='Error';
//     elementParagraph.innerHTML='Ha surgido un error';
// }else if(mainDivClass=='warning'){
//     elementTitle.innerHTML='Aviso';
//     elementParagraph.innerHTML='Tenga cuidado';
// }else{}


switch(mainDivClass){
    case "success":
        elementTitle.innerHTML='Correcto';
        elementParagraph.innerHTML='Los datos son correctos';
        break;
    case "error":
        elementTitle.innerHTML='Error';
        elementParagraph.innerHTML='Ha surgido un error';
        break;
    case "warning":
        elementTitle.innerHTML='Aviso';
        elementParagraph.innerHTML='Tenga cuidado';
        break;
    default:
        break;
}