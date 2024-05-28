import React,{useState} from 'react'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
import '../CSS/Nav.css'

const Nav = ({handleNavClick}) => {
    const [click,setClick] = useState(false)
    
    const eclick =()=>{
        if (!click){
          setClick(true)
        }else{
          setClick(false)
        }
    }

  return (
    <nav className='container-nav'>
        <div className='logo'>
            <h3>
                LOGO.
            </h3>
        </div>
        <div className='nav-manu'>
            <ul className={click ? 'navbar active':'navbar'}>
                <li onClick={() => {handleNavClick("Home"),setClick(false)}}>Home</li>
                <li onClick={() => {handleNavClick("Product"),setClick(false)}}>Product</li>
                <li onClick={() => {handleNavClick("Contact"),setClick(false)}}>Contact</li>
            </ul>
        </div>
        <div className="clicknav" onClick={eclick}>
        {click ? (
          <AiOutlineClose className="navclose" onClick={eclick}/>
        ):(
          <AiOutlineMenu className="navshow" onClick={eclick}/>
        )}
      </div>
    </nav> 
  )
}

export default Nav