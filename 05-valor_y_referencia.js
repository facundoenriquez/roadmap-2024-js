// Asignación por valor (tipos primitivos)
let a = 5;
let b = a; // Se copia el valor de 'a' en 'b'

console.log("Asignación por valor:");
console.log("Original: a =", a, "b =", b);

a = 10; // Modificamos 'a', pero 'b' no se ve afectado
console.log("Modificada: a =", a, "b =", b);
console.log("\n");

// Asignación por referencia (objetos)
let obj1 = { name: "Objeto 1" };
let obj2 = obj1; // Se asigna la referencia al mismo objeto

console.log("Asignación por referencia:");
console.log("Original: obj1 =", obj1, "obj2 =", obj2);

obj1.name = "Nuevo Nombre"; // Modificamos el objeto a través de 'obj1', afecta a 'obj2'
console.log("Modificada: obj1 =", obj1, "obj2 =", obj2);
console.log("\n");

// Funciones con parámetros por valor y por referencia
function modificarValor(x) {
  x = 20; // No afecta a la variable original
}

function modificarReferencia(obj) {
  obj.name = "Objeto Modificado"; // Modifica el objeto original
}

console.log("Funciones con parámetros:");
let num = 15;
console.log("Original: num =", num);
modificarValor(num);
console.log("Después de modificarValor: num =", num);
console.log("\n");

let miObjeto = { nombre: "Original" };
console.log("Original: miObjeto =", miObjeto);
modificarReferencia(miObjeto);
console.log("Después de modificarReferencia: miObjeto =", miObjeto);
