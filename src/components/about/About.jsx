import React from 'react';
import './about.css';
import ML from "../../assets/about-me.png";
import { BsAward } from 'react-icons/bs';
import { FiUsers } from 'react-icons/fi';
import { TbFolderStar } from 'react-icons/tb';
// import FaAward from 'react-icons/fa';
// import FiUsers from 'react-icons/fa';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ML} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BsAward className='about__icon' />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className="about__card">
              <FiUsers className='about__icon' />
              <h5>Client</h5>
              <small>200+ Clients</small>
            </article>
            <article className="about__card">
              <TbFolderStar className='about__icon' />
              <h5>Projects</h5>
              <small>80+ Projects</small>
            </article>
          </div>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum blanditiis reprehenderit illo expedita rerum ad, hic ipsam. Corporis obcaecati quo aperiam ad nihil, repellat veniam magni qui. Recusandae, eligendi beatae?</p>
          <a href="#contact" alt="contact" className='btn btn-primary'>Let's Talk</a>
        </div>

      </div>

    </section>
  )
}

export default About