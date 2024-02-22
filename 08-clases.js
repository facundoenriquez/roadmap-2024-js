class Animal {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    hacerSonido() {
        console.log('Haciendo sonido');
    }

    get_info() {
        return `Nombre del animal: ${this.nombre}, Edad: ${this.edad} años`;
    }
}

class Pila {
    constructor(pila) {
        this.pila = pila;
    }

    apilar(ele) {
        this.pila.unshift(ele);
    }

    desapilar() {
        this.pila.shift();
    }

    get_pila() {
        return `esta es la pila: ${this.pila}`;
    }
}

class Cola {
    constructor(cola) {
        this.cola = cola;
    }

    encolar(ele) {
        this.cola.push(ele);
    }

    desencolar() {
        this.cola.shift();
    }

    get_cola() {
        return `esta es la cola: ${this.cola}`;
    }
}

const animal1 = new Animal('jose', 3);
const animal2 = new Animal('mia', 2);

animal1.hacerSonido();

console.log(animal1.get_info());
console.log(animal2.get_info());

const pila1 = new Pila([]);
pila1.apilar(1);
pila1.apilar(2);
console.log(pila1.get_pila());
pila1.desapilar();
console.log(pila1.get_pila());

const cola1 = new Cola([]);
cola1.encolar(3);
console.log(cola1.get_cola());
cola1.encolar(4);
console.log(cola1.get_cola());
cola1.desencolar();
console.log(cola1.get_cola());