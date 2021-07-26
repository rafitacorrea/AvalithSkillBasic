const originalA = {
    nombre: 'Sergio',
    edad: 28,
    preferidos: ['Pizza', 'Hamburguesa'],
    madre: {
        nombre: 'Sandra',
        edad: 54,
    },
};
const originalB = '{"nombre":"Damian","edad":26}';
// -------
let edadMadre = 0;
let objetoParseado = null;
let existeClaveMadreA = null;
let existeClaveMadreB = null;
let nombreDelMasJoven = null;
let clavesDelObjeto = [];


// -------
edadMadre = originalA.madre.edad;

objetoParseado = JSON.parse(originalB);

existeClaveMadreA = originalA.madre ? true : false;

existeClaveMadreB = originalB.includes('madre') ? true : false;

let personas = [originalA, objetoParseado];
personas.sort((persona1, persona2) => persona1.edad - persona2.edad);
nombreDelMasJoven = personas[0].nombre;

clavesDelObjeto  = Object.keys(originalA);

// -------
console.log(edadMadre);
console.log(objetoParseado);
console.log(existeClaveMadreA);
console.log(existeClaveMadreB);
console.log(nombreDelMasJoven);
console.log(clavesDelObjeto);