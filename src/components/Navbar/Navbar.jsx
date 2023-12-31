import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className='app__navbar' >
      <div className='app__navbar-logo'>
        <img src={images.gericht} alt="Logo" />
      </div>
      <ul className='app__navbar-links'>
        <li className='p__opensans'><a href='#home'>Inicio</a></li>
        <li className='p__opensans'><a href='#about'>Nosotros</a></li>
        <li className='p__opensans'><a href='#menu'>Menú</a></li>
        <li className='p__opensans'><a href='#awards'>Premios</a></li>
        <li className='p__opensans'><a href='#contact'>Contacto</a></li>
      </ul>
      <div className='app__navbar-login'>
        <a href="#login" className='p__opensans'>Login / Registrarse</a>
        <div />
        <a href="/" className='p__opensans'>Reservación</a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)} className='app__menu_logo' />

        {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
            <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)} />
            <ul className='app__navbar-smallscreen_links'>
              <li className='p__opensans'><a href='#home'>Inicio</a></li>
              <li className='p__opensans'><a href='#about'>Nosotros</a></li>
              <li className='p__opensans'><a href='#menu'>Menú</a></li>
              <li className='p__opensans'><a href='#awards'>Premios</a></li>
              <li className='p__opensans'><a href='#contact'>Contacto</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
};


export default Navbar;
