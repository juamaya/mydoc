---
sidebar_position: 5
---

## Codigos en Javascript

![Alt text](../../static/img-png/JS.png)

---

### Operaciones habituales

> Crear un Array

```javascript
let frutas = ["Manzana", "Banana"];

console.log(frutas.length);
// 2
```

> Acceder a un elemento de Array mediante su índice

```javascript
let frutas = ["Manzana", "Banana"];

let primero = frutas[0];
// Manzana

let ultimo = frutas[frutas.length - 1];
//
```

> Recorrer un Array

```javascript
frutas.forEach(function (elemento, indice, array) {
  console.log(elemento, indice);
});
// Manzana 0
// Banana 1
```

> Añadir un elemento al final de un Array

```javascript
let nuevaLongitud = frutas.push("Naranja"); // Añade "Naranja" al final
// ["Manzana", "Banana", "Naranja"]
```

> Eliminar el último elemento de un Array

```javascript
let ultimo = frutas.pop(); // Elimina "Naranja" del final
// ["Manzana", "Banana"]
```

> Añadir un elemento al principio de un Array

```javascript
let nuevaLongitud = frutas.unshift("Fresa"); // Añade "Fresa" al inicio
// ["Fresa" ,"Manzana", "Banana"]
```

> Eliminar el primer elemento de un Array

```javascript
let primero = frutas.shift(); // Elimina "Fresa" del inicio
// ["Manzana", "Banana"]
```

> Encontrar el índice de un elemento del Array

```javascript
frutas.push("Fresa");
// ["Manzana", "Banana", "Fresa"]

let pos = frutas.indexOf("Banana"); // (pos) es la posición para abreviar
// 1
```

> Eliminar varios elementos a partir de una posición

:::info

Con .splice() no solo se puede eliminar elementos del array, si no que también podemos extraerlos guardándolo en un nuevo array. ¡Ojo! que al hacer esto estaríamos modificando el array de origen.
:::

```javascript
let vegetales = ["Repollo", "Nabo", "Rábano", "Zanahoria"];
console.log(vegetales);
// ["Repollo", "Nabo", "Rábano", "Zanahoria"]

let pos = 1,
  numElementos = 2;

let elementosEliminados = vegetales.splice(pos, numElementos);
// ["Nabo", "Rábano"] ==> Lo que se ha guardado en "elementosEliminados"

console.log(vegetales);
// ["Repollo", "Zanahoria"] ==> Lo que actualmente tiene "vegetales"
```

> Copiar un Array

```javascript
let copiaArray = vegetales.slice();
// ["Repollo", "Zanahoria"]; ==> Copiado en "copiaArra
```

> Acceso a elementos de un array

:::info

Los índices de los arrays de JavaScript comienzan en cero, es decir, el índice del primer elemento de un array es 0, y el del último elemento es igual al valor de la propiedad length del array restándole 1.

Si se utiliza un número de índice no válido, se obtendrá undefined.
:::

```javascript
let arr = ["  primer elemento", " segundo elemento", "  último elemento"];
console.log(arr[0]); // escribe en consola 'primer elemento'
console.log(arr[1]); // escribe en consola 'segundo elemento'
console.log(arr[arr.length - 1]); // escribe en consola 'último elemento'

console.log(arr[4]); // escribe en consola 'undefined'
```

---

### Metodos de Arrays

:::success
Array.map()

El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.

:::

```javascript
var numbers = [1, 5, 10, 15];
var doubles = numbers.map(function (x) {
  return x * 2;
});
// doubles is now [2, 10, 20, 30]
// numbers is still [1, 5, 10, 15]

var numbers = [1, 4, 9];
var roots = numbers.map(function (num) {
  return Math.sqrt(num);
});
// roots is now [1, 2, 3]
// numbers is still [1, 4, 9]
```

---

:::success
Array.find()

El método find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.
:::

```javascript
const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element) => element > 10);

console.log(found);
// Expected output: 12
```

> Encontrar un objeto en un array por una de sus propiedades

```javascript
const inventario = [
  { nombre: "manzanas", cantidad: 2 },
  { nombre: "bananas", cantidad: 0 },
  { nombre: "cerezas", cantidad: 5 },
];

function esCereza(fruta) {
  return fruta.nombre === "cerezas";
}

console.log(inventario.find(esCereza));
// { nombre: 'cerezas', cantidad: 5 }
```

> Utilizando funciones flecha y destructuring

```javascript
const inventario = [
  { nombre: "manzanas", cantidad: 2 },
  { nombre: "bananas", cantidad: 0 },
  { nombre: "cerezas", cantidad: 5 },
];

const resultado = inventario.find((fruta) => fruta.nombre === "cerezas");

console.log(resultado); // { nombre: 'cerezas', cantidad: 5 }
```

---

:::success
Array.filter()

El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.

:::

```javascript
const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

const result = words.filter((word) => word.length > 6);

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]
```

---

:::success
Array.sort()

El método sort() ordena los elementos de un arreglo (array) localmente y devuelve el arreglo ordenado.

:::

```javascript
const frutas = ["guindas", "manzanas", "bananas"];
frutas.sort(); // ['bananas', 'guindas', 'manzanas']

const puntos = [1, 10, 2, 21];
puntos.sort(); // [1, 10, 2, 21]
// Tenga en cuenta que 10 viene antes que 2
// porque '10' viene antes que '2' según la posición del valor Unicode.

const cosas = ["word", "Word", "1 Word", "2 Words"];
cosas.sort(); // ['1 Word', '2 Words', 'Word', 'word']
// En Unicode, los números vienen antes que las letras mayúsculas
// y estas vienen antes que las letras minúsculas.

const arr = ["80", "9", "700", 40, 1, 5, 200];
function comparar(a, b) {
  return a - b;
}

console.log("original:", arr.join()); //80,9,700,40,1,5,200
console.log("ordenado sin función:", arr.sort()); //1,200,40,5,700,80,9
console.log("ordenado con función:", arr.sort(comparar)); //1,5,9,40,80,200,700

const numbers = [4, 2, 5, 1, 3];
numbers.sort(function (a, b) {
  return a - b;
});
console.log(numbers); // [1, 2, 3, 4, 5]

// Con funcion flecha
const arr = [40, 1, 5, 200];
arr.sort((a, b) => a - b); // [ 1, 5, 40, 200 ]
```

>Los objectos pueden ser ordenados por el valor de una de sus propiedades.


```javascript

const items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic', value: 13 },
  { name: 'Zeros', value: 37 }
];
items.sort(function (a, b) {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
  // a must be equal to b
  return 0;
});
```