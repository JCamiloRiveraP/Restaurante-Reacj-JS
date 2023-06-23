import React from 'react';
import { images } from '../../constants';

import './AboutUs.css';


const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt="Letra G" />
    </div>
    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>Nosotros</h1>
        <img src={images.spoon} alt="Cuchara Nosotros" className='sponn__img' />
        <p className='p__opensans'>Cras lorem leo, imperdiet a molestie in, cursus nec felis. Nulla facilisis magna sed arcu scelerisque, et faucibus mi consequat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. </p>
        <button type='button' className='custom__button'>Conoce más</button>
      </div>

      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} alt="Cuchillo" />
      </div>

      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Historia</h1>
        <img src={images.spoon} alt="Cuchara Nosotros" className='sponn__img' />
        <p className='p__opensans'>Cras lorem leo, imperdiet a molestie in, cursus nec felis. Nulla facilisis magna sed arcu scelerisque, et faucibus mi consequat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. </p>
        <button type='button' className='custom__button'>Conoce más</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
