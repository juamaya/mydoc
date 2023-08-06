---
sidebar_position: 1
---



## Codigos en Javascript

![JavaScript](../../static/img-png/JS.png)

[JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)

---

### Estructuras y tipos de datos

>El último estándar ECMAScript define nueve tipos:


:::tip Datos primitivos

 > Seis tipos de datos , controlados por el operador typeof

1- Undefined: typeof instance === "undefined"

2- Boolean: typeof instance === "boolean"

3- Number: typeof instance === "number"

4- String: typeof instance === "string"

5- BigInt: typeof instance === "bigint"

6- Symbol: typeof instance === "symbol" 

7- Null: typeof instance === "object". 

> Tipo primitivo especial que tiene un uso adicional para su valor: si el objeto no se hereda, se muestra null;

:::

:::tip Datos Tipo estructural

8- Object: typeof instance === "object". 

> Tipo estructural especial que no es de datos pero para cualquier instancia de objeto construido que también se utiliza como estructuras de datos: new Object, new Array, new Map (en-US), new Set, new WeakMap, new WeakSet, new Date y casi todo lo hecho con la palabra clave new;

9- Function: 

> una estructura sin datos, aunque también responde al operador  typeof:

typeof instance === "function". 

:::

---

### Variables en JavaScript



:::info let
Hay algunos tipos de datos diferentes que podemos almacenar en variables. 

---

>Declarar  una variable 

let myName;

let myAge;

---

>Puedes declarar e iniciar una variable al mismo tiempo, así:

let myAge = 17; // Tipo Números

let goodbye = "Hasta luego y gracias "; // Tipo Cadenas de caracteres (Strings)o String

let iAmAlive = true; // Tipo Booleanos

let test = 6 < 3;  // Tipo Booleanos

let myNameArray = ["Chris", "Bob", "Jim"]; // Tipo Arreglos

let myNumberArray = [10, 15, 40];  // Tipo Arreglos

let dog = { name: "Spot", breed: "Dalmatian" }; // Tipo Objetos


:::

>Puedes llamar a una variable prácticamente como quieras, pero existen limitaciones. En general, debes limitarte a usar caracteres latinos (0-9, a-z, A-Z) y el caracter de subrayado.

:::tip Nombres correctos
:::
age, 
myAge,
init,
initialColor,
finalOutputValue,
audio1,
audio2,
 


:::danger Nombres incorrectos
:::
1,
a,
_12,
myage,
MYAGE,
var,
Document,
skjfndskjfnbdskjfb 
 
 


---



### Constantes en JavaScript

:::info const
Muchos lenguajes de programación tienen el concepto de una constante — un valor que, una vez declarado no se puede cambiar

const daysInWeek = 7;

const hoursInDay = 24;

:::

:::danger
En el siguiente ejemplo, la segunda línea arrojará un error:

const daysInWeek = 7;

 daysInWeek = 8;

:::

---

### condicional (if)

:::info
Ejecuta una sentencia si una condición específicada es evaluada como verdadera
 
>if (condicion) {expresion}
:::

```javascript
let x = 3;
let y = 3;

if (x === y) {
  console.log("son iguales");
}
```

### El operador condicional (ternario)

:::info
El operador condicional (ternario) es el único operador en JavaScript que tiene tres operandos. Este operador se usa con frecuencia como atajo para la instrucción if.

> condición ? expr1 : expr2

:::

```javascript
let isMember = true;

"La Cuota es de:  " + (isMember ? "$2.00" : "$10.00");

//"La Cuota es de: $2.00"
```

> También es posible realizar evaluaciones ternarias múltiples (Nota: El operador condicional es asociativo):

```javascript
let firstCheck = false,
  secondCheck = false,
  access = firstCheck
    ? "Acceso Denegado"
    : secondCheck
    ? "Acceso Denegado"
    : "Acceso Permitido";

console.log(access); // muestra "Acceso Permitido"
```
### condicional (if...else)

:::info
Ejecuta una sentencia si una condición específicada es evaluada como verdadera. Si la condición es evaluada como falsa, otra sentencia puede ser ejecutada.
:::

```javascript
let x = 3;
let y = 3;

if (x === y) {
  console.log("Son iguales");
}else{
  console.log("No son iguales");
}

```