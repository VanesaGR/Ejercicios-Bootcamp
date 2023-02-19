//FUNCIÓN MULTIPLICACIÓN

function mult(a,b){
    return a*b;
}

console.log(mult(5,4));


//FUNCIÓN MEDIA DE CUATRO PARÁMETROS

function med(a,b,c,d){
    return(a+b+c+d)/4;
}

console.log(med(5,3,4,2));

//PARES

function par(a){
    if(a/2!==0){
        return false;
    }else{
        return true;
    }
}

console.log(par(5));