const { calcularAreaCirculo, esMayorDeEdad } = require('../app');

describe('Pruebas de la funcion calcularAreaCirculo', () => {

    test('La funcion calcularAreaCirculo debe estar definida', () => {
        expect(calcularAreaCirculo).toBeDefined()
    })

    test('El calculo del area de un circulo que tiene un radio de 10 es 314.1592653589793', () => {
        expect(calcularAreaCirculo(10)).toBe(314.1592653589793)
    })

})


describe('Pruebas de la funcion esMayorDeEdad', () => {
    test('La funcion esMayorDeEdad debe estar definida', () => {
        expect(esMayorDeEdad).toBeDefined()
    })

    test('La funcion debe retornar verdadero si es mayor o igual a 21', () => {
        expect(esMayorDeEdad(21)).toBe(true)
    })
    test('La funcion debe retornar falso si es meno a 21', () => {
        expect(esMayorDeEdad(20)).toBe(false)
    })
})