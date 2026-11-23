---
title: "Crear y publicar un proyecto con ReactPy"
pubDate: "May 6 2024"
heroImage: "/assets/reactpy.jpg"
tags: ["ReactPy", "Python", "FastAPI", "Render"]
sidebar_position: 5
---

# Crear y publicar un proyecto con ReactPy

## 1. Introducción

ReactPy es una biblioteca de Python que permite crear interfaces web interactivas utilizando Python, sin necesidad de escribir JavaScript directamente.

Su filosofía es similar a React.js: permite construir interfaces mediante componentes reutilizables, gestionar estados y responder a eventos.

En esta guía aprenderemos a:

- Instalar ReactPy.
- Crear un proyecto desde cero.
- Desarrollar una aplicación web.
- Ejecutar el proyecto en local.
- Preparar la aplicación para producción.
- Publicar el código en GitHub.
- Desplegar la aplicación en Render.

## 2. Requisitos previos

Antes de comenzar, necesitamos instalar:

- Python 3.10 o superior.
- `pip`.
- Git.
- Un editor de código, como Visual Studio Code.
- Una cuenta de GitHub.
- Una cuenta en Render para publicar la aplicación.

Comprobamos la instalación de Python:

```bash
python --version
```

Comprobamos Git:

```bash
git --version
```

## 3. Crear el proyecto

Creamos una carpeta para nuestro proyecto:

```bash
mkdir mi-proyecto-reactpy
cd mi-proyecto-reactpy
```

Creamos un entorno virtual.

### Windows

```powershell
python -m venv venv
venv\Scripts\activate
```

### Linux y macOS

```bash
python3 -m venv venv
source venv/bin/activate
```

Actualizamos `pip`:

```bash
python -m pip install --upgrade pip
```

## 4. Instalar ReactPy

Para este proyecto utilizaremos ReactPy junto con FastAPI y Uvicorn.

Instalamos las dependencias:

```bash
pip install "reactpy[fastapi]" "uvicorn[standard]"
```

Estas bibliotecas tienen las siguientes funciones:

| Biblioteca | Función |
| --- | --- |
| ReactPy | Construcción de interfaces web |
| FastAPI | Servidor y aplicación web |
| Uvicorn | Servidor ASGI para ejecutar la aplicación |

## 5. Estructura del proyecto

Organizaremos los archivos de la siguiente manera:

```text
mi-proyecto-reactpy/
|-- main.py
|-- requirements.txt
|-- .gitignore
`-- README.md
```

**Descripción:**

- `main.py`: contiene la aplicación principal.
- `requirements.txt`: contiene las dependencias.
- `.gitignore`: indica qué archivos no deben subirse a Git.
- `README.md`: documentación del proyecto.

## 6. Crear nuestra primera aplicación

Abrimos el archivo `main.py` y añadimos el siguiente código:

```python
from fastapi import FastAPI
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
        {
            "style": {
                "fontFamily": "Arial",
                "textAlign": "center",
                "marginTop": "80px"
            }
        },
        html.h1("Mi primera aplicación con ReactPy"),
        html.p("Bienvenido a mi proyecto."),
        html.h2(f"Contador: {contador}"),
        html.button(
            {
                "on_click": incrementar,
                "style": {
                    "padding": "10px 20px",
                    "margin": "5px"
                }
            },
            "Incrementar"
        ),
        html.button(
            {
                "on_click": decrementar,
                "style": {
                    "padding": "10px 20px",
                    "margin": "5px"
                }
            },
            "Decrementar"
        )
    )


app = FastAPI()

configure(app, App)
```

**¿Qué hace este código?**

- Importa ReactPy y FastAPI.
- Define un componente llamado `App`.
- Utiliza `use_state()` para almacenar el valor del contador.
- Crea dos botones para incrementar y decrementar el contador.
- Configura ReactPy dentro de FastAPI.
- Expone la aplicación mediante la variable `app`.

## 7. Crear el archivo `requirements.txt`

Creamos `requirements.txt`:

```text
reactpy[fastapi]
fastapi
uvicorn[standard]
```

Este archivo permitirá instalar automáticamente las dependencias cuando publiquemos el proyecto.

Para instalarlas:

```bash
pip install -r requirements.txt
```

## 8. Ejecutar la aplicación en local

Iniciamos el servidor:

```bash
uvicorn main:app --reload
```

Abrimos el navegador en:

```text
http://127.0.0.1:8000
```

La aplicación mostrará:

- Un título de bienvenida.
- Un contador inicializado en cero.
- Un botón para incrementar.
- Un botón para decrementar.

Al pulsar los botones, el contador actualizará su valor sin recargar la página.

> `--reload` está pensado para desarrollo. No debe utilizarse en producción.

## 9. Preparar el proyecto para producción

Antes de publicar nuestra aplicación debemos comprobar que funciona correctamente.

Ejecutamos:

```bash
uvicorn main:app
```

También debemos asegurarnos de que:

- No existen errores de ejecución.
- Todas las dependencias están declaradas.
- No se incluyen contraseñas ni claves privadas.
- La aplicación puede escuchar en el puerto proporcionado por el servidor de alojamiento.

Para desplegar utilizaremos el comando:

```bash
uvicorn main:app --host 0.0.0.0 --port $PORT
```

La variable `$PORT` será proporcionada por la plataforma de alojamiento.

## 10. Crear el archivo `.gitignore`

Creamos `.gitignore`:

```text
venv/
__pycache__/
*.pyc
.env
.idea/
.vscode/
.DS_Store
```

Esto evita publicar archivos innecesarios, entornos virtuales y configuraciones locales.

## 11. Publicar el proyecto en GitHub

Primero inicializamos Git:

```bash
git init
```

Añadimos los archivos:

```bash
git add .
```

Creamos el primer commit:

```bash
git commit -m "Primera version de mi proyecto ReactPy"
```

Creamos un repositorio en GitHub con el nombre `mi-proyecto-reactpy`.

Conectamos nuestro proyecto local con GitHub:

```bash
git branch -M main
git remote add origin https://github.com/TU_USUARIO/mi-proyecto-reactpy.git
git push -u origin main
```

Sustituye `TU_USUARIO` por tu nombre de usuario de GitHub.

El código ya estará disponible en el repositorio remoto.

## 12. Publicar la aplicación en Render

Utilizaremos Render para alojar nuestra aplicación y hacerla accesible desde Internet.

### Paso 1: Crear una cuenta

Accedemos a [Render](https://render.com/) y creamos una cuenta o iniciamos sesión.

### Paso 2: Crear un nuevo servicio

Desde el panel de Render:

1. Seleccionamos **New**.
2. Elegimos **Web Service**.
3. Conectamos nuestra cuenta de GitHub.
4. Seleccionamos el repositorio `mi-proyecto-reactpy`.

### Paso 3: Configurar el servicio

Configuramos los siguientes parámetros:

| Parámetro | Valor |
| --- | --- |
| Name | `mi-proyecto-reactpy` |
| Runtime | `Python` |
| Branch | `main` |
| Build Command | `pip install -r requirements.txt` |
| Start Command | `uvicorn main:app --host 0.0.0.0 --port $PORT` |

### Paso 4: Publicar

Pulsamos **Deploy Web Service**.

Render realizará las siguientes operaciones:

- Descargará el repositorio.
- Instalará las dependencias.
- Ejecutará el servidor Uvicorn.
- Asignará una dirección pública a la aplicación.

Cuando termine el despliegue, tendremos una URL similar a:

```text
https://mi-proyecto-reactpy.onrender.com
```

La dirección real será la que proporcione Render.

## 13. Actualizar la aplicación publicada

Cuando realicemos cambios en el código, podemos publicarlos de nuevo mediante Git:

```bash
git add .
git commit -m "Actualizacion de la aplicacion"
git push origin main
```

Si hemos configurado el despliegue automático de Render, la plataforma detectará los cambios y realizará un nuevo despliegue.

## 14. Solución de problemas habituales

### Error: `ModuleNotFoundError`

Significa que falta alguna dependencia.

Solución:

```bash
pip install -r requirements.txt
```

### Error: `Address already in use`

Significa que el puerto ya está siendo utilizado.

Podemos ejecutar el servidor en otro puerto durante el desarrollo:

```bash
uvicorn main:app --port 8001
```

### Error: `Application failed to start`

Debemos revisar:

- El registro de errores de Render.
- El comando de inicio.
- El archivo `requirements.txt`.
- Que exista la variable `app` en `main.py`.

### La aplicación funciona en local, pero no en producción

Comprobar que el servidor escucha en todas las interfaces:

```bash
uvicorn main:app --host 0.0.0.0
```

También hay que comprobar que se utiliza el puerto proporcionado por la plataforma.

## 15. Buenas prácticas

Para mantener un proyecto ReactPy correctamente organizado:

- Utilizar entornos virtuales.
- Mantener las dependencias actualizadas.
- Separar los componentes en diferentes módulos cuando el proyecto crezca.
- No incluir información sensible en GitHub.
- Utilizar un servidor ASGI de producción.
- Desactivar el modo de depuración en producción.
- Revisar los registros de errores del servidor.
- Documentar las funcionalidades del proyecto.

## 16. Recursos oficiales

- [Documentación oficial de ReactPy](https://reactpy.dev/)
- [Instalación de ReactPy](https://reactpy.dev/docs/guides/getting-started/install-reactpy.html)
- [Ejecución de ReactPy en producción](https://reactpy.dev/docs/guides/production/deploy.html)
- [Documentación de FastAPI](https://fastapi.tiangolo.com/)
- [Documentación de Uvicorn](https://www.uvicorn.org/)
- [GitHub](https://docs.github.com/)
- [Render](https://render.com/docs)

## 17. Conclusión

Con ReactPy podemos desarrollar aplicaciones web interactivas utilizando Python, aprovechando conceptos como componentes, estados y eventos.

En este tutorial hemos creado una aplicación sencilla, la hemos ejecutado en local, hemos publicado su código en GitHub y hemos preparado su despliegue en Render.

A partir de esta estructura podemos desarrollar proyectos más completos, como:

- Paneles de administración.
- Aplicaciones CRUD.
- Sistemas de gestión.
- Dashboards con gráficos.
- Aplicaciones conectadas a bases de datos.
- Interfaces para APIs desarrolladas con Python.

**Resultado final:** una aplicación web desarrollada con ReactPy y FastAPI, preparada para ejecutarse en producción y accesible desde Internet.
