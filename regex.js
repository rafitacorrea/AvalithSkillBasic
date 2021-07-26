const texto = 'Mar del Plata​ es una ciudad ubicada en el sudeste de la provincia de Buenos Aires';
let textoCensurado = null;

textoCensurado = texto.replace(/[A-z]/g, 'X');

console.log(textoCensurado)