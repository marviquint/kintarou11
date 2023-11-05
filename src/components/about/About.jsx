/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import './about.css'
import MARVS from '../../assets/MARVS.png'
import {FaTrophy} from 'react-icons/fa'
import {IoLogoGameControllerB} from 'react-icons/io'

const About = () => {
  return (
    <section id='about'>
      <h5>Welcome to</h5>
      <h2>Kintarou's Site</h2>
      
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={MARVS} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <FaTrophy className="about__icon"/>
                <h3>Experience</h3>
                <h5>12+ years of Experience</h5>
              </article>
              <article className="about__card">
                <IoLogoGameControllerB className="about__icon"/>
                <h3>Games</h3>
                <h5>Played many Games</h5>
              </article>
            </div>

            <p className="typing-text" style={{color: " #A57C01"}}> 
              Hello, this is Kintarou.
            </p>
            <p style={{color: " #A57C01"}}> 
            I'm a Gamer and Game Content Creator for various games including, Genshin Impact, Dota, Valorant, Mobile Legends and many more. I have 12 years of Gaming experience and has played various games, whether it's Online Game, LAN Game, or an Offline Game. I welcome all of you to my Website.
            </p>


            <a href="#contact" className="btn">Let's Play</a>
          </div>
      </div>
    </section>
  )
}

export default About