let url = ['www.google.com', '/juguetes', '/osos'];
let documentos = ['file1.excel', 'archivo2.doc', 'archivo3.pdf'];
let rest_url = [];

get_label = document.getElementById('url');
get_imp = document.getElementById('imp');
get_label.textContent = url.join('');
get_imp.textContent = documentos;

function pilas(array) {
    // agregar elemento a la pila
    elemento = 0;
    array.unshift(elemento);
    console.log(array);
    // desapilar elemento
    array.shift();
    return array;
}

function colas(array) {
    // agregar elemento a la cola
    elemento = 6;
    array.push(elemento);
    console.log(array);
    // descolar elemento
    array.pop();
    return array;
}

function mover_url(param) {
    if (param === 'atras') {
        if (url.length == 1) {
            console.log('no se puede ir mas para atras');
        } else {
            const pop = url.pop();
            rest_url.push(pop);
            get_label.textContent = url.join('');
            console.log(rest_url);
        }
    } else {
        if (url[2]) {
            console.log('no se puede ir mas para adelante');
        } else {
            const tag = rest_url.pop();
            url.push(tag);
            get_label.textContent = url.join('');
        }
    }
}

function imprimir() {
    if (documentos.length == 0) {
        console.log('ya no hay documentos para imprimir');
    } else {
        documentos.shift();
        get_imp.textContent = documentos
    }
}

// console.log(pilas([1, 2, 3, 4, 5]));
// console.log(colas([1, 2, 3, 4, 5]));
