import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {FaTiktok} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#about" className="footer__logo">Kintarou</a>

      <ul className="permalinks">
        <li><a href="#about">Home</a></li>
        <li><a href="#experience">Contact</a></li>
        <li><a href="#portfolio">Games</a></li>
        <li><a href="#contact">Clips</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://facebook.com/kintarou.11"><BsFacebook/></a>
        <a href="https://instagram.com/kintarou.11"><BsInstagram/></a>
        <a href="https://tiktok.com/@kintarou.11"><FaTiktok/></a>
      </div>

      <div className="footer__copyright">
        <h5>&copy; Kintarou. All rights Reserved.</h5>
      </div>
    </footer>
  )
}

export default Footer