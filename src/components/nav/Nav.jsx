/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {RiFileUserLine} from 'react-icons/ri'
import {AiTwotonePhone} from 'react-icons/ai'
import {MdWork} from 'react-icons/md'
import {AiFillProject} from 'react-icons/ai'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active': ''}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active': ''}><RiFileUserLine/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active': ''}><MdWork/></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active': ''}><AiFillProject/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active': ''}><AiTwotonePhone/></a>
    </nav>
  )
}

export default Nav