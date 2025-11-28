import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <>
            <nav className="navbar">
                <div className="desktopMenu" style={{margin: '0 auto', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%'}}>
                    <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
                    <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">About</Link>
                    <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-80} duration={500} className="desktopMenuListItem">Projects</Link>
                    <Link activeClass='active' to='certification' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Certification</Link>
                </div>
                <button className="desktopMenuBtn" onClick={() => {
                    document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
                }}>
                    Contact Me
                </button>
                
                <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
                    <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
                    <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>About</Link>
                    <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Projects</Link>
                    <Link activeClass='active' to='certification' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Certification</Link>
                    <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Contact</Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar;