---
sidebar_position: 2
---

 
---

### * index.html

:::tip



```html
<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DARK MODE</title>
  <link rel="stylesheet" href="style.css">
</head>

<body class="dark init">

  <div class="switches">
    <div id="toggle-theme" class="toggle-theme">
      <img id="toggle-icon" src="./moon.png" alt="icon theme" class="toggle-theme__icon" />
      <p id="toggle-text" class="toggle-theme__text">Dark Mode</p>
    </div>
  </div>

  <script src="./index.js"></script>

</body>

</html>

```
:::

---


### * style.css

:::tip

 

```css
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body.dark {
    background-color: black;
    color: white;
    
  }
 
.switches {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
  }
  
  .toggle-theme {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .toggle-theme__icon {
    margin-right: 0.5em;
    margin-left: 1em;
    width: 30px;
  }
  .toggle-theme__text {
    font-size: 0.9rem;
  }

```
:::

---

### * index.js

:::tip

```js

const toggleTheme = document.getElementById("toggle-theme");
const toggleIcon = document.getElementById("toggle-icon");
const toggleText = document.getElementById("toggle-text");
 

const rootStyles = document.documentElement.style;

toggleTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (toggleIcon.src.includes("moon.png")) {
    toggleIcon.src = "./sun.png";
    toggleText.textContent = "Light Mode";
  } else {
    toggleIcon.src = "./moon.png";
    toggleText.textContent = "Dark Mode";
  }
});

toggleColors.addEventListener("click", (e) => {
  console.log(e.target.dataset);
  rootStyles.setProperty("--primary-color", e.target.dataset.color);
});

```


:::

---