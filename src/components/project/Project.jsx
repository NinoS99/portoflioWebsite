import React from 'react'
import './project.css';
import { FaLink, FaGithub, FaInfo } from "react-icons/fa"
import { IconContext } from "react-icons"

const Project = ({img, gitLink, webLink, name, desc}) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <div className='p-title'>
        {name}
      </div>
      <a href={gitLink} target="_blank" rel="noreferrer">
        <IconContext.Provider value={{ style: { fontSize: '30px', color: '#AAAAAA' } }}>
            <FaGithub style={{ margin: '5px'}} />
        </IconContext.Provider>
      </a>
      {webLink ? 
        <a href={webLink} target="_blank" rel="noreferrer">
            <IconContext.Provider value={{ style: { fontSize: '30px', color: '#AAAAAA' } }}>
                <FaLink style={{ margin: '5px'}} />
            </IconContext.Provider>
        </a> 
        : null }
      {/* <img src={img} alt="" className="p-img" /> */}
      <div className='p-desc'>{desc}</div>
      </div>

  )
}

export default Project;