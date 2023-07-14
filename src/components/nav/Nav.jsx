import React, { useState } from 'react'
import "./nave.css"
import { FiHome } from "react-icons/fi"
import { AiOutlineUser } from "react-icons/ai"
import { AiOutlineBook } from "react-icons/ai"
import { RiServiceLine } from "react-icons/ri"
import { MdOutlinePermContactCalendar } from "react-icons/md"

const Nav = () => {
    const [activeNav, setActiveNav] = useState("#")
    return (
        <nav>
            <a href="/" alt="Home" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ""}>
                <FiHome />
            </a>
            <a href="#about" alt="About" onClick={() => setActiveNav('#about')} className={activeNav === '#' ? 'active' : ""} >
                <AiOutlineUser />
            </a>
            <a href="#experience" alt="Experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#' ? 'active' : ""}>
                <AiOutlineBook />
            </a>
            <a href="#service" alt="Services" onClick={() => setActiveNav('#services')} className={activeNav === '#' ? 'active' : ""}>
                <RiServiceLine />
            </a>
            <a href="#contact" alt="Contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#' ? 'active' : ""}>
                <MdOutlinePermContactCalendar />
            </a>
        </nav >
    )
}

export default Nav