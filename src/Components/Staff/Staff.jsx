import React from 'react'
import './Staff.scss'
import Carousel from 'react-bootstrap/Carousel';

import foto from '../Assets/dogs.jpg'
import foto1 from '../Assets/dogs1.jpg'
import foto2 from '../Assets/dogs2.jpg'

function Staff() {
  return (
    <div className='card'>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={foto1} />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <small>Nulla vitae elit libero, a pharetra augue mollis interdum.</small>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={foto1} />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</small>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={foto2} />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <small> Praesent commodo cursus magna, vel scelerisque nisl consectetur.</small>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Staff;