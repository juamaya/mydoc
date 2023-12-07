---
sidebar_position: 6
---

---

### ENLACE PARA DESCARGAR Node.js
:::tip

  [  DESCARGAR Node.js](https://nodejs.org/en)
:::

---
### ENLACE DESCARGAR UN EDITOR DE CODIGO
:::tip
  [ DESCARGAR VScode](https://code.visualstudio.com/)

:::

---


:::tip APP
* Crear el proyecto rick-and-morty, con React y javaScript
:::

:::info Crear el proyecto
* En la terminal situada en la carpeta de los proyectos escribimos el comando:

C:\Users\marin\Desktop\REACT_CURSO> **`npm create vite` **

√ Project name: ... rick-and-morty

√ Select a framework: » React

√ Select a variant: » JavaScript

:::

:::info  ENTRAMOS EN LA CARPETA DEL PROYECTO:



> PS C:\Users\marin\Desktop\REACT_CURSO> **`cd rick-and-morty`**

---
Instalar librerias
* En la terminal situada en la carpeta del proyecto escribimos el comando:

> PS C:\Users\marin\Desktop\REACT_CURSO\rick-and-morty> **`npm i`**

---

Abrir el proyecto con VScode

* En la terminal situada en la carpeta del proyecto escribimos el comando:

> PS C:\Users\marin\Desktop\REACT_CURSO\rick-and-morty> **`code .`**

---
:::

## Estructura del proyecto

![rick-and-morty](../../static/img-png/rick-and%20morty.png "rick-and-morty")

:::info

* EJECUTAR EL PROYECTO (Para mantener el servidor activo observando)

> PS C:\Users\marin\Desktop\REACT_CURSO\rick-and-morty>**` npm run dev`**

---

* VER EN EL NAVEGADOR:

Pulsar Crtl y hacer click ``http://localhost:5173/ ``

---

:::

![rick-and-morty-1](../../static/img-png/rick-and-morty-1.png "rick-and-morty-1")


:::info  PARAR EL SERVIDOR:



> Pulsar  Crtl + C
:::

---

:::info INSTALAR bootstrap:



* En la terminal situada en la carpeta del proyecto escribimos el comando:

> PS C:\Users\marin\Desktop\REACT_CURSO\rick-and-morty> **`npm i bootstrap@5.3.0-alpha1`**


:::

---

## Codigos

### index.html

:::tip 
index.html


```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

:::

### main.jsx

:::tip 
main.jsx


```javascript
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

:::

### App.jsx

:::tip
App.jsx

```javascript
import CharacterList from "./components/CharacterList";

function App() {
  return (
    <div className="bg-secondary text-white">
      <h1 className="text-center display-1 py-4">Rick and Morty</h1>

      <CharacterList />
    </div>
  );
}

export default App;
```

:::

### Character.jsx

:::tip
Character.jsx

```javascript
function Character({ character }) {
  return (
    <div className="text-center p-5">
      <h2>{character.name}</h2>
      <img
        className="img-fluid rounded-pill"
        src={character.image}
        alt={character.name}
      />

      <h3 className="text-dark"> Especie: {character.species}</h3>
      <h5 className="text-dark"> Origen: {character.origin.name}</h5>
    </div>
  );
}

export default Character;
```

:::

### CharacterList.jsx

:::tip
CharacterList.jsx

```javascript
import { useEffect, useState } from "react";
import Character from "./Character";
import NavPage from "./NavPage";

function Footer() {
  return <div className="text-center">AMAYA_2022</div>;
}

function CharacterList() {
  const [characters, setcCharacters] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const data = await response.json();
      console.log(data.results);
      setcCharacters(data.results);
    }
    fetchData();
  }, [page]);

  return (
    <div className="container  ">
      <NavPage page={page} setPage={setPage} />
      <div className="row">
        {characters.map((character) => {
          return (
            <div className="col-md-4" key={character.id}>
              <Character character={character} />
            </div>
          );
        })}

        <div className="mb-5">
          <NavPage page={page} setPage={setPage} />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default CharacterList;
```

:::

### NavPage.jsx

:::tip
NavPage.jsx

```javascript
function NavPage(props) {
  return (
    <header className="d-flex justify-content-between inicio align-items-center">
      <button
        class="btn btn-primary btn-sm"
        onClick={() => {
          if (props.page === 1) return null;
          props.setPage(props.page - 1);
        }}
      >
        &larr; Anterior
      </button>
      <p>Page: {props.page}</p>
      <button
        class="btn btn-primary btn-sm"
        onClick={() => {
          props.setPage(props.page + 1);
        }}
      >
        Siguiente &rarr;
        {/* Page {props.page + 1} */}
      </button>
    </header>
  );
}

export default NavPage;
```

:::
