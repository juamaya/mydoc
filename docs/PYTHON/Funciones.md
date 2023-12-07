---
sidebar_position: 2
---

![Python](./img/Pythonlogo.jpg)

---

### Función sin parámetros o retorno de valores
:::info 

```python
def diHola():
  print("Hello!")
```

 llamada a la función, 'Hello!' se muestra en la consola

```python
diHola() 
```
:::
 
---
### Función con un parámetro
:::info

```python
def holaConNombre(name):
  print("Hello " + name + "!")
```
llamada a la función, 'Hello Ada!' se muestra en la consola
```python
holaConNombre("Ada") 
```
:::

---

### Función con múltiples parámetros con una sentencia de retorno
:::info funcion que multiplica dos valores.

```python
def multiplica(val1, val2):
  return val1 * val2
```
llamada a la función y la guarda en la variable **resultado** y luego  muestra 15 en la consola 

```python
resultado = multiplica(3, 5)
print( resultado )
```
llamada a la función y la guarda en la variable **resultado_1** y luego  muestra 75 en la consola 

```python
resultado_1 = multiplica(5, 15)
print( resultado_1 )
```

:::

---

### Funcion  Fibonacci
:::info funcion  Fibonacci series up to n

```python
 # This is a comment
 def fib(n):
     a, b = 0, 1
     while a < n:
         print(a, end=' ')
         a, b = b, a+b
     print()
 ```
 llamada a la función 
 ```python
 fib(1000)
 ``` 
 muestra la serie Fibonacci hasta el numero pasado como parametro.

0 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987

:::

---

### Funcion lambda
:::info funcion  lambda
Por ejemplo, puedes escribir una función lambda que duplique sus argumentos

 `lambda x: x * 2`   y usarla con la función `map `para duplicar todos los elementos de una lista:
```python

mi_lista = [1, 2, 3, 4, 5, 6]
lista_nueva = list(map(lambda x: x * 2, mi_lista))
print(lista_nueva)  # [2, 4, 6, 8, 10, 12]

```
Así luce sin una función lambda
```python
def doble(x):
  return x*2
  
mi_lista = [1, 2, 3, 4, 5, 6]
lista_nueva = list(map(doble, mi_lista))
print(lista_nueva) # [2, 4, 6, 8, 10, 12]
```
:::

---

:::info funcion  lambda
También puedes escribir una función lambda que revise si un número es positivo,

`lambda x: x > 0`,  y usarla con la función `filter` para crear una lista de números positivos.
```python
# This is a comment
mi_lista = [18, -3, 5, 0, -1, 12]
lista_nueva = list(filter(lambda x: x > 0, mi_lista))
print(lista_nueva) # [18, 5, 12]

```
 
:::

---