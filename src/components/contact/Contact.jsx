import React from 'react'
import './contact.css'
import { FaPhone, FaLocationArrow, FaEnvelope } from "react-icons/fa"
import { IconContext } from "react-icons"
import { useRef, useContext, useState } from 'react'
import emailjs from 'emailjs-com';

const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
          .sendForm(
            "service_1d37ib6",
            "template_75898w5",
            formRef.current,
            "1FJ47k2hanRWxjJ0Z"
          )
          .then(
            (result) => {
              console.log(result.text);
              setDone(true)
            },
            (error) => {
              console.log(error.text);
            }
          );
      };

  return (
    <div className='c'>
        <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                <h1 className="c-title"> Connect With Me! </h1>
                <div className="c-info">
                    <div className="c-info-item">
                    <IconContext.Provider value={{ style: { fontSize: '30px', color: '#AAAAAA' } }}>
                    <FaPhone style={{ marginLeft: '0px', marginRight: '10px'}} />
                    </IconContext.Provider>
                        +1 226-808-0457
                    </div>
                    <div className="c-info-item">
                    <IconContext.Provider value={{ style: { fontSize: '30px', color: '#AAAAAA' } }}>
                    <FaEnvelope style={{ marginLeft: '0px', marginRight: '10px'}} />
                    </IconContext.Provider>
                        nspasik@outlook.com
                    </div>
                    <div className="c-info-item">
                    <IconContext.Provider value={{ style: { fontSize: '30px', color: '#AAAAAA' } }}>
                    <FaLocationArrow style={{ marginLeft: '0px', marginRight: '10px'}} />
                    </IconContext.Provider>
                        Waterloo, Ontario
                    </div>
                </div>
            </div>
                <div className="c-right">
                    <p className="c-desc">
                        Let's get in touch!
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}> 
                        <input type="text" placeholder='Name' name='user_name'/>
                        <input type="text" placeholder='Subject' name='user_subject'/>
                        <input type="text" placeholder='Email' name='user_email'/>
                        <textarea rows='5'placeholder='Message' name='message' />
                        <button> Submit </button>
                        {done && " Thank you for reaching out!"}
                    </form>
                </div>
            </div>
    </div>
  )
}

export default Contact