function calcularAreaCirculo(radio){
    return Math.PI * (radio**2);
}

function esMayorDeEdad(edad){
    return edad >= 21 ? true : false;
}

module.exports = {
    calcularAreaCirculo,
    esMayorDeEdad
}