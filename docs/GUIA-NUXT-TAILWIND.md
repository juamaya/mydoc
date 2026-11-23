---
title: "Guía: Crear y publicar un proyecto con Nuxt y Tailwind CSS"
pubDate: "May 8 2024"
heroImage: "/assets/nuxt.jpg"
tags: ["Nuxt", "Tailwind", "Vue", "Desarrollo web"]
---

# Guía: Crear y publicar un proyecto con Nuxt y Tailwind CSS

## 1. Introducción

En esta guía aprenderemos a crear una aplicación web utilizando Nuxt y Tailwind CSS, desde la instalación inicial hasta su publicación en Internet.

**Tecnologías utilizadas:**

- **Nuxt:** framework basado en Vue.js para crear aplicaciones web modernas.
- **Vue 3:** framework de JavaScript para construir interfaces.
- **TypeScript:** lenguaje que añade tipado estático a JavaScript.
- **Tailwind CSS:** framework CSS basado en clases de utilidad.
- **Git:** sistema de control de versiones.
- **GitHub:** plataforma para alojar el código fuente.
- **Vercel:** plataforma para desplegar aplicaciones web.

## 2. Requisitos previos

Antes de comenzar, necesitaremos instalar:

- Node.js (versión LTS compatible con Nuxt).
- npm, incluido con Node.js.
- Visual Studio Code o cualquier editor de código.
- Git.
- Una cuenta de GitHub.
- Una cuenta de Vercel para publicar el proyecto.

Podemos comprobar las instalaciones ejecutando:

```bash
node -v
npm -v
git --version
```

## 3. Crear el proyecto Nuxt

Abrimos una terminal y ejecutamos:

```bash
npm create nuxt@latest mi-proyecto
```

Seguimos las instrucciones del asistente de instalación.

Entramos en el directorio:

```bash
cd mi-proyecto
```

Instalamos las dependencias si el asistente no lo ha hecho automáticamente:

```bash
npm install
```

Iniciamos el servidor de desarrollo:

```bash
npm run dev
```

Abrimos el navegador en:

```text
http://localhost:3000
```

Ya tenemos nuestra aplicación Nuxt funcionando.

## 4. Instalar Tailwind CSS

Para integrar Tailwind CSS utilizaremos su integración oficial con Vite.

Ejecutamos:

```bash
npm install tailwindcss @tailwindcss/vite
```

### 4.1. Configurar Nuxt

Abrimos el archivo `nuxt.config.ts` y configuramos el plugin:

```typescript
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [
      tailwindcss()
    ]
  }
})
```

### 4.2. Crear el archivo CSS

Creamos el directorio:

```text
app/assets/css/
```

Dentro, creamos el archivo `main.css`:

```css
@import "tailwindcss";
```

Nuxt utilizará este archivo para cargar Tailwind CSS globalmente.

## 5. Estructura del proyecto

Una estructura básica recomendada para Nuxt 4 sería:

```text
mi-proyecto/
|
|-- app/
|   |-- assets/
|   |   `-- css/
|   |       `-- main.css
|   |
|   |-- components/
|   |   |-- AppHeader.vue
|   |   `-- AppFooter.vue
|   |
|   |-- layouts/
|   |   `-- default.vue
|   |
|   |-- pages/
|   |   |-- index.vue
|   |   `-- about.vue
|   |
|   `-- app.vue
|
|-- public/
|-- server/
|-- nuxt.config.ts
|-- package.json
|-- tsconfig.json
`-- .gitignore
```

**Descripción de los directorios:**

- `app/components`: componentes reutilizables.
- `app/pages`: páginas y rutas de la aplicación.
- `app/layouts`: estructuras generales de las páginas.
- `app/assets`: recursos que necesitan procesamiento.
- `public`: archivos estáticos accesibles directamente.
- `server`: API y lógica del servidor.
- `nuxt.config.ts`: configuración general de Nuxt.

## 6. Crear nuestra primera página

Abrimos `app/pages/index.vue` y añadimos:

```vue
<script setup lang="ts">
useSeoMeta({
  title: 'Mi proyecto Nuxt',
  description: 'Aplicación creada con Nuxt y Tailwind CSS'
})
</script>

<template>
  <main class="min-h-screen bg-slate-950 text-white">
    <section class="mx-auto max-w-5xl px-6 py-24">
      <h1 class="text-4xl font-bold tracking-tight md:text-6xl">
        Bienvenido a mi proyecto
      </h1>

      <p class="mt-6 max-w-2xl text-lg text-slate-300">
        Aplicación web desarrollada con Nuxt y Tailwind CSS.
      </p>

      <button
        class="mt-8 rounded-lg bg-blue-600 px-6 py-3 font-semibold
        transition hover:bg-blue-700"
      >
        Comenzar
      </button>
    </section>
  </main>
</template>
```

Este ejemplo utiliza clases de Tailwind para definir:

- Colores de fondo y texto.
- Tamaños de fuente.
- Espaciados.
- Diseño responsive.
- Estados `hover`.
- Transiciones.

## 7. Crear componentes reutilizables

Nuxt permite crear componentes Vue que podemos reutilizar en diferentes páginas.

Por ejemplo, creamos `app/components/AppHeader.vue`:

```vue
<template>
  <header class="border-b border-slate-800 bg-slate-950">
    <nav class="mx-auto flex max-w-6xl items-center
    justify-between px-6 py-5">
      <NuxtLink to="/" class="text-xl font-bold text-white">
        MiProyecto
      </NuxtLink>

      <div class="flex gap-6 text-sm text-slate-300">
        <NuxtLink to="/">Inicio</NuxtLink>
        <NuxtLink to="/about">Acerca de</NuxtLink>
      </div>
    </nav>
  </header>
</template>
```

Creamos también `app/components/AppFooter.vue`:

```vue
<template>
  <footer class="border-t border-slate-800 py-6 text-center">
    <p class="text-sm text-slate-400">
      &copy; 2026 MiProyecto. Todos los derechos reservados.
    </p>
  </footer>
</template>
```

Podemos utilizar ambos componentes desde `app/app.vue`:

```vue
<template>
  <div>
    <AppHeader />

    <NuxtPage />

    <AppFooter />
  </div>
</template>
```

## 8. Crear una segunda página

Creamos `app/pages/about.vue`:

```vue
<template>
  <main class="min-h-screen bg-slate-950 px-6 py-20 text-white">
    <div class="mx-auto max-w-5xl">
      <h1 class="text-4xl font-bold">
        Acerca de nosotros
      </h1>

      <p class="mt-6 text-slate-300">
        Esta es una página de ejemplo desarrollada con Nuxt.
      </p>
    </div>
  </main>
</template>
```

Nuxt genera automáticamente la ruta:

```text
http://localhost:3000/about
```

No necesitamos configurar manualmente un router.

## 9. Ejecutar y probar el proyecto

Durante el desarrollo utilizaremos:

```bash
npm run dev
```

Antes de publicar, comprobaremos que el proyecto se compila correctamente:

```bash
npm run build
```

También podemos revisar la versión de producción localmente:

```bash
npm run preview
```

Es recomendable comprobar:

- Que todas las páginas funcionan.
- Que los enlaces de navegación son correctos.
- Que el diseño se adapta a móviles y escritorio.
- Que no existen errores en la consola.
- Que las imágenes y recursos se cargan correctamente.
- Que los metadatos SEO están configurados.

## 10. Preparar el proyecto para Git

Creamos un archivo `.gitignore` en la raíz del proyecto:

```gitignore
node_modules/
.nuxt/
.output/
dist/
.env
.env.*
!.env.example
.DS_Store
```

Inicializamos Git:

```bash
git init
```

Añadimos los archivos:

```bash
git add .
```

Creamos el primer commit:

```bash
git commit -m "Initial commit: Nuxt and Tailwind CSS"
```

## 11. Publicar el código en GitHub

Accedemos a GitHub y creamos un repositorio nuevo llamado `mi-proyecto`.

Después conectamos nuestro proyecto local con el repositorio:

```bash
git branch -M main
git remote add origin https://github.com/USUARIO/mi-proyecto.git
git push -u origin main
```

Sustituimos `USUARIO` por nuestro nombre de usuario de GitHub.

Ahora tenemos el código fuente almacenado en GitHub.

## 12. Publicar la aplicación en Vercel

Utilizaremos Vercel para desplegar nuestra aplicación Nuxt.

### Paso 1: Crear una cuenta

Accedemos a [Vercel](https://vercel.com/) y podemos registrarnos utilizando nuestra cuenta de GitHub.

### Paso 2: Importar el repositorio

1. Entramos en el panel de Vercel.
2. Seleccionamos la opción **Add New Project**.
3. Importamos el repositorio `mi-proyecto`.
4. Comprobamos la configuración de compilación.

### Paso 3: Configurar el despliegue

Vercel detecta normalmente Nuxt de forma automática.

Para una aplicación Nuxt con renderizado de servidor, utilizaremos el comando de compilación:

```bash
npm run build
```

No debemos configurar la aplicación SSR como una exportación estática si necesita ejecutar código de servidor.

### Paso 4: Publicar

Pulsamos **Deploy**.

Vercel instalará las dependencias, compilará la aplicación y realizará el despliegue.

Cuando finalice, tendremos una dirección pública similar a:

```text
https://mi-proyecto.vercel.app
```

## 13. Actualizar la aplicación publicada

Una de las ventajas de conectar GitHub con Vercel es que podemos automatizar los despliegues.

Cuando realicemos cambios:

```bash
git add .
git commit -m "Update application"
git push origin main
```

Vercel detectará los cambios y realizará un nuevo despliegue automáticamente.

## 14. Variables de entorno

Si nuestra aplicación utiliza claves API, credenciales o configuraciones privadas, debemos almacenarlas en variables de entorno.

Por ejemplo, podemos crear un archivo `.env`:

```env
NUXT_API_SECRET=mi-clave-secreta
NUXT_PUBLIC_API_BASE=https://api.ejemplo.com
```

En Nuxt podemos acceder a ellas mediante:

```typescript
const config = useRuntimeConfig()
```

Las variables públicas y privadas deben configurarse correctamente en `nuxt.config.ts`:

```typescript
export default defineNuxtConfig({
  runtimeConfig: {
    apiSecret: '',

    public: {
      apiBase: ''
    }
  }
})
```

> Las variables privadas nunca deben exponerse al navegador.

El archivo `.env` no debe subirse a GitHub. Las variables necesarias para producción deben configurarse también en el panel de Vercel.

## 15. Publicación como página estática

Si nuestro proyecto no necesita funcionalidades de servidor y queremos publicar archivos estáticos, podemos utilizar la generación estática de Nuxt.

Ejecutamos:

```bash
npm run generate
```

Nuxt generará los archivos estáticos en el directorio:

```text
.output/public/
```

Podremos publicar esos archivos en un servicio de alojamiento estático compatible.

Es importante tener en cuenta que las rutas dinámicas deben poder prerenderizarse y que las funcionalidades que requieren servidor no estarán disponibles en una publicación puramente estática.

## 16. Buenas prácticas

Para mantener un proyecto organizado y preparado para producción recomendamos:

- Crear componentes reutilizables.
- Mantener una estructura de directorios clara.
- Utilizar TypeScript cuando sea posible.
- Evitar duplicar código.
- Utilizar clases de Tailwind de forma coherente.
- Optimizar las imágenes.
- Configurar correctamente los metadatos SEO.
- No subir credenciales al repositorio.
- Comprobar las compilaciones antes de publicar.
- Mantener actualizadas las dependencias.

## 17. Resumen de comandos

| Acción | Comando |
| --- | --- |
| Crear proyecto | `npm create nuxt@latest mi-proyecto` |
| Instalar dependencias | `npm install` |
| Instalar Tailwind | `npm install tailwindcss @tailwindcss/vite` |
| Desarrollo | `npm run dev` |
| Compilar | `npm run build` |
| Vista previa | `npm run preview` |
| Generar estático | `npm run generate` |
| Inicializar Git | `git init` |
| Añadir cambios | `git add .` |
| Crear commit | `git commit -m "Update"` |
| Publicar en GitHub | `git push origin main` |

## 18. Documentación oficial

Recursos recomendados para ampliar conocimientos:

- [Nuxt](https://nuxt.com/docs)
- [Crear proyectos Nuxt](https://nuxt.com/docs/4.x/api/commands/init)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Integración Tailwind con Nuxt](https://tailwindcss.com/docs/installation/framework-guides/nuxt)
- [Git](https://git-scm.com/doc)
- [GitHub](https://docs.github.com/)
- [Vercel](https://vercel.com/docs)
- [Despliegue de Nuxt](https://nuxt.com/deploy)

## Conclusión

Con Nuxt y Tailwind CSS podemos desarrollar aplicaciones web modernas, rápidas, adaptables y fáciles de mantener.

El flujo de trabajo que hemos seguido es:

1. Crear el proyecto con Nuxt.
2. Instalar y configurar Tailwind CSS.
3. Crear páginas y componentes.
4. Probar y compilar la aplicación.
5. Subir el código a GitHub.
6. Conectar el repositorio con Vercel.
7. Publicar la aplicación y automatizar futuras actualizaciones.

Con estos pasos tendremos una aplicación web preparada para producción y accesible desde Internet.
