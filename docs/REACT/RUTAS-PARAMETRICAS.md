 

# RUTAS PARAMETRICAS

## Codigos en React


 >Route path="/apis/:id" element={UserDetails}  
  
 
## App.jsx

```jsx

import { Route, Routes } from 'react-router-dom'

import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Articulos from "./pages/Articulos";
import Apis from "./pages/Apis";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import UserDetails from './components/UserDetails';

function App() {

  return (
    <>
      <Navbar />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/articulos" element={<Articulos />} />
        <Route path="/apis" element={<Apis />} />
        <Route path="/apis/:id" element={<UserDetails />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App

```

## UserDetails.jsx

```jsx
import { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'

const UserDetails = () => {

    const { id } = useParams();
    console.log("Params:", id)
    const [userId, setUserId] = useState([])

    const getUserId = async (id) => {
        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            const data = await res.json()
            console.log("datos:", data)
            setUserId(data)

        } catch (e) {

            console.log("ERROR:", e)
        }
    }


    useEffect(() => {

        getUserId(id)
    }, [])


    return (
        <>
            <h2>UserDetails</h2>
            <section className='detalles'>
                <h3>ID: {userId.id}</h3>
                <h3>NAME: {userId.name}</h3>
                <h3>USERNAME: {userId.username}</h3>
                <h3>EMAIL: {userId.email}</h3>
                <h3>PHONE: {userId.phone}</h3>
                <h3>WEBSITE: {userId.website}</h3>
            </section>
            <NavLink to={`/apis`}> <h1>Volver a Apis</h1></NavLink>
        </>
    )
}

export default UserDetails

```

## UserCard.jsx

```jsx
import { NavLink } from "react-router-dom"


const UserCard = (props) => {

    const { user } = props
    return (
        <>
            <NavLink to={`/apis/${user.id}`}> <h2>{user.id} : {user.name}</h2></NavLink>
            <h4>Email: {user.email}</h4>
        </>
    )
}

export default UserCard

```

## index.css

```css
body {
  margin: 0;
  background-color: #242424;
  color:#fff;
   text-align: center;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
section{
    background-color: #676464;
    text-align: left;
    margin: 1rem ;
    padding: 1rem;
    border-radius: 1rem;
}

.detalles{
     background-color: #676464;
    text-align: left;
    margin: 1rem ;
    padding: 1rem;
    border-radius: 1rem;
    width: 50%;
}

```