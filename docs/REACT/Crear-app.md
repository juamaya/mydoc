# Crear una app con Vite

![vite](https://vitejs.dev/logo-with-shadow.png)

 

---

ABRIR LA CONSOLA DE COMANDOS CMD

## CREAR UNA CARPETA DEL PROYECTO:

---

En la consola situada en la carpeta del proyecto escribimos el comando, para crear la App.:

> npm create vite@latest

---

## INSTALAR MODULOS O PAQUETES.

- Aqui instalamos la libreria para crear rutas

En la consola situada en la carpeta del proyecto escribimos el comando:

> npm i react-router-dom

---

## CORRER LA APP

- Aqui abrimos la App en el navegador

En la consola situada en la carpeta de la App escribimos el comando:

> npm run dev

---
# CODIGOS
index.html

```index.html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
  </body>
</html>

```

---

main.jsx

```main.jsx

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)



```

---

App.jsx

```App.jsx
import Inicio from "./componentes/paginas/Inicio";
import A from "./componentes/paginas/A";
import B from "./componentes/paginas/B";
import C from "./componentes/paginas/C";
import BotonScroll from "./componentes/paginas/BotonScroll";
import Footer from "./componentes/paginas/Footer";
import "./App.css";

export default function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/"  element={<Inicio/>}/>
        <Route path="/A"  element={<A/>}/>
        <Route path="/B"  element={<B/>}/>
        <Route path="/C"  element={<C/>}/>
      </Routes>
    </BrowserRouter>
    <BotonScroll/>
    <Footer/>
 
    );
  }


```

## COMPONENTES

---

### Navbar.jsx

- Este es el codigo del menu de navegacion

```Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import car2 from './imagenes/car2.png'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to='/'>
          <img src={car2} width='100'  />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/A">
                A
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/B">
               B
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/C">
               C
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default navbar;

```

---

### Footer.jsx

- Este es el codigo del pie de pagina.

```Footer.jsx
import React from 'react'

const Footer = () => {
  return (
    <div className='container-fluid text-center fw-bold fs-4'>AMAYA ☣ 2023 </div>
  )
}

export default Footer

```
---
### BotonScroll.jsx
- Este es el codigo de un boton que al hacer click en el te lleva al inicio de la pagina.
```BotonScroll.jsx
import React from 'react'

const BotonScroll = () => {

  scroll = () => {
    const elemento = document.querySelector('.init')
    elemento.scrollIntoView('smooth', 'start');
  }

  return (
    <div className='text-center'>
      <button
          className="btn btn-primary  "
          onClick={() => { 
            {scroll() } 
          }}
        >
         Arriba
        </button>

    </div>
  )
}

export default BotonScroll


```
## PAGINAS

- Este es el codigo de las paginas.

### A.jsx

```A.jsx
import React from "react";

const A = () => {
  return (
    <div  >
      <h1>Pagina A</h1>
    </div>
  );
};

export default A;

```

---

### B.jsx

```B.jsx
import React from "react";

const B = () => {
  return (
    <div>
      <h1>Pagina B</h1>
    </div>
  );
};

export default B;

```

---

### C.jsx

```C.jsx
import React from "react";

const C = () => {
  return (
    <div>
      <h1>Pagina C</h1>
    </div>
  );
};

export default C;


```

---
