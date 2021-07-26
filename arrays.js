const original = ['Rojo', 'Verde', 'Azul', 'Amarillo'];
// -------
let indiceAmarillo = null;
let cantidadColoresConA = 0;
let arregloSinAzul = [];
let ordenadoPorCantidadLetras = [];
let arregloConNuevoColorInicio = [];
let arregloConNuevoColorFin = [];


// ------
indiceAmarillo = original.indexOf('Amarillo');

let originalMayuscula = original.map(color=>{return color.toUpperCase()});
originalMayuscula.forEach(color=>{
    color.includes('A') ? cantidadColoresConA++ : 0});

arregloSinAzul = original.map(color=>{return color});
arregloSinAzul.splice(arregloSinAzul.indexOf('Azul'), 1);

ordenadoPorCantidadLetras = original.map(color=>{return color}).sort((colorA, colorB) =>{return colorA.length - colorB.length});

arregloConNuevoColorInicio = ['Rosa', ...original];

arregloConNuevoColorFin = [...original, 'Violeta'];


// ------
console.log(indiceAmarillo);
console.log(cantidadColoresConA);
console.log(arregloSinAzul);
console.log('cantidad letras ' + ordenadoPorCantidadLetras);
console.log(arregloConNuevoColorInicio);
console.log(arregloConNuevoColorFin);