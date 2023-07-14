import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

//import Swiper core and required modules

// import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

//import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

const data = [
  {
    avatar: AVTR1,
    name: 'Habiba',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae ullam iste et commodi, sunt similique officia ipsam labore enim voluptatum non illo doloremque distinctio provident temporibus placeat quaerat quisquam amet'
  },
  {
    avatar: AVTR2,
    name: 'Gulam Siddique',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae ullam iste et commodi, sunt similique officia ipsam labore enim voluptatum non illo doloremque distinctio provident temporibus placeat quaerat quisquam amet'
  },
  {
    avatar: AVTR3,
    name: 'Sameed Ali',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae ullam iste et commodi, sunt similique officia ipsam labore enim voluptatum non illo doloremque distinctio provident temporibus placeat quaerat quisquam amet'
  },
  {
    avatar: AVTR4,
    name: 'Aiman Hashmi',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae ullam iste et commodi, sunt similique officia ipsam labore enim voluptatum non illo doloremque distinctio provident temporibus placeat quaerat quisquam amet'
  },
]

const Testimonials = () => {
  return (
    <section id='testmonials'>
      <h5>Review from client</h5>
      <h2>Testmonials</h2>

      <Swiper className="container.testimonials__container"
        //install swiper Modules
        // modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}

        pagination={{ clickable: true }}

      >
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="" />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}
                </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials



// const Testimonials = () => {
//   return (
//     <section id='testmonials'>
//       <h5>Review from client</h5>
//       <h2>Testmonials</h2>

//       <div className="container.testimonials__container">
//         <article className="testimonial">
//           <div className="client__avatar">
//             <img src={AVTR1} alt="Avatar One" />
//           </div>
//           <h5 className='client__name'>Ernet Achiever</h5>
//           <small className='client__review'>
//             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae ullam iste et commodi, sunt similique officia ipsam labore enim voluptatum non illo doloremque distinctio provident temporibus placeat quaerat quisquam amet.

//           </small>
//         </article>
//         <article className="testimonial">
//           <div className="client__avatar">
//             <img src={AVTR1} alt="Avatar One" />
//           </div>
//           <h5 className='client__name'>Ernet Achiever</h5>
//           <small className='client__review'>
//             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae ullam iste et commodi, sunt similique officia ipsam labore enim voluptatum non illo doloremque distinctio provident temporibus placeat quaerat quisquam amet.

//           </small>
//         </article>
//         <article className="testimonial">
//           <div className="client__avatar">
//             <img src={AVTR1} alt="Avatar One" />
//           </div>
//           <h5 className='client__name'>Ernet Achiever</h5>
//           <small className='client__review'>
//             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae ullam iste et commodi, sunt similique officia ipsam labore enim voluptatum non illo doloremque distinctio provident temporibus placeat quaerat quisquam amet.

//           </small>
//         </article>
//       </div>
//     </section>
//   )
// }

// export default Testimonials