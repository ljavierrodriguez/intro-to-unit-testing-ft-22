const { sumar } = require("../calculadora");

describe('Pruebas de la funcion sumar', () => {

    test('La suma de 1 + 2 debe ser 3', () => {
        expect(sumar(1, 2)).toBe(3)
    })

})