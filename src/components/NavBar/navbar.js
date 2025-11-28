import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-scroll';
import contactIcon from '../../assets/contact.png';
import menuIcon from '../../assets/menu.png';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <>
            <nav className="navbar" style={{position: 'fixed', top: 0, left: 0, width: '100vw', zIndex: 100}}>
                <div className="desktopMenu" id="desktopMenu">
                    <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
                    <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">About</Link>
                    <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-80} duration={500} className="desktopMenuListItem">Projects</Link>
                    <Link activeClass='active' to='certification' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Certification</Link>
                </div>
                <button className="desktopMenuBtn" id="desktopMenuBtn" style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end', marginLeft: 'auto', gap: '0.5rem', background: '#ffe066', color: '#232526', borderRadius: '0.5rem', boxShadow: '0 2px 8px rgba(0,0,0,0.10)', fontWeight: 600, fontSize: '1rem', border: 'none', padding: '0.5rem 1.2rem', transition: 'background 0.3s, color 0.3s'}} onClick={() => {
                    document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
                }}>
                    <img src={contactIcon} alt="Contact" style={{height: '1.5rem', marginRight: '0.5rem'}} />
                    Contact
                </button>
                <img src={menuIcon} alt="Menu" className="mobMenu" style={{position: 'absolute', right: '1.2rem', top: '1.2rem', height: '2.8rem', width: '2.8rem', borderRadius: '0.5rem', boxShadow: '0 2px 8px rgba(0,0,0,0.10)', background: '#ffe066', padding: '0.2rem', transition: 'box-shadow 0.2s, background 0.2s'}} onClick={() => setShowMenu(!showMenu)} />
                
                {/* Mobile menu: show all links only when menu.png is clicked */}
                {showMenu && (
                  <div className="navMenu" id="navMenu">
                    <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
                    <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>About</Link>
                    <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Projects</Link>
                    <Link activeClass='active' to='certification' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Certification</Link>
                    <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Contact</Link>
                  </div>
                )}
            </nav>
        </>
    )
}

export default Navbar;
