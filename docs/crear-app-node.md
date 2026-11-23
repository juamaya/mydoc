---
title: "Crear App Node"
pubDate: "May 25 2025"
heroImage:  "/assets/node.jpg"
tags: ["Node"]
---


# CREAR APP EN NODE_JS

## Abrir terminal en VScode

```js

marin@PC-SALON-JUAN MINGW64 /e/E_2025/PROYECTOS NODE-JS/app-node-js
$ npm init -y

```

## Instalar modulos de produccion

```js

marin@PC-SALON-JUAN MINGW64 /e/E_2025/PROYECTOS NODE-JS/app-node-js
$ npm i express morgan ejs


```

## Instalar modulos de desarrollo

```js
marin@PC-SALON-JUAN MINGW64 /e/E_2025/PROYECTOS NODE-JS/app-node-js
$ npm i nodemon -D


```

# Crear Carpeta src y index.js

## src/index.js

```js
import express from "express"
import ejs from 'ejs'
import {dirname, join} from 'path'
import {fileURLToPath} from 'url'

import indexRoutes from './routes/index.js'

const app = express()
const __dirname = dirname(fileURLToPath(import.meta.url))
console.log(__dirname, '/views')

app.set('views', join(__dirname, 'views'))
console.log(join(__dirname, 'views'))

app.set('view engine','ejs')
app.use(indexRoutes)

app.use(express.static(join(__dirname, 'public')))

app.listen(3000)

console.log("Hola Juamaya ... server is listening on port",3000)
```

## RUN APP

```js
marin@PC-SALON-JUAN MINGW64 /e/E_2025/PROYECTOS NODE-JS/app-node-js
$ node src/index.js

marin@PC-SALON-JUAN MINGW64 /e/E_2025/PROYECTOS NODE-JS/app-node-js
$ npx nodemon src/index.js
```

## STOP APP

> Pulsar Ctrl + C

## Crear script en package.json para observar cambios

> "dev": "nodemon src/index.js"

## Crear script en package.json para usar import y export

> "type":"module"

## package.json

```json
{
  "name": "app-node",
  "version": "1.0.0",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "dev": "nodemon src/index.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "ejs": "^3.1.10",
    "express": "^5.1.0",
    "morgan": "^1.10.0"
  },
  "devDependencies": {
    "nodemon": "^3.1.10"
  }
}
```

## RUN APP

```js
marin@PC-SALON-JUAN MINGW64 /e/E_2025/PROYECTOS NODE-JS/app-node-js
$ npm run dev
```
# Crear Carpeta routes y index.js

## routes/index.js

```js
import { Router } from "express";

const router = Router();

// Creando paginas

router.get("/", (req, res) => res.render("index.ejs"));
router.get("/about", (req, res) => res.render("about.ejs", {title: 'About | Juamaya 🍺 2025'}));
router.get("/contact", (req, res) => res.render("contact.ejs",  {title: 'Contact | Juamaya 🍺 2025', phone: 654345467}));

export default router;


```

# Crear Carpeta views y index.js

## views/index.ejs

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Web-Node_JS | Juamaya</title>

    <%- include('partials/mainCSS.ejs') %>
</head>

<body>

    <%- include('partials/navigation.ejs') %>
        <section class="container vh-100 d-flex justify-content-center align-items-center ">

            <h1>Juamaya 🍺 2025</h1>
            <img src="images/car1.png" alt="imagen" width="400" />
        </section>

        <section class="container vh-100 d-flex justify-content-center align-items-center ">

            <h1>Juamaya 🍺 2025</h1>
            <img src="images/car1.png" alt="imagen" width="600" class="img-fluid" />
        </section>

        <%- include('partials/footer.ejs') %>
</body>

</html>
```

## views/about.ejs

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>
        <%= title%>
    </title>
    <%- include('partials/mainCSS.ejs') %>
</head>

<body>
        <%- include('partials/navigation.ejs') %>

        <h1> <%= title%></h1>

        <%- include('partials/MyApp.ejs') %>
        <%- include('partials/footer.ejs') %>
</body>

</html>

```
## views/contact.ejs

```html

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> <%= title%> </title>
    <%- include('partials/mainCSS.ejs') %>
</head>

<body>
        <%- include('partials/navigation.ejs') %>
        <h1> <%= title%> </h1>
        <h2>Phone ☎ : <%= phone%> 📞 </h2>
        <%- include('partials/footer.ejs') %>
</body>

</html>

```
# Crear Carpeta views/partials  

## views/partials/navigation.ejs

```js

<nav class="navbar navbar-expand-lg bg-dark navbar-dark sticky-top ">
  <div class="container">

    <a class="navbar-brand" href="#">
      <img src="images/car1.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
      Web Juamaya
    </a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link " href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/contact">Contact</a>
        </li>

      </ul>
    </div>
  </div>
</nav>

```
## views/partials/mainCSS.ejs

```html

</-- BOOTSTRAP CSS -->

<link rel="stylesheet" href="	https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css">



</-- CUSTOM CSS -->

<link rel="stylesheet" href="/main.css">

```
## views/partials/MyApp.ejs

```html

</h1>
<section class="container mt-5">
    <div class="card mb-3 w-75">
        <img src="images/app-repo.png" class="card-img-top" alt="...">
        <div class="card-body bg-info">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional
                content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
        </div>
    </div>

    <div class="card mb-3 w-75">
        <img src="images/portafolio.png" class="card-img-top" alt="...">
        <div class="card-body bg-info">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional
                content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
        </div>
    </div>

    <div class="card mb-3 w-75">
        <img src="images/navbar-juan.png" class="card-img-top" alt="...">
        <div class="card-body bg-info">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional
                content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
        </div>
    </div>



    <div class="card mb-3 w-75">
        <img src="images/pokemon-app.png" class="card-img-top" alt="...">
        <div class="card-body bg-info">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional
                content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
        </div>
    </div>
    <div class="card mb-3 w-75">
        <img src="images/pokemon.png" class="card-img-top" alt="...">
        <div class="card-body bg-info">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional
                content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
        </div>
    </div>

    <div class="card mb-3 w-75">
        <img src="images/morty.png" class="card-img-top" alt="...">
        <div class="card-body bg-info">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional
                content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
        </div>
    </div>



</section>

```

## views/partials/footer.ejs

```html

<p class="fixed-bottom text-center">Master Node_JS &copy; Juamaya 🍺 2025</p>

```