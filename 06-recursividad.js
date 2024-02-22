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

let arr = [0, 1];
function fibonacci(pos) {
  if (arr[pos] == undefined) {
    last_position = arr.length - 1;
    arr.push(arr[last_position - 1] + arr[last_position]);
    console.log(arr)
    return fibonacci(pos);
  } else {
    return arr[pos]
  }
}

// imprimir_numeros();
// console.log(factorial(4));
console.log(fibonacci(10));
