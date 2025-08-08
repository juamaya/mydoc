---
sidebar_position: 4
---

# App

## Crear App con Vite

## main.jsx

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
```

## index.css

```jsx

 *{
    box-sizing: border-box;
 }
 body{
    margin: 0;
 }
 ul{
    margin: 0;
    padding: 0;
    list-style-type:  none;
 }


```

## App.jsx

```jsx
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import NotesPage from "./pages/NotesPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/NotesPage" element={<NotesPage />} />
      </Routes>
    </>
  );
}

export default App;
```

## Home.jsx

```jsx
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <Header />
      <div>Home</div>
    </>
  );
};

export default Home;
```

## NotesPage.jsx

```jsx
import Header from "../components/Header";

function NotesPage() {
  return (
    <>
      <Header />
      <div>NotesPage</div>
    </>
  );
}

export default NotesPage;
```

## Header.jsx

```jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h2 className="title">Notes App</h2>
      <nav>
        <ul className="nav-list">
          <li>
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/NotesPage" className="link">
              Notas
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
```

## Header.css

```css
.header {
  background-color: #5151ec;
  color: white;
  padding: 30px;
  text-align: center;

  .title {
    margin: 0;
  }

  .nav-list {
    display: flex;
    justify-content: space-around;
    .link {
      color: white;
      text-decoration: none;
    }
  }
}
```
