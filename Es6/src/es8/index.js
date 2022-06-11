/*En esta version se implemento: Object.entries Devuelve valores de un objeto a una matriz*/

const data = {
    frontend: 'Bryan',
    backend: 'Alan',
    UIDesing: 'BryanTG'
}

/* Aqui utilizamos la propiedad implementada en la version */

const entries = Object.entries(data);
console.log(entries);

console.log(entries.length)


/*Object Values Devuelve valores de un objeto a un arreglo*/

const data2 = {
    frontend: 'Bryan',
    backend: 'Alan',
    UIDesing: 'BryanTG'
}

const values = Object.values(data2);
console.log(values);

/* Padd esto agrega strings al principio o al final de una cadena a mostrar*/

console.log('Mundo'.padStart(10, 'Hola '))

console.log('Hola'.padEnd(11, ' Mundo'))

