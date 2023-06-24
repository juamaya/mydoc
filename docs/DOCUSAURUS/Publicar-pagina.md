---
sidebar_position: 2
---

---

PUBLICAR PAGINAS DE DOCUMENTACION CREADAS CON DOCUSAURUS, EN GITHUB-PAGES.
![docusaurus](../../static/img/docusaurus.png)

---

## ABRIR EL ARCHIVO

> docusaurus.config.js y modificar.
```json
  url: 'https://juamaya.github.io',
  baseUrl: '/myWeb/',
  organizationName: 'juamaya', // Usually your GitHub org/user name.
  projectName: 'myWeb', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash:false,
```

---

ABRIR EL TERMINAL EN LA CARPETA DEL PROYECTO EN VSCODE.

> En la consola git-bash situada en la carpeta del proyecto escribimos el comando
```
>npm run build  (Crea una carpeta llamada build.)
```

---

## CREAR REPOSITORIO EN GITHUB (myWeb)

- INICIAR GIT (Repositorio Local)

> En la consola git-bash situada en la carpeta del proyecto escribimos el comando
```
>git init
>git add .
>git commit -m "first commit"
```

---

- SUBIR REPOSITORIO A GITHUB (Repositorio Remoto)

> En la consola git-bash situada en la carpeta del proyecto escribimos el comando
```
>git branch -M main
>git remote add origin https://github.com/juamaya/myWeb.git
>git push -u origin main
```

---

- SUBIR CAMBIOS AL REPOSITORIO A GITHUB

> En la consola git-bash situada en la carpeta del proyecto escribimos el comando
```
>git add .
>git commit -m "first change"
>git push
```

---

## DEPLOY A GITHUB-PAGES

(crea una rama para el deploy.(gh-pages))

> ABRIR EL TERMINAL **powershell**  EN LA CARPETA DEL PROYECTO EN VSCODE.
```
cmd /C 'set "GIT_USER=juamaya" && npm run deploy'
```

---

## SUBIR CAMBIOS A GITHUB-PAGES.

> ABRIR EL TERMINAL **powershell** EN LA CARPETA DEL PROYECTO EN VSCODE.
```
cmd /C 'set "GIT_USER=juamaya" && npm run deploy'
```

---
