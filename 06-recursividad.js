let i = 0;
function imprimir_numeros() {
    if (i != 100) {
        i += 1;
        console.log(i);
        imprimir_numeros();
    }
}

function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

// imprimir_numeros();
console.log(factorial(4));
