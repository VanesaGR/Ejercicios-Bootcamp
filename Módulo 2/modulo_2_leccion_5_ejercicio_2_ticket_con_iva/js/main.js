function iva(a){
    const iva=a*21/100
    const total=a+iva

    return (`Precio sin iva: ${a} IVA: ${iva} Precio total: ${total}`);
}

console.log(iva(10));