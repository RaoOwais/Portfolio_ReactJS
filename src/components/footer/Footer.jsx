import React from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { BsTwitter } from 'react-icons/bs'

const Footer = () => {
    return (
        <footer>
            <a href="/" alt="" className='footer__logo'>BLACK</a>

            <ul className="permalinks">
                <li><a href="/" alt="" >Home</a></li>
                <li><a href="#about" alt="" >About</a></li>
                <li><a href="#experience" alt="" >Experience</a></li>
                <li><a href="#services" alt="" >Services</a></li>
                <li><a href="#portfolio" alt="" >Portfolio</a></li>
                <li><a href="#testimonial" alt="" >Testimonail</a></li>
                <li><a href="#contact" alt="" >Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://facebook.com" alt="" ><FaFacebookF /></a>
                <a href="https://instagram.com" alt="" ><FiInstagram /></a>
                <a href="https://twitter.com" alt="" ><BsTwitter /></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; BLACK PROGRAMMER. ALL Right Reserved.</small>
            </div>
        </footer>
    )
}

export default Footer