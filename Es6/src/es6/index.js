/* Concatenar strings */
let hello = 'Hello'
let world = 'World'
let helloworld = hello + ' ' + world;
console.log(helloworld)

/*Template Literals */

let concat = `${hello} ${world}`;
console.log(concat)

/*Salto de linea antes */

let lorem = 'lorem  ipsum sfekwfke rkwflwn \n' + "Otra frase que necesitamos"
console.log(lorem)

/*Salto de linea Es6 */
let lorem2 = `Salto de linea hecho en es6
aqui se producio el salto de linea`;

console.log(lorem2)

/*Arrreglos */

let person = {
    'name': 'Bryan',
    'age' : 21,
    'country' : 'MX'
}

console.log(person.name, person.country, person.age)

/*Destructurar el arreglo  */
let {name, age, country} = person

console.log(name,age,country)

/*Ejemplo 2 unir dos arreglos */

let team1 = ['Bryan', 'Karen', 'Amser']
let team2 = ['Hype' , 'Uchiha', 'Levi']

let team3 = ['Leclerc', ...team1, ...team2]

console.log(team3);

/*Objetos antes */
{
    let name = 'Bryan'
    let age = 21

    let persona = {name: name, age: age};
/*Objetos es6 */

    let persona2 = {name, age};
    console.log(persona)
    console.log(persona2)

}

{
    /*Creacion de un arreglo */
    const names = [
        {name: 'Bryan', age: 21},
        {name: 'Karen', age: 21}
    ]
    /*,map recorre el arreglo y utilizamos una funcion anonima con un parametro del metodo .map */

    /*Manera antigua de mostrar el arreglo */

    let listOfNames = names.map(function(item){
        console.log(item.name)
    })

    /*Mostrar arreglo con Arrow Functions */

    let listOfNames2 = names.map(item => console.log(item.name))
}

/* Promesas*/

const HelloPromise = () => {
    return new Promise ((resolve,reject) => {

        if (true) {
            resolve('Todo Bien!')
        }
        else {
            reject('Todo Mal')
        }

    });
}

/*Ejecutar Promesa */

/*Then para traer el resolve y catch para el error o reject */

HelloPromise()
    .then(Response => console.log(Response))
    .catch(error => console.log(error))


/* Clases en JS */

class Calculator {
    constructor () {
        this.valueA = 0;
        this.valueB = 0;
    }
    /* Creacion de metodo */
    sum (valueA,valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calObj = new Calculator();

console.log(calObj.sum (2,2));


    /* Importamos los modulos de JS */
    
    import {helloA} from './module';
    helloA()

{
    /*Importacion con Node Js */
    
    const helloA = require('./module');
    console.log(helloA)

}

/*Generator JS */

function* helloG () {

    if(true) {yield 'Hello ,';}
    if(true) {yield 'World';}
}

const generatorHello = helloG();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);