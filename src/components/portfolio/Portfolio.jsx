import React from 'react'
import './portfolio.css'
import Valorant from '../../assets/Valorant.png'
import ML from '../../assets/ML.png'
import GI from '../../assets/GI.png'
import Dota from '../../assets/Dota.png'
import vidValo from '../../assets/Valorant.mp4'
import vidML from '../../assets/ML.mp4';
import vidDota from '../../assets/Dota.mp4';
import vidGI from '../../assets/GI2.mp4';


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Gaming Experience</h5>
      <h2>Game Highlights</h2>

      <div className="container portfolio__container">
      <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={GI} alt=""/>
            </div>
        </article>
        <div className="video__ML">
         <video autoPlay loop muted src={vidGI} id="ML__video" />
        </div>
        <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={Dota} alt=""/>
            </div>
        </article>
        <div className="video__Dota">
          <video autoPlay loop muted src={vidDota} id="Dota__video" />
        </div>
        <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={Valorant} alt=""/>
            </div>
        </article>
        <div className="video__Valo">
          <video autoPlay loop muted src={vidValo} id="Valo__video" />
        </div>
        <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={ML} alt=""/>
            </div>
        </article>
        <div className="video__ML">
         <video autoPlay loop muted src={vidML} id="ML__video" />
        </div>
      </div>
    </section>
  )
}

export default Portfolio