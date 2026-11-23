---
title: "Deploy App Astro"
pubDate: "May 15 2024"
heroImage: "/assets/astro1.jpg"
tags: ["Astro", "Deploy"]
---


 
## DEPLOY EN GITHUB.PAGES con Actions-Workflows.

 



https://docs.astro.build/es/guides/deploy/github/

 



 

## CREAR REPOSITORIO EN GITHUB: web-astro

---

### Configura Astro para GitHub Pages

:::tip

> Desplegando a una URL github.

> Configura las opciones site y, si es necesario, base en astro.config.mjs.

> Cuando este valor está configurado, todos los enlaces internos de tu página deben tener el prefijo del valor de base:



```html 

<a href="/mi-repo/acerca">Acerca</a>

```
:::

---

#### Archivo

> astro.config.mjs

```js

import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://juamaya.github.io",
});

```

###  EN LA CARPETA RAIZ DE TU PROYECTO

> Crea un nuevo archivo: .github/workflows/deploy.yml
> y pega el siguiente YAML.

#### Archivo

> .github/workflows/deploy.yml

```yml

    name: Deploy to GitHub Pages

    on:
   
    push:
        branches: [main]
  
    workflow_dispatch:

 
    permissions:
    contents: read
    pages: write
    id-token: write

    jobs:
    build:
        runs-on: ubuntu-latest
        steps:
        - name: Checkout your repository using git
            uses: actions/checkout@v4
        - name: Install, build, and upload your site
            uses: withastro/action@v2
        

    deploy:
        needs: build
        runs-on: ubuntu-latest
        environment:
        name: github-pages
        url: ${{ steps.deployment.outputs.page_url }}
        steps:
        - name: Deploy to GitHub Pages
            id: deployment
            uses: actions/deploy-pages@v4
```



### CONFIGURAR EN TU REPOSITORIO EN GitHub Settings/ Pages

---

#### Build and deployment 

> source: 
<mark>GitHub Actions</mark>

### ABRIR TERMINAL VScode
---

###  CREAR REPOSITORIO LOCAL

> En la consola situada en la carpeta del proyecto escribimos el comando:

```

  git init

  git add .

  git status

  git commit -m "mi primer commit"
 

```

###  CREAR REPOSITORIO REMOTO

> En la consola situada en la carpeta del proyecto escribimos el comando:

```

  git branch -M main

  git remote add origin https://github.com/juamaya/web-astro.git

  git push -u origin main

```

###  PARA PUBLICAR LA APP.

> En la consola situada en la carpeta del proyecto escribimos el comando:

```

  git add .

  git commit -m "deploy app-astro"

  npm run build
 
  git push  


```  
 

 
