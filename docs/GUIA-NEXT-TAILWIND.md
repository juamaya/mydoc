---
title: "Guía: Crear y publicar un proyecto con Next.js y Tailwind CSS"
pubDate: "May 7 2024"
heroImage: "/assets/nextjs.jpg"
tags: ["Next.js", "React", "Tailwind CSS", "Desarrollo web"]
---

# Guía: Crear y publicar un proyecto con Next.js y Tailwind CSS

**Nivel:** Principiante - Intermedio  
**Stack:** Next.js, React, TypeScript y Tailwind CSS  
**Despliegue:** GitHub + Vercel

## 1. Introducción

En esta guía aprenderemos a crear un proyecto web desde cero con Next.js y Tailwind CSS, desarrollar una interfaz, probarla localmente y publicarla en Internet.

**Tecnologías utilizadas:**

- **Next.js:** framework de React para crear aplicaciones web.
- **React:** biblioteca para construir interfaces mediante componentes.
- **TypeScript:** añade tipado estático a JavaScript.
- **Tailwind CSS:** framework CSS basado en clases de utilidad.
- **Git:** sistema de control de versiones.
- **GitHub:** plataforma para alojar repositorios.
- **Vercel:** plataforma para desplegar aplicaciones Next.js.

## 2. Requisitos previos

Antes de comenzar, necesitamos instalar:

- Node.js versión 20.9 o superior.
- npm, incluido con Node.js.
- Visual Studio Code o un editor equivalente.
- Git.
- Una cuenta de GitHub.
- Una cuenta de Vercel.

Comprobamos las instalaciones con:

```bash
node -v
npm -v
git --version
```

## 3. Crear el proyecto Next.js

Abrimos una terminal y ejecutamos:

```bash
npx create-next-app@latest mi-proyecto
```

El asistente permite seleccionar las características del proyecto.

**Configuración recomendada:**

- **TypeScript:** Sí.
- **ESLint:** Sí.
- **React Compiler:** Opcional.
- **Tailwind CSS:** Sí.
- **Código dentro de `src/`:** Opcional.
- **App Router:** Sí.
- **Alias de importación:** `@/*`.

Entramos en el directorio:

```bash
cd mi-proyecto
```

## 4. Ejecutar el proyecto localmente

Iniciamos el servidor de desarrollo:

```bash
npm run dev
```

Abrimos el navegador y accedemos a:

```text
http://localhost:3000
```

Cada modificación del código se reflejará automáticamente en el navegador.

## 5. Estructura del proyecto

Una estructura habitual será:

```text
mi-proyecto/
|
|-- public/
|   `-- images/
|
|-- src/
|   |-- app/
|   |   |-- favicon.ico
|   |   |-- globals.css
|   |   |-- layout.tsx
|   |   `-- page.tsx
|   |
|   `-- components/
|       |-- Header.tsx
|       `-- Footer.tsx
|
|-- node_modules/
|-- .gitignore
|-- package.json
|-- package-lock.json
|-- postcss.config.mjs
|-- tsconfig.json
`-- next.config.ts
```

**Directorios importantes:**

- `public/`: imágenes, iconos y archivos estáticos.
- `src/app/`: páginas, rutas y layouts.
- `src/components/`: componentes reutilizables.
- `globals.css`: estilos globales.
- `layout.tsx`: estructura general de la aplicación.
- `page.tsx`: página principal.

## 6. Configurar Tailwind CSS

Si hemos seleccionado Tailwind CSS durante la instalación, Next.js lo habrá configurado automáticamente.

En `src/app/globals.css` encontraremos:

```css
@import "tailwindcss";
```

No necesitamos instalar Tailwind manualmente.

Si necesitamos configurarlo en un proyecto existente, podemos instalar las dependencias:

```bash
npm install tailwindcss @tailwindcss/postcss postcss
```

Y configurar `postcss.config.mjs`:

```javascript
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
```

## 7. Crear nuestra primera página

Abrimos `src/app/page.tsx` y sustituimos su contenido por:

```tsx
export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-6">
      <section className="max-w-2xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Mi primer proyecto
          <span className="text-blue-500"> Next.js</span>
        </h1>

        <p className="text-lg text-slate-400 mb-8">
          Aplicación desarrollada con Next.js,
          React, TypeScript y Tailwind CSS.
        </p>

        <a
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition-colors"
        >
          Conocer Next.js
        </a>
      </section>
    </main>
  );
}
```

Guardamos los cambios y comprobamos el resultado en el navegador.

## 8. Crear componentes reutilizables

Una buena práctica es dividir la interfaz en componentes.

Creamos `src/components/Header.tsx`:

```tsx
export default function Header() {
  return (
    <header className="w-full bg-slate-900 text-white p-5">
      <nav className="max-w-6xl mx-auto flex justify-between items-center">
        <span className="text-xl font-bold">
          Mi Proyecto
        </span>

        <div className="flex gap-6">
          <a href="/" className="hover:text-blue-400">
            Inicio
          </a>

          <a href="/contacto" className="hover:text-blue-400">
            Contacto
          </a>
        </div>
      </nav>
    </header>
  );
}
```

Podemos reutilizarlo desde cualquier página:

```tsx
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />

      <main className="p-10">
        <h1 className="text-3xl font-bold">
          Bienvenido a mi web
        </h1>
      </main>
    </>
  );
}
```

## 9. Crear nuevas páginas y rutas

Next.js utiliza el sistema de rutas basado en directorios.

Por ejemplo, para crear una página de contacto:

```text
src/
`-- app/
    |-- page.tsx
    `-- contacto/
        `-- page.tsx
```

Contenido de `src/app/contacto/page.tsx`:

```tsx
export default function Contacto() {
  return (
    <main className="min-h-screen p-10">
      <h1 className="text-4xl font-bold">
        Contacto
      </h1>

      <p className="mt-4 text-slate-600">
        Esta es nuestra página de contacto.
      </p>
    </main>
  );
}
```

Ahora podemos acceder a:

```text
http://localhost:3000/contacto
```

Para navegar entre páginas de Next.js, es recomendable utilizar el componente `Link`:

```tsx
import Link from "next/link";

<Link href="/contacto">
  Contacto
</Link>
```

## 10. Configurar los metadatos

Podemos configurar el título y la descripción de nuestra aplicación desde `src/app/layout.tsx`.

```tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mi proyecto Next.js",
  description: "Proyecto desarrollado con Next.js y Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
```

Esto permite definir información importante para los buscadores y las pestañas del navegador.

## 11. Comprobar el proyecto antes de publicarlo

Antes de desplegar nuestra aplicación, debemos comprobar que funciona correctamente.

Ejecutamos:

```bash
npm run build
```

Si queremos ejecutar la versión de producción localmente:

```bash
npm run start
```

También podemos ejecutar el análisis de código:

```bash
npm run lint
```

Si existen errores, debemos solucionarlos antes de continuar.

> En versiones recientes de Next.js, el comando `next build` no ejecuta automáticamente ESLint. Por eso conviene ejecutar ambos comandos por separado.

## 12. Subir el proyecto a GitHub

Primero creamos un repositorio nuevo en GitHub.

Después, desde la terminal del proyecto, ejecutamos:

```bash
git init
```

Añadimos los archivos:

```bash
git add .
```

Creamos el primer commit:

```bash
git commit -m "Primer commit del proyecto"
```

Configuramos la rama principal:

```bash
git branch -M main
```

Conectamos nuestro repositorio remoto:

```bash
git remote add origin https://github.com/USUARIO/mi-proyecto.git
```

Subimos el código:

```bash
git push -u origin main
```

Sustituye `USUARIO` por tu nombre de usuario de GitHub.

A partir de ahora, para publicar nuevos cambios en GitHub:

```bash
git add .
git commit -m "Actualización del proyecto"
git push
```

## 13. Publicar el proyecto en Vercel

Vercel permite desplegar proyectos Next.js de forma sencilla.

### Paso 1: Acceder a Vercel

Entramos en [Vercel](https://vercel.com/) e iniciamos sesión utilizando nuestra cuenta de GitHub.

### Paso 2: Importar el repositorio

1. Accedemos al panel de Vercel.
2. Seleccionamos **Add New Project**.
3. Buscamos nuestro repositorio de GitHub.
4. Pulsamos **Import**.

### Paso 3: Configurar el proyecto

Vercel detectará automáticamente que estamos trabajando con Next.js.

**Configuración habitual:**

| Parámetro | Valor |
| --- | --- |
| Framework Preset | Next.js |
| Build Command | `npm run build` |
| Output Directory | Automático |
| Install Command | `npm install` |

Si utilizamos variables de entorno, debemos configurarlas también en Vercel.

### Paso 4: Desplegar

Pulsamos el botón **Deploy**.

Vercel instalará las dependencias, compilará el proyecto y publicará la aplicación.

Al finalizar, obtendremos una dirección pública similar a:

```text
https://mi-proyecto.vercel.app
```

¡Nuestra aplicación ya estará publicada en Internet!

## 14. Actualizar la aplicación publicada

Una de las ventajas de conectar GitHub con Vercel es que podemos automatizar los despliegues.

Cuando queramos publicar cambios:

```bash
git add .
git commit -m "Nueva funcionalidad"
git push
```

Vercel detectará automáticamente el nuevo commit y realizará un nuevo despliegue.

No necesitamos publicar manualmente cada actualización.

## 15. Buenas prácticas

Al desarrollar proyectos con Next.js y Tailwind CSS, recomendamos:

- Mantener los componentes pequeños y reutilizables.
- Utilizar TypeScript para mejorar la calidad del código.
- Aplicar diseños responsive con Tailwind CSS.
- Utilizar `next/image` para optimizar imágenes.
- Configurar correctamente los metadatos SEO.
- No subir archivos `.env` ni credenciales a GitHub.
- Utilizar variables de entorno para información sensible.
- Comprobar la compilación antes de publicar.
- Mantener actualizadas las dependencias.
- Utilizar Git para controlar los cambios.

## 16. Resumen de comandos

| Acción | Comando |
| --- | --- |
| Crear proyecto | `npx create-next-app@latest mi-proyecto` |
| Entrar al proyecto | `cd mi-proyecto` |
| Instalar dependencias | `npm install` |
| Ejecutar desarrollo | `npm run dev` |
| Comprobar lint | `npm run lint` |
| Compilar producción | `npm run build` |
| Ejecutar producción | `npm run start` |
| Inicializar Git | `git init` |
| Añadir cambios | `git add .` |
| Crear commit | `git commit -m "mensaje"` |
| Subir a GitHub | `git push` |

## 17. Recursos oficiales

- [Next.js](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [Git](https://git-scm.com/doc)
- [GitHub](https://docs.github.com/)
- [Vercel](https://vercel.com/docs)

## Conclusión

Hemos aprendido a crear un proyecto desde cero con Next.js y Tailwind CSS, desarrollar páginas y componentes reutilizables, configurar los estilos, comprobar la compilación, subir el código a GitHub y desplegarlo en Vercel.

Con este flujo de trabajo tenemos una base sólida para desarrollar y publicar proyectos web modernos, escalables y adaptables a dispositivos móviles.

**Flujo de trabajo final:**

```text
Desarrollo local → Git → GitHub → Vercel → Aplicación publicada
```
