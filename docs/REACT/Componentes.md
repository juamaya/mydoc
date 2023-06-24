---
sidebar_position: 4
---
---
##  Crear un componente y propiedades

### * Componentes de funcion 
 
>La forma más sencilla de definir un componente es escribir una función de JavaScript:
~~~jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
~~~

### * Componentes de Clase

>También puedes utilizar una clase de ES6 para definir un componente:
~~~jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
~~~



---

>Podemos crear un componente App que renderice el componente Welcome varias veces:

~~~jsx

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

~~~
