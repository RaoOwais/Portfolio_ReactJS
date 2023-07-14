import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'


const data = [
  {
    id: 1,
    image: IMG1,
    title: "Crypto Currency DashBoard & Financial Visualization",
    github: 'https://github.com',
    demo: 'https://dribble.com/'
  },
  {
    id: 2,
    image: IMG2,
    title: "Chart temlplate & Information in Figma",
    github: 'https://github.com',
    demo: 'https://dribble.com/'
  },
  {
    id: 3,
    image: IMG3,
    title: "E-Commerce App With Backend",
    github: 'https://github.com',
    demo: 'https://dribble.com/'
  },
  {
    id: 4,
    image: IMG4,
    title: "Data Visualization and Analyze Video",
    github: 'https://github.com',
    demo: 'https://dribble.com/'
  },
  {
    id: 5,
    image: IMG5,
    title: "Spotify Clone With React JS",
    github: 'https://github.com',
    demo: 'https://dribble.com/'
  },
  {
    id: 6,
    image: IMG6,
    title: "Create ChatGpt With NodeJS",
    github: 'https://github.com',
    demo: 'https://dribble.com/'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title} </h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>GitHub</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>live Demo</a></div>
              </article>
            )
          })
        }
      </div>
    </section>
  )

}

export default Portfolio;
// const Portfolio = () => {
//   return (
//     <section id='portfolio'>
//       <h5>My Recent Portfolio</h5>
//       <h2>Portfoloio</h2>

//       <div className="container portfolio__container">
//         <article className="portfolio__item">
//           <div className="portfolio__item-image">
//             <img src={IMG1} alt="" />
//           </div>
//           <h3>This is a portfolio item title</h3>
//           <div className="portfolio__item-cta">
//             <a href="https://github.com" className='btn' target='_blank'>GitHub</a>
//             <a href="https://gribble.com/Alien_pixels" className='btn btn-primary' target='_blank'>live Demo</a></div>
//         </article>
//         <article className="portfolio__item">
//           <div className="portfolio__item-image">
//             <img src={IMG2} alt="" />
//           </div>
//           <h3>This is a portfolio item title</h3>
//           <div className="portfolio__item-cta">
//             <a href="https://github.com" className='btn' target='_blank'>GitHub</a>
//             <a href="https://gribble.com/Alien_pixels" className='btn btn-primary' target='_blank'>live Demo</a></div>
//         </article>
//         <article className="portfolio__item">
//           <div className="portfolio__item-image">
//             <img src={IMG3} alt="" />
//           </div>
//           <h3>This is a portfolio item title</h3>
//           <div className="portfolio__item-cta">
//             <a href="https://github.com" className='btn' target='_blank'>GitHub</a>
//             <a href="https://gribble.com/Alien_pixels" className='btn btn-primary' target='_blank'>live Demo</a></div>
//         </article>
//         <article className="portfolio__item">
//           <div className="portfolio__item-image">
//             <img src={IMG4} alt="" />
//           </div>
//           <h3>This is a portfolio item title</h3>
//           <div className="portfolio__item-cta">
//             <a href="https://github.com" className='btn' target='_blank'>GitHub</a>
//             <a href="https://gribble.com/Alien_pixels" className='btn btn-primary' target='_blank'>live Demo</a></div>
//         </article>
//         <article className="portfolio__item">
//           <div className="portfolio__item-image">
//             <img src={IMG5} alt="" />
//           </div>
//           <h3>This is a portfolio item title</h3>
//           <div className="portfolio__item-cta">
//             <a href="https://github.com" className='btn' target='_blank'>GitHub</a>
//             <a href="https://gribble.com/Alien_pixels" className='btn btn-primary' target='_blank'>live Demo</a></div>
//         </article>
//         <article className="portfolio__item">
//           <div className="portfolio__item-image">
//             <img src={IMG6} alt="" />
//           </div>
//           <h3>This is a portfolio item title</h3>
//           <div className="portfolio__item-cta">
//             <a href="https://github.com" className='btn' target='_blank'>GitHub</a>
//             <a href="https://gribble.com/Alien_pixels" className='btn btn-primary' target='_blank'>live Demo</a></div>
//         </article>
//       </div>
//     </section>
//   )
// }

// export default Portfolio
// https://youtu.be/G-Cr00UYokU?t=7490 2:04