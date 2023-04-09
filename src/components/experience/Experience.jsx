import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3, DiMsqlServer, DiJava, DiDotnet} from 'react-icons/di'
import {TbBrandJavascript} from 'react-icons/tb'
import {FaBootstrap, FaReact, FaPhp, FaNodeJs} from 'react-icons/fa'
import {SiMysql, SiExpress, SiMongodb, SiPython, SiDjango} from 'react-icons/si'


const Experience = () => {
  return (
    <section id='experience' className="experience__section">
      <h5>Let's Play</h5>
      <h2>Game Stack</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Online Games</h3>
          <div className="experience__content">
            <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Dota 2</h4>
              </div>
            </article>
            <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Valorant</h4>
              </div>
            </article>
            <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Mobile Legends</h4>
              </div>
            </article>
            <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Genshin Impact</h4>
              </div>
            </article>
            <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>League of Legends</h4>
              </div>
            </article>
          </div>
        </div>
        
        <div className="experience__backend">
        <h3>LAN Games</h3>
        <div className="experience__content">
            <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Warcraft</h4>
              </div>
            </article>
            <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Dota 1</h4>
              </div>
            </article>
            <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Left4Dead</h4>
              </div>
            </article>
            <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Counter Strike</h4>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__programming">
        <h3>Offline Games</h3>
        <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>GTA Series</h4>
              </div>
            </article>
            <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Minecraft</h4>
              </div>
            </article>
            <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Asphalt</h4>
              </div>
            </article>
            <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Need for Speed</h4>
              </div>
            </article>
            <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Call of Duty 4</h4>
              </div>
            </article>
            <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>NBA 2K</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience