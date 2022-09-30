import React from 'react';
import './intro.css'
import headshot from '../../img/headshot.png'
import resume from '../../assets/resumeNinoSpasik.pdf'
import { FaLinkedin, FaEnvelope, FaFile, FaGithub } from "react-icons/fa"
import { IconContext } from "react-icons"

const Intro = () => {
  return (
    <div className='i'>
        <div className='i-left'>
            <div className='i-left-wrapper'>
                <h2 className='i-intro'> Hello, my name is </h2>
                <h1 className='i-name'> Nino Spasik </h1>
                {/* <div className="i-title">
                    <div className="i-title-wrapper">
                        <div className="i-title-item"> Software Developer </div>
                        <div className="i-title-item"> Data Engineer </div>
                    </div>
                </div> */}
                <p className="i-desc">
                I am a young professional with hands-on experience in data analysis, process 
                improvement and technology integration as well as developing
                applications and tools while implementing user efficiency and 
                intelligent design.
                </p>
                <p className="i-desc">
                I am currently seeking 2022 new grad opportunities, here's my <a href={resume} target="_blank" rel="noreferrer"> resume</a>.
                </p>
                <p className="i-desc">
                <br></br>
                </p>
                <p className="i-desc">
                <a href="https://github.com/NinoS99" target="_blank" rel="noreferrer">
                  <IconContext.Provider value={{ style: { fontSize: '30px', color: '#AAAAAA' } }}>
                    <FaGithub style={{ marginLeft: '0px'}} />
                  </IconContext.Provider>
                </a>
                <a href="https://www.linkedin.com/in/ninos/" target="_blank" rel="noreferrer">
                  <IconContext.Provider value={{ style: { fontSize: '30px', color: '#AAAAAA' } }}>
                    <FaLinkedin style={{ marginLeft: '20px'}} />
                  </IconContext.Provider>
                </a>
                <a href="mailto:nspasik@outlook.com" target="_blank" rel="noreferrer">
                  <IconContext.Provider value={{ style: { fontSize: '30px', color: '#AAAAAA' } }}>
                    <FaEnvelope style={{ marginLeft: '20px'}} />
                  </IconContext.Provider>
                </a>
                </p>
            </div>
        </div>
        <div className='i-right'>
            <div className="i-bg"></div>
            <img src={headshot} alt="" className="i-img" />
        </div>
    </div>
  )
}

export default Intro