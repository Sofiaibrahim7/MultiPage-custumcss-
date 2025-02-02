import React from 'react';
import dress1 from '../assets/dress1.jpg';
import dress2 from '../assets/dress2.jpg';
import dress3 from '../assets/dress3.jpg';
import './Designs.css';

function Designs() {
  return (
    <div className="designs">
      <h2>Our Dress Designs</h2>
      <div className="designs-grid">
        <div className="design-card">
          <img src={dress1} alt="Dress 1" className="design-image" />
          <h3>Elegant Evening Gown</h3>
          <p>Perfect for formal events and weddings.</p>
        </div>
        <div className="design-card">
          <img src={dress2} alt="Dress 2" className="design-image" />
          <h3>Casual Summer Dress</h3>
          <p>Lightweight and comfortable for summer outings.</p>
        </div>
        <div className="design-card">
          <img src={dress3} alt="Dress 3" className="design-image" />
          <h3>Modern Party Wear</h3>
          <p>Stand out with this trendy dress.</p>
        </div>
      </div>
    </div>
  );
}

export default Designs;
