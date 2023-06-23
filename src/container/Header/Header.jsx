import React from 'react';
import { images } from '../../constants'
import { SubHeading } from '../../components';

import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className="app__wrapper_info">
      <SubHeading title="Persigue el nuevo sabor" />
      <h1 className='app__header-h1'>La Clave de la Buena Mesa</h1>
      <p className='p__opensans' style={{ margin: '2rem 0' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut interdum urna. Aenean maximus quam in turpis gravida consequat. </p>
      <button type='button' className='custom__button'>Explore Nuestro Menú</button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.welcome} alt="Header Img" />
    </div>
  </div>
);

export default Header;
