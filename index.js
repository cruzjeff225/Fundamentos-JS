//FUNDAMENTOS DE JAVASCRIPT

let contador = 1; //inicializar variable "let" (permite que le reasigenmos valor o tipo de datos)
contador = contador + 1; //reasignandole valor
console.log(contador);

const contador1 = 1; //inicializar variable "const" (inmutable)
console.log(contador1)

//SCOPE
//Contexto de una variable (alcance)

if (true) {
    const contador = 5; //variable que solo existe en este contexto
    console.log(contador);
}

//OBJETOS
const persona = {
    name: "Jefferson", //clave - valor
    apellido: "Cruz"
};
console.log(persona.name); //Decidiendo que vamos a imprimir del objeto

//Objetos literales y optional chaining operator
const frutas = [ //Arreglo
    "pera",
    "manzana",
    "sandía"
];
//Acceder por indice (va desde 0)
console.log(frutas[1]);

//Objetos literales (no indexados)
const animal = {
    color: "naranja",
    nombre: "Simba",
    rugiendo: true,
    favorito: {
        dia: {
            ok: true,
        },
        noche: {
            ok: false,
        }
    }
}
console.log("El león es color:", animal.color);
console.log("Su nombre es:", animal.nombre);

const tarea = {
    "24567-jhskslsorscmwba" : {
        title: "Tarea 1"
    }
};
console.log(tarea["24567-jhskslsorscmwba"].title)
console.log(animal.favorito.dia.ok);

//Ejemplo usando OPTIONAL CHAINING
const datosPersonales = {
    name: "Jefferson",
    age: 21,
    address : {
        city: "Santiago de María",
        department: "Usulután",
        street: "5ta Calle Poniente",
    }
}
console.log(datosPersonales.address.city)
//Imprimirá undefined en lugar de error
console.log(datosPersonales.address?.postalcode)


//Destructuring
//Guardando el valor de la propiedad color en una constante
const color = animal.color;
const nombre = animal.nombre;
console.log("Color: " + color + ", Animal: " + nombre);

const ave = {
    color: "Azul",
    nombre: "Torogoz",
    volando: true
}
//Destructuring Objetos
const {color: colorAnimal, nombre: nombreAve, volando} = ave
console.log("El "+nombreAve + " es de color " + colorAnimal)

//Arrays (Indexados)
const fruits = ["Pera", "Manzana", "Sandia"];
//desctruturing Array
const [pera, manzana, sandia] = fruits;
console.log(pera)
console.log ("El " + nombreAve + " come " + pera)

