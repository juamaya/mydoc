---
sidebar_position: 4
---

---

## Componentes de funcion

:::info Componentes

> La forma más sencilla de definir un componente es escribir una función de JavaScript:
 
---
###   Welcome

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

###  Card

```jsx
const Card = (props) => {
  return (
    <>
      <div className="card mx-3 text-dark bg-info border border-dark border-3 ">
        <img src={props.img} className="card-img-top" alt="imagen" />
        <div className="card-body">
          <p className="card-text">
          {props.texto}
          </p>
        </div>
        <a href="http://google.com" target="_blank"  className="btn btn-primary">google.com</a>
      </div>
    </>
  );
};

export default Card;

```

---

###   Card

> Con destructuring de los props.

```jsx
const Card = ({img, texto}) => {
  return (
    <>
      <div className="card mx-3 text-dark bg-info border border-dark border-3 ">
        <img src={img} className="card-img-top" alt="imagen" />
        <div className="card-body">
          <p className="card-text">
          {texto}
          </p>
        </div>
        <a href="http://google.com" target="_blank"  className="btn btn-primary">google.com</a>
      </div>
    </>
  );
};

export default Card;
```

---
###  Contador

```jsx
import React, { useEffect, useState } from "react";

function Contador() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`La cuenta es: ${count}`);
    document.title = `REACT,  La cuenta es: ${count}`;
  });

  return (
    <>
      <div className="container-fluid text-center">
        <h1>Contador</h1>
        <h3>La cuenta es: {count}</h3>

        <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
          Aumentar
        </button>
        <button className="btn btn-primary mx-3" onClick={() => setCount(count - count)}>
          Reset
        </button>
        <button className="btn btn-primary" onClick={() => setCount(count - 1)}>
          Disminuir
        </button>
      </div>
    </>
  );
}
export default Contador;
```

---
###  BotonScroll

```jsx
const BotonScroll = () => {

  scroll = () => {
    const elemento = document.querySelector('.init')
    elemento.scrollIntoView('smooth', 'start');
  }

  return (
    <div className='text-center'>
      <button className="btn btn-primary" onClick={() => { 
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



:::

---

:::tip App

> Podemos crear un componente App que renderice los componentes y el componente Welcome varias veces:

```jsx
import Welcome from "../componentes/Welcome";
import Card from "../componentes/Card";
import Contador from "../componentes/Contador";
import BotonScroll from "../componentes/BotonScroll";

import papa from "../imagenes/papa.jpg";
import mama from "../imagenes/mama.jpg";


function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" /> 
      <Card img={papa} texto="Juan" />
      <Card img={mama} texto="Antonia" />
      <Contador />
      <BotonScroll/>
    </div>
  );
}
export default App;
```
:::

---
## Componentes de Clase
:::caution Componentes
> También puedes utilizar una clase de ES6 para definir un componente:

---
###   Welcome
```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```
:::

---
