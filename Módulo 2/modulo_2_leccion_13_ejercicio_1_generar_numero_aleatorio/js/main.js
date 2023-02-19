'use strict';

function getNumber(){
    fetch('https://api.rand.fun/number/integer?min=0&max=10000')
        .then((response) => response.json())
        .then((data) => (document.body.innerHTML = data.result));
}

document.querySelector('.js-number').addEventListener('click', getNumber);