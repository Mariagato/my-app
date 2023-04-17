import React from 'react';
import ditto1 from "../assets/img/gato.png"
import ditto2 from "../assets/img/1200px-Eevee.png"
import ditto3 from "../assets/img/Snorlax-Pokemon-PNG-Images-HD.png"

export const Gallery = () => {
  return (
    <section className="photo" id="photo">
    <div className="container mt-5">
      <h1 className='text-1'>Gallery</h1>
      <div className="row">
        <div className="col-md-4">
          <img src={ditto1} alt="Image 1" className="img-fluid" />
        </div>
        <div className="col-md-4">
          <img src={ditto2} alt="Image 2" className="img-fluid" />
        </div>
        <div className="col-md-4">
          <img src={ditto3} alt="Image 3" className="img-fluid" />
        </div>
      </div>
    </div>
    </section>
  );
};

export default Gallery;
