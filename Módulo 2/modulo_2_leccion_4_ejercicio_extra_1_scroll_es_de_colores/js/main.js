'use strict';

const container=document.querySelector(".container");

container.classList.add('big'); //por defecto

window.addEventListener('scroll', (event)=>{
    if(window.scrollY>250){
        container.classList.add('big');
    }else{
        container.classList.remove('big');
        container.classList.add('small');
    }
});

