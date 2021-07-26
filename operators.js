const A = 0;
const B = '0';
const C = 0;
const D = false;

if (A === C) {
    console.log('OK');
} else {
    console.log('ERROR');
}

if (A == B) {
    console.log('OK');
} else {
    console.log('ERROR');
}

if (A === B) {
    console.log('ERROR');
} else {
    console.log('OK');
}

if (A === D) {
    console.log('ERROR');
} else {
    console.log('OK');
}

if (A == D) {
    console.log('OK');
} else {
    console.log('ERROR');
}