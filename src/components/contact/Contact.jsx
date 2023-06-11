import React from 'react'
import './contact.css'
import {BsDiscord} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {IoLogoGameControllerB} from 'react-icons/io'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <BsFacebook className="contact__option-icon"/>
            <h4>Facebook Page</h4>
            <h5>Kintarou</h5>
            <a href="https://m.me/kintarouhoshi">Send Message</a>
          </article>
          <article className="contact__option">
            <BsInstagram className="contact__option-icon"/>
            <h4>Instagram</h4>
            <h5>@kintarou.11</h5>
            <a href="https://www.instagram.com/kintarou.11/">Send DM</a>
          </article>
          <article className="contact__option">
            <BsDiscord className="contact__option-icon"/>
            <h4>Discord</h4>
            <h5>Kintarou #4463</h5>
            <a href="https://discord.com/channels/@kintarou">Send Message</a>
          </article>
        </div>
        <div className="contact__options">
          <article className="contact__option">
            <IoLogoGameControllerB className="contact__option-icon"/>
            <h4>Dota 2</h4>
            <h5>Kintarou</h5>
            <h4>ID #: 872533417</h4>
          </article>
          <article className="contact__option">
            <IoLogoGameControllerB className="contact__option-icon"/>
            <h4>Valorant</h4>
            <h5>Riot ID: Kintarou</h5>
            <h4>Tagline: #Hoshi</h4>
          </article>
          <article className="contact__option">
            <IoLogoGameControllerB className="contact__option-icon"/>
            <h4>Mobile Legends</h4>
            <h5>ᴋɪɴᴛᴀʀō✯</h5>
            <h4>ID #: 531925027</h4>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Contact