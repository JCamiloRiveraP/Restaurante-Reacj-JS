import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>
    <div className='app__wrapper_info'>
      <SubHeading title="Contacto" />
      <h1 className='headtext__cormorant' style={{ marginBottom: '3rem' }}>Encuéntranos</h1>
      <div className='app__wrapper-content'>
        <p className='p__opensans'>En algún lugar de la web, Bogotá - Colombia</p>
        <p className='p__cormorant' style={{ color: '#dcca87', margin: '2rem 0' }}>Servicio al Cliente</p>
        <p className='p__opensans'>Lun - Vie: 10:00 am - 02:00 pm</p>
        <p className='p__opensans'>Sab - Dom 10:00 am - 03:00 pm</p>
      </div>
      <button className='custom__button' style={{ marginTop: '2rem' }}> Visítanos</button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.findus} alt="Encuéntranos" />
    </div>
  </div>
);

export default FindUs;
