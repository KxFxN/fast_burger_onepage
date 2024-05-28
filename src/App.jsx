import { useState } from 'react'
import Nav from './component/Nav'
import Home from './component/Home'
import Product from './component/Product'
import Contact from './component/Contact'
import './App.css'

function App() {

  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header>
        <Nav handleNavClick={handleNavClick} />
      </header>
      <section>
        <Home/>
        <Product/>
      </section>
      <footer>
        <Contact/>
      </footer>
    </>
  )
}

export default App
