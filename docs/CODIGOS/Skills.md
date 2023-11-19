---
sidebar_position: 1
---

 

### \* index.html

:::tip

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>SKILLS</title>
    <link rel="stylesheet" href="style.css" />
  </head>

  <body>
    <!-- card-barras -->

            <div class="card-barras ">
                <div class="container">
                    <h2>Mis Habilidades</h2>
                    <hr>
                </div>
                <p>HTML</p>
                <div class="container">
                    <div class="skills html  colored"> 90% </div>
                </div>
                <p>CSS</p>
                <div class="container">
                    <div class="skills css colored ">70%</div>
                </div>
                <p>JAVASCRIPT</p>
                <div class="container    ">
                    <div class="skills javascript colored">55%</div>
                </div>
                <p>REACT</p>
                <div class="container    ">
                    <div class="skills react colored">55%</div>
                </div>
            </div>
            <!--END card-barras -->


    <script src="./index.js"></script>
  </body>
</html>
```

:::

---

### \* style.css

:::tip

```css

:root{
  --primary-color:blue;
  --tiempo: 5;
}


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.card-barras{
    display: flex;
    flex-wrap: wrap;
    color: #fff;
    width: 600px;
    margin:auto;
    padding: 5px;
    border: 4px solid var(--primary-color);
    border-radius: 20px;
    background-color:rgba(9, 17, 30, 0.975)
  
}
.container{
    width: 100%;
  font-size:1em;
   
}
 
.skills{

    text-align:right;
    padding: 5px;
    color: aliceblue;
    font-weight: bold;
    margin-bottom:5px;
    
}
 

.html{
    background-color: var(--primary-color);
    animation: fillhtml var(--tiempo) forwards;
}
.css{

    background-color: var(--primary-color);
    animation: fillcss var(--tiempo) forwards;
}

.javascript{

    background-color: var(--primary-color);
    animation: filljavascript var(--tiempo) forwards;
}

.react{

    background-color: var(--primary-color);
    animation: fillreact var(--tiempo) forwards;
}

@keyframes fillhtml{

    0%{width: 0;}
    100%{width:90%}
}

@keyframes fillcss{

    0%{width: 0;}
    100%{width:70%}
}
@keyframes filljavascript {

    0%{width: 0;}
    100%{width:55%}
}

@keyframes fillreact {

    0%{width: 0;}
    100%{width:35%}
}

```

:::

---

### \* index.js

:::tip

```js

```

:::

---
