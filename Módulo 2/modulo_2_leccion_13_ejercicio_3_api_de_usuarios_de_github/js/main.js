'use strict';

//ELEMENTOS DEL HTML

//form

const inputUser=document.querySelector('.js-input-user');
const btnSearch=document.querySelector('.js-btn-search');

//results

const resultsSection=document.querySelector('.js-results');
const nameElement= document.querySelector('.js-name');
const photoElement= document.querySelector('.js-name');
const repoElement= document.querySelector('.js-repo');

//FUNCIONES
//Funcion que construye la URL de la API uniéndole el nombre de usuario que se haya rellenado en el input

function getApiUrl(){
    const apiUrl =`https://api.github.com/users/${inputUser.value}`;
    return apiUrl;
}

//printUserData es una función que recibe el resultado del fetch a la api de github y lo muestra por pantalla

function printUserData(data){//preguntamos si la api nos devuelve un usuario relleno porque existe o vacío porque no lo está
    if(data.login){  //mostramos la sección de resultados
        resultsSection.classList.remove('hidden');
        //pintamos los elementos devueltos por la API
        nameElement.innerHTML=data.login;
        photoElement.src= data.avatar_url;
        photoElement.alt=`Foto de ${data.login}`;
        repoElement.innerHTML=data.public_repos;
    }else{
        //escondemos la sección de resultados
        resultsSection.classList.add('hidden');
    }
}

function getUserData(event){
    event.preventDefault();
    //se pregunta si el input está vacío o relleno y si está relleno se ejecuta el código
    if(inputUser.value){
        const apiUrl=getApiUrl();
        fetch(apiUrl)
            .then((response)=>response.json())
            .then(printUserData);
    }
}

//EVENTOS

btnSearch.addEventListener('click',getUserData);

}