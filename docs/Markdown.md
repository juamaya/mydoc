 


![Markdown][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Este es el logo de Markdown"


:::info  
Here's markdown logo (hover to see the title text):

:::

```
![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Este es el logo de Markdown"

```
## SINTAXIS MARKDOWN

---

## ENCABEZADOS

```


# Encabezado 1
## Encabezado 2
### Encabezado 3
#### Encabezado 4
##### Encabezado 5
###### Encabezado 6

```

# Encabezado 1

## Encabezado 2

### Encabezado 3

#### Encabezado 4

##### Encabezado 5

###### Encabezado 6

---

## TABLAS

```


|MARKDOWN	 |RESULTADO    |
|:--------- :|:---------:  |
|\*cursiva*  |	*cursiva*  |
|\_cursiva_  |	_cursiva_  |
|\**negrita**|	**negrita**|
|\__negrita__|	__negrita__|
|\~tachado~  |  ~~TACHADO~~|

```

|    MARKDOWN     |  RESULTADO  |
| :-------------: | :---------: |
|   \*cursiva\*   |  _cursiva_  |
|   \_cursiva\_   |  _cursiva_  |
| \*\*negrita\*\* | **negrita** |
| \_\_negrita\_\_ | **negrita** |
|   \~tachado~    | ~~TACHADO~~ |

---

## BLOQUES DE CODIGOS

 

\```
Creando códigos de bloque.
Puedes añadir tantas líneas como quieras.```

---

\```python
name = "Felipe"
print(f"Tu nombre es: {name}")
\```

```python
name = "Felipe"
print(f"Tu nombre es: {name}")

```

\```javascript
let name = "Felipe"
console.log("Tu nombre es:  ", name)
\```

```javascript
 let name = "Felipe"
console.log("Tu nombre es:  ", name)

```

 

---


## ENLACES

```

 [enlace en línea](http://www.google.com)
```

[enlace en línea](https://www.google.com)

<https://www.google.com>

---

## IMAGENES

```

![Texto alternativo](../../static/ima_A320/A320.jpg "A320")
```


![Texto alternativo](../static/ima_A320/A320.jpg "A320")![blob](../static/img-svg/blob1.svg "blob")

---

 

## VIDEOS

```html
<div className="embed-responsive embed-responsive-16by9">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/kKHGgRUfNfc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
</div>
```

 


---

## Usando React.js

:::tip

Use the power of React to create interactive blog posts.

```js
<button onClick={() => alert("button clicked!")}>Click me!</button>
```

<button onClick={() => alert('button clicked! Welcome.')}>Click me!</button>

:::

---

## TEXTOS

> Aqui pongo texto de relleno

_Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet_
**distinctio facere dolorum unde nam magnam earum ea qui, deserunt reiciendis quod nihil. Ad explicabo, rem maiores nisi et cupiditate eligendi, fugiat asperiores dolores ipsa ex quo, iste illo aliquid inventore praesentium? Iure quaerat beatae inventore magni veniam vero eveniet necessitatibus placeat nostrum** `delectus distinctio sit doloremque accusamus sapiente. Laboriosam obcaecati modi placeat ipsa `

---

## Listas desordenadas
:::info
Para crear listas desordenadas utiliza \* asteriscos, - guiones, o + símbolo de suma.
::: 

```
- Elemento de lista 1
- Elemento de lista 2

* Elemento de lista 3
* Elemento de lista 4

+ Elemento de lista 5
+ Elemento de lista 6
```


- Elemento de lista 1
- Elemento de lista 2

* Elemento de lista 3
* Elemento de lista 4

- Elemento de lista 5
- Elemento de lista 6

---

## Listas ordenadas
:::info
Para crear listas ordenadas debes utilizar la sintaxis de tipo: «número.» 1.
:::

 
1. Elemento de lista 1
2. Elemento de lista 2
3. Elemento de lista 3
4. Elemento de lista 4
     
 
---
 

1. Elemento de lista 1
    * Elemento de lista 1.1
    * Elemento de lista 1.1
2. Elemento de lista 2
   - Elemento de lista 2.1
      + Elemento    
      + Elemento   
   - Elemento de lista 2.2
      1. Elemento   
      2. Elemento    
        

---

 
## MENSAJES

:::success
:::

:::info
:::

:::caution
:::

:::danger
:::
 
  ![World](../static/img-svg/World.svg)   
 