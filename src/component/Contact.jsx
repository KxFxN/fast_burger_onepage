import React from 'react'
import {AiFillInstagram,AiFillTwitterCircle} from 'react-icons/ai'
import {RiFacebookCircleFill} from 'react-icons/ri'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {ImLocation} from 'react-icons/im'
import {MdEmail} from 'react-icons/md'

import '../CSS/Contact.css'

const Contact = () =>{
  return (
        <div className="container-contact" id='Contact'>
            <div className='logo-footer'>
                <h3>
                    LOGO.
                </h3>
                <span>Copyright © KF. Designed by <a href="https://kf-portfolio.web.app/">Nakarin</a></span>
            </div>
            <div className="box-footertext">
                <div className="footer-text">
                    <BsFillTelephoneFill id='icon-footer'/>
                    <small>1234567890</small>
                </div>
                <div className="footer-text">
                    <ImLocation id='icon-footer'/>
                    <small>
                        Lorem ipsum dolor sit amet.
                    </small>
                </div>
                <div className="footer-text">
                    <MdEmail id='icon-footer'/>
                    <small>
                        sakarin14184@gmail.com
                    </small>
                </div>
            </div>
            <div className="social-footer">
                <h3>About the company</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, reiciendis assumenda ex adipisci excepturi quasi.</p>
                <div className="box-social">
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        <RiFacebookCircleFill/>
                    </a>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        <AiFillInstagram/>
                    </a>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        <AiFillTwitterCircle/>
                    </a>
                </div>
            </div>
        </div>
  )
}

export default Contact