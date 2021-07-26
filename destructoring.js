const original = {
    a: 1,
    b: 2,
    c: 3,
};
// -------
let sinB = null;
let valorDeC = null;

// -------
const {b, ...B} = original;

sinB = B;

const {c} = original;

valorDeC = c;

// -------
console.log(sinB);
console.log(valorDeC);