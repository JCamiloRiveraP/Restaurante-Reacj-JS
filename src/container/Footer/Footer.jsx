import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';

import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />

    <div className='app__footer-links'>

      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contáctanos</h1>
        <p className='p__opensans'>En algún lugar de la web, Bogotá - Colombia</p>
        <p className='p__opensans'>+1 212-344-1230</p>
        <p className='p__opensans'>+1 212-555-1230</p>
      </div>

      <div className='app__footer-links_logo'>
        <img src={images.gericht} alt="Footer Logo" />
        <p className='p__opensans'>"La mejor manera de encontrarte a ti mismo es perderte al servicio de los demás."</p>
        <img src={images.spoon} alt="Imagen Cuchara" style={{ marginTop: '15' }} />
        <div className='app__footer-links_icons'>
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className='app__footer-links_work'>
        <h1 className='app__footer-headtext'>Servicio al Cliente</h1>
        <p className='p__opensans'>Lunes - Viernes:</p>
        <p className='p__opensans'>10:00 am - 02:00 pm</p>
        <p className='p__opensans'>Sábado - Domingo:</p>
        <p className='p__opensans'>10:00 am - 03:00 pm</p>
      </div>
    </div>
    <div className='footer__copyright'>
      <p className='p__opensans'>2023 Gerícht. Todos los derechos reservados</p>
    </div>
  </div>
);

export default Footer;
