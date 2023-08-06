---
sidebar_position: 2
---

## Codigos en  Javascript

![Alt text](../../static/img-png/JS.png) 

---


### Función tradicional 
```javascript
// Función tradicional (sin argumentos)
let a = 4;
let b = 2;
function add (){
  return a + b + 100;
}
add()

// Función tradicional(con argumentos)
function add1 (a, b){
  return a + b  ;
}
add(200,300)
``` 
### Función anonima

```javascript 
// Función anonima (sin argumentos)
let a = 4;
let b = 2;
let restar =function(){
  return a - b  ;
}
restar()

// Función anonima(con argumentos)
let restar =function (a, b){
  return a - b  ;
}
restar(200,100)
```
### Función flecha
```javascript
// Función flecha (sin argumentos)
let a = 4;
let b = 2;
const multiply = () => a * b ;
multiply()

// Función flecha (con argumentos)
const multiply = (a, b) => a * b  ;
multiply(5,7)
```