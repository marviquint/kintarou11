import React from 'react'
import './portfolio.css'
import vidValo from '../../assets/Valorant.mp4'
import vidML from '../../assets/ML.mp4';
import vidDota from '../../assets/Dota.mp4';
import vidGI from '../../assets/GI.mp4';

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Gaming Experience</h5>
      <h2>Game Highlights</h2>

      <div className="container portfolio__container">
        <div className="video__ML">
         <video autoPlay loop muted src={vidGI} id="ML__video" />
        </div>
        <div className="video__Dota">
          <video autoPlay loop muted src={vidDota} id="Dota__video" />
        </div>
        <div className="video__Valo">
          <video autoPlay loop muted src={vidValo} id="Valo__video" />
        </div>
        <div className="video__ML">
         <video autoPlay loop muted src={vidML} id="ML__video" />
        </div>
      </div>
    </section>
  )
}

export default Portfolio