---
sidebar_position: 3
---

![Python](./img/Pythonlogo.jpg)

---

## Bucle for

:::tip for

* Imprima cada fruta en una lista de frutas:
```python
fruits = ["apple", "banana", "cherry"]
for x in fruits:
  print(x)

 ``` 
* Con la instrucción `break` podemos detener el ciclo antes de que haya recorrido todos los elementos
```python
#Salga del bucle cuando `x` sea "plátano":

fruits = ["apple", "banana", "cherry"]
for x in fruits:
  print(x)
  if x == "banana":
    break
 ``` 



* Con la instrucción `continue` podemos detener la iteración actual del bucle y continuar con la siguiente:
```python
# No imprimir plátano:

fruits = ["apple", "banana", "cherry"]
for x in fruits:
  if x == "banana":
    continue
  print(x)
```


* Recorra las letras de la palabra "plátano":
```python
for x in "banana":
  print(x)
```

* La función `range()` devuelve una secuencia de números, que comienza en 0 de forma predeterminada, se incrementa en 1 (de forma predeterminada) y termina en un número específico

```python
# Tenga en cuenta que el rango (6) no son los valores de 0 a 6, 
# sino los valores de 0 a 5.
for x in range(6):
  print(x)
```
```python
# range(2, 6) , que significa valores del 2 al 6 (pero sin incluir 6):
for x in range(2, 6):
  print(x)
```
```python
# range(2, 30, 3 ), Incrementa la secuencia con 3 
# (el valor predeterminado es 1):
for x in range(2, 30, 3):
  print(x)
```

### Bucles anidados
* Un bucle anidado es un bucle dentro de un bucle.
* El "bucle interno" se ejecutará una vez por cada iteración del "bucle externo":
```python


adj = ["red", "big", "tasty"]
fruits = ["apple", "banana", "cherry"]

for x in adj:
  for y in fruits:
    print(x, y)
# Imprime cada adjetivo para cada fruta:
red apple
red banana
red cherry
big apple
big banana
big cherry
tasty apple
tasty banana
tasty cherry
```
### Otra cosa en el bucle For
* La  palabra clave `else` en un bucle  `for `especifica un bloque de código que se ejecutará cuando finalice el bucle:

```python
 
# Imprime todos los números del 0 al 5 
# e imprime un mensaje cuando el ciclo haya finalizado:

for x in range(6):
  print(x)
else:
  print("Finally finished!")
```
:::
 ---

 ## Bucle while

:::caution
* Con el bucle `while` podemos ejecutar un conjunto de declaraciones siempre que una condición sea verdadera.
```python
# Imprima i siempre que sea menor que 6:
i = 1
while i < 6:
  print(i)
  i += 1
```
* Con la sentencia `break` podemos detener el ciclo incluso si la condición while es verdadera:
```python
# Salga del ciclo cuando i sea 3:
i = 1
while i < 6:
  print(i)
  if i == 3:
    break
  i += 1
```
* Con la instrucción `continue` podemos detener la iteración actual y continuar con la siguiente:
```python
# Continúe con la siguiente iteración si i es 3:
i = 0
while i < 6:
  i += 1
  if i == 3:
    continue
  print(i)
```
* Con la instrucción  `else` podemos ejecutar un bloque de código una vez cuando la condición ya no sea verdadera:

```python
# Imprima un mensaje una vez que la condición sea falsa:

i = 1
while i < 6:
  print(i)
  i += 1
else:
  print("i is no longer less than 6")
```
:::

---