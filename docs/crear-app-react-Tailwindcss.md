---
title: "Crear App React Tailwindcss"
pubDate: "May 20 2025"
heroImage: "/assets/react-tailwind.jpg"
tags: ["React", "Tailwindcss"]
---


# TailwindCss V4.0
 
>ABRE LA TERMINAL EN LA CARPETA DEL PROYECTOS EN VS Code

## Cremos un proyecto:  " app-tailwind "

>npm create vite@latest app-tailwind --template react

```
marin@PC-SALON-JUAN MINGW64 /e/E_2025/PROYECTOS REACT/React-tailwindCss-V4
$ npm create vite@latest app-tailwind --template react

> npx
> create-vite app-tailwind react

│
◇  Select a framework:
│  React
│
◇  Select a variant:
│  JavaScript
│
◇  Scaffolding project in E:\E_2025\PROYECTOS REACT\React-tailwindCss-V4\app-tailwind...
│
└  Done. Now run:

  cd app-tailwind
  npm install    
  npm run dev
```
## Entramos en la carpeta del proyecto creado
> cd app-tailwind

```
marin@PC-SALON-JUAN MINGW64 /e/E_2025/PROYECTOS REACT/React-tailwindCss-V4
$ cd app-tailwind
```

## Instalamos Tailwindcss
>npm install tailwindcss @tailwindcss/vite

```
marin@PC-SALON-JUAN MINGW64 /e/E_2025/PROYECTOS REACT/React-tailwindCss-V4/app-tailwind
$ npm install tailwindcss @tailwindcss/vite
```

## Configurar Tailwindcss
>Abre el archivo vite.config.js

```js

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})



```



## Configurar estilos base de Tailwindcss
>Abre el archivo index.css

```css
 @import 'tailwindcss'

```

## Comprobar los estilos de Tailwindcss
>Abre el archivo App.jsx

```jsx
import React from 'react'

const App = () => {
  return (
    <div className='bg-red-500 p-12'>
      <h1 className='text-8xl font-bold text-white'>App tailwindcss v4</h1>
    </div>
  )
}

export default App
```

## RUN APP
>npm run dev

```
marin@PC-SALON-JUAN MINGW64 /e/E_2025/PROYECTOS REACT/React-tailwindCss-V4/app-tailwind
$ npm run dev

> app-tailwind@0.0.0 dev
> vite


  VITE v7.0.0  ready in 1019 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
h

  Shortcuts
  press r + enter to restart the server
  press u + enter to show server url
  press o + enter to open in browser
  press c + enter to clear console
  press q + enter to quit
o

```


## Configurar  Tailwindcss

>Crear variables personalizadas con la directiva @theme

>Abre el archivo index.css

```css
@import "tailwindcss";

@theme {
  --myblue-500: #023047;
  --myamber-500: #fb8500;
  --mytextcolor: #e0e1dd;
}

.bg-myblue {
  background-color: var(--myblue-500);
}

.bg-myamber {
  background-color: var(--myamber-500);
}

.text-mytextcolor {
  color: var(--mytextcolor);
}

 ```
>Usar la directiva @utility

>Abre el archivo index.css

```css

@import "tailwindcss";

@theme {
  --myblue-500: #023047;
  --myamber-500: #fb8500;
  --mytextcolor: #e0e1dd;
}

.bg-myblue {
  background-color: var(--myblue-500);
}

.bg-myamber {
  background-color: var(--myamber-500);
}

.text-mytextcolor {
  color: var(--mytextcolor);
}

@utility mycontainer{
    padding: 20px;
    max-width:1280px;
    margin:  1rem auto ;
}

```
## Comprobar los estilos de Tailwindcss
>Abre el archivo App.jsx

```jsx
import React from 'react'

const App = () => {

function handleClick(){
  alert('Juamaya 🍺 2025')
}

  return (
    <>

      <main className='bg-blue-200'>

        <div className='bg-myblue p-12'>
          <h1 className='text-5xl font-bold text-indigo-950'>App tailwindcss v4</h1>
          <button className='bg-myamber text-mytextcolor border-4 text-2xl font-bold mt-12 rounded px-4 py-4 cursor-pointer' onClick={handleClick}>Click here!</button>
        </div>

        <section className='bg-myamber mycontainer'>
          <h1 className='text-3xl font-bold text-white'>Usando la directiva @utility</h1>

          <button className='bg-gray-600  text-green-500 border-4 text-2xl font-bold mt-12 rounded px-4 py-4 cursor-pointer' onClick={handleClick}>Button</button>

        </section>

        <div className='@container border-4 rounded p-4'>
          <div className='grid lg:grid-cols-4 md:grid-cols-2  sm:grid-cols-1 gap-4'>
            <div className='bg-blue-500 h-40 text-5xl p-5'>A</div>
            <div className='bg-blue-500 h-40 text-5xl p-5'>B</div>
            <div className='bg-blue-500 h-40 text-5xl p-5'>C</div>
            <div className='bg-blue-500 h-40 text-5xl p-5'>D</div>
          </div>
        </div>
      </main>
    <h4 className='text-2xl text-center bg-lime-300 m-auto p-4'>App 🍺 Juamaya &copy; 2025</h4>
</>
  )
}

export default App
```
