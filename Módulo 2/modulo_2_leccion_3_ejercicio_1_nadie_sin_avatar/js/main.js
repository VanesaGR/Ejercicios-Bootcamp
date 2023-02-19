'use strict';

// avatar por defecto
const DEFAULT_AVATAR = 'http://placehold.jp/150x150.png';

// avatar que eligió el usuario al registrarse
let userAvatar = 'http://www.fillmurray.com/300/300';


//apartado 1

const imgAvatar=document.querySelector('.user__avatar');
imgAvatar.src=userAvatar;


//apartado 2

userAvatar='';
imgAvatar.src=userAvatar;


//apartado 3
//prueba a meter el enlace de una foto entre las comillas de userAvatar=''; para comprobar el código siguiente
userAvatar||DEFAULT_AVATAR;



// const DEFAULT_AVATAR = 'http://placehold.jp/150x150.png';
// let userAvatar = 'http://www.fillmurray.com/300/300';
// // let userAvatar = '';
// const avatarImg = document.querySelector('.user__avatar');

// // avatarImg.setAttribute('src', `${userAvatar || DEFAULT_AVATAR}`);
// avatarImg.src = userAvatar || DEFAULT_AVATAR;
// //si User Avatar está vacío, entonces se utilizará default_avatar. Si userAvatar no está vacío, entonces se utilizará userAvatar