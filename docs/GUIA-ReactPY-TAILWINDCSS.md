---
title: "Aplicar Tailwind CSS a ReactPy"
pubDate: "May 5 2024"
heroImage: "/assets/tailwindcss.jpg"
tags: ["ReactPy", "Python", "Tailwind CSS", "FastAPI"]
---

# Aplicar Tailwind CSS a ReactPy

ReactPy permite crear interfaces interactivas con Python y Tailwind CSS puede utilizarse como sistema de estilos visuales.

La integración funciona de la siguiente manera:

1. ReactPy genera componentes HTML desde Python.
2. Tailwind CSS analiza las clases utilizadas en el código Python.
3. Tailwind genera un archivo CSS optimizado.
4. FastAPI sirve ese archivo CSS junto con la aplicación ReactPy.

En esta guía utilizaremos Tailwind CSS 4 y su CLI oficial para compilar los estilos.

## 1. Estructura del proyecto

Partimos del proyecto ReactPy creado anteriormente.

Organizaremos los archivos de esta manera:

```text
mi-proyecto-reactpy/
|-- main.py
|-- requirements.txt
|-- package.json
|-- package-lock.json
|
|-- static/
|   |-- input.css
|   `-- output.css
|
`-- .gitignore
```

Necesitarás tener instalados Node.js y npm para utilizar Tailwind mediante su CLI.

## 2. Instalar Tailwind CSS

Desde la carpeta principal del proyecto ejecutamos:

```bash
npm init -y
```

Instalamos Tailwind CSS y su herramienta de compilación:

```bash
npm install -D tailwindcss @tailwindcss/cli
```

Esta instalación permite trabajar con Tailwind CSS 4 sin necesidad de utilizar Vite.

## 3. Crear el archivo de configuración CSS

Dentro de `static/` creamos el archivo `input.css` y añadimos:

```css
@import "tailwindcss";

/* Buscar clases Tailwind en los archivos Python */
@source "../";
```

La directiva `@source` indica a Tailwind dónde debe buscar las clases utilizadas en los componentes ReactPy.

## 4. Configurar la compilación

En `package.json`, añadimos los siguientes scripts:

```json
{
  "scripts": {
    "dev": "npx @tailwindcss/cli -i ./static/input.css -o ./static/output.css --watch",
    "build": "npx @tailwindcss/cli -i ./static/input.css -o ./static/output.css --minify"
  },
  "devDependencies": {
    "@tailwindcss/cli": "^4.0.0",
    "tailwindcss": "^4.0.0"
  }
}
```

Con esto tendremos dos comandos:

- `npm run dev`: compila automáticamente cuando modificamos los estilos o componentes.
- `npm run build`: genera el CSS optimizado para producción.

Los números de versión son orientativos. Conserva las versiones instaladas por npm en tu proyecto.

## 5. Conectar Tailwind CSS con ReactPy

Ahora modificamos `main.py`.

Primero importamos `StaticFiles` para que FastAPI pueda servir los archivos CSS:

```python
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

from reactpy import component, html, hooks
from reactpy.backend.fastapi import configure


@component
def App():
    contador, set_contador = hooks.use_state(0)

    def incrementar(event):
        set_contador(contador + 1)

    def decrementar(event):
        set_contador(contador - 1)

    return html.div(
        html.link({
            "rel": "stylesheet",
            "href": "/static/output.css"
        }),

        html.main(
            {
                "className": (
                    "min-h-screen flex flex-col "
                    "items-center justify-center "
                    "bg-slate-100 p-6"
                )
            },

            html.div(
                {
                    "className": (
                        "w-full max-w-md rounded-2xl "
                        "bg-white p-8 shadow-xl text-center"
                    )
                },

                html.h1(
                    {
                        "className": (
                            "text-3xl font-bold "
                            "text-blue-600 mb-4"
                        )
                    },
                    "Mi proyecto ReactPy"
                ),

                html.p(
                    {
                        "className": "text-gray-500 mb-6"
                    },
                    "Aplicación desarrollada con Python y Tailwind CSS"
                ),

                html.div(
                    {
                        "className": (
                            "text-5xl font-bold "
                            "text-gray-800 mb-8"
                        )
                    },
                    str(contador)
                ),

                html.div(
                    {
                        "className": "flex justify-center gap-4"
                    },

                    html.button(
                        {
                            "className": (
                                "bg-blue-600 hover:bg-blue-700 "
                                "text-white font-semibold "
                                "px-5 py-3 rounded-lg "
                                "transition cursor-pointer"
                            ),
                            "on_click": incrementar
                        },
                        "Incrementar"
                    ),

                    html.button(
                        {
                            "className": (
                                "bg-red-500 hover:bg-red-600 "
                                "text-white font-semibold "
                                "px-5 py-3 rounded-lg "
                                "transition cursor-pointer"
                            ),
                            "on_click": decrementar
                        },
                        "Decrementar"
                    )
                )
            )
        )
    )


app = FastAPI()

app.mount(
    "/static",
    StaticFiles(directory="static"),
    name="static"
)

configure(app, App)
```

**Aspectos importantes:**

- `className` permite asignar clases CSS a los elementos de ReactPy.
- `bg-blue-600` establece un fondo azul.
- `rounded-lg` aplica bordes redondeados.
- `shadow-xl` añade una sombra.
- `flex` activa Flexbox.
- `hover:bg-blue-700` cambia el color al pasar el ratón.
- `transition` suaviza las transiciones.

La ruta `/static/output.css` permite que el navegador descargue los estilos compilados. FastAPI sirve estos archivos mediante `StaticFiles`.

## 6. Compilar Tailwind CSS

Ahora necesitamos generar el archivo `output.css`.

Abrimos una terminal y ejecutamos:

```bash
npm run dev
```

Tailwind comenzará a analizar los archivos Python y generará:

```text
static/output.css
```

Dejamos esa terminal abierta mientras desarrollamos.

En otra terminal iniciamos ReactPy:

```bash
uvicorn main:app --reload
```

Abrimos:

```text
http://127.0.0.1:8000
```

### Resultado esperado

- Mi proyecto ReactPy
- Aplicación desarrollada con Python y Tailwind CSS
- Contador inicializado en `0`

Esta es una vista ilustrativa del diseño esperado.

## 7. Publicar en Render

Como utilizamos Render en el tutorial anterior, también debemos preparar Tailwind para producción.

En Render, cambia el **Build Command** por:

```bash
pip install -r requirements.txt && npm ci && npm run build
```

Mantén el **Start Command**:

```bash
uvicorn main:app --host 0.0.0.0 --port $PORT
```

Es importante que `npm run build` se ejecute antes de iniciar ReactPy, porque genera el archivo CSS que utilizará el navegador.

## 8. Consideraciones importantes

Hay tres aspectos que debes tener en cuenta:

1. **Clases dinámicas:** evita construir clases mediante fragmentos de texto como `f"bg-{color}-500"`. Tailwind necesita detectar los nombres completos para generar los estilos.
2. **Archivo compilado:** asegúrate de que `output.css` se genere antes de iniciar la aplicación.
3. **Archivos estáticos:** comprueba que FastAPI sirve correctamente la carpeta `static`.

## 9. Recursos oficiales

- [Tailwind CSS: instalación con CLI](https://tailwindcss.com/docs/installation/tailwind-cli)
- [ReactPy: guía de inicio rápido](https://reactpy.dev/docs/guides/getting-started/index.html)
- [FastAPI: archivos estáticos](https://fastapi.tiangolo.com/tutorial/static-files/)
- [ReactPy: ejecución en producción](https://reactpy.dev/docs/guides/production/deploy.html)

## 10. Recomendación de arquitectura

Para proyectos más grandes, te recomiendo separar los componentes de Python de los estilos:

```text
mi-proyecto-reactpy/
|-- main.py
|
|-- components/
|   |-- navbar.py
|   |-- sidebar.py
|   |-- footer.py
|   `-- dashboard.py
|
|-- static/
|   |-- input.css
|   `-- output.css
|
|-- requirements.txt
|-- package.json
`-- .gitignore
```

De esta manera podrás desarrollar interfaces más complejas, reutilizar componentes y mantener los estilos centralizados.

**Mi recomendación:** utiliza ReactPy para toda la lógica y los componentes, Tailwind CSS para el diseño visual y FastAPI para servir la aplicación y sus recursos estáticos.

Esta arquitectura es sencilla y adecuada para desarrollar dashboards, paneles de administración y aplicaciones web con Python.
