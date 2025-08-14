import React from 'react';
import '../styles/Home.css';
import Navbar from './Navbar';
function Home() {
  return (
    <div className="container">
      <h1>Shubhankar Kumar Biswas</h1>
      <h2 className="subtitle">(Ceramics and Glass) Art Works</h2>
      <Navbar />
      <div className="image-caption">
        Shubhankar Kumar Biswas (Ceramics and Glass) Art Works
      </div>
      <div className="contact">
        📧 artistshubhankar@gmail.com <br />
        📞 +91-9555452173
      </div>
    </div>
  );
}

export default Home;