import Container from './Container'
import styles from '../styles/components/Testimonial.module.scss'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { ReactNode, useEffect, useState } from 'react'
import { Arrow, Stars } from '../common/icons'
import Image from 'next/image'

interface TestimonialType {
  title: string
  text: string
  user: {
    imgUrl: string
    name: string
    location: string
  }
}

const testimonials = [
  {
    title: '“Love mathematics because of Besnik Academy”',
    text: '"The curriculum was directly targeted toward applied techniques with high profile projects – real datasets with industry partners. It helped me achieve my career transition goal."',
    user: {
      imgUrl: '/wilson.png',
      name: 'Wilson Thai',
      location: 'Ontario, Canada',
    },
  },

  {
    title: '“There is so much to see and do all over world”',
    text: '"The curriculum was directly targeted toward applied techniques with high profile projects – real datasets with industry partners. It helped me achieve my career transition goal."',
    user: {
      imgUrl: '/milena.png',
      name: 'Milena Belmar',
      location: 'Argentina',
    },
  },

  {
    title: '“Love mathematics because of Besnik Academy”',
    text: '"The curriculum was directly targeted toward applied techniques with high profile projects – real datasets with industry partners. It helped me achieve my career transition goal."',
    user: {
      imgUrl: '/wilson.png',
      name: 'Wilson Thai',
      location: 'Ontario, Canada',
    },
  },

  {
    title: '“There is so much to see and do all over world”',
    text: '"The curriculum was directly targeted toward applied techniques with high profile projects – real datasets with industry partners. It helped me achieve my career transition goal."',
    user: {
      imgUrl: '/milena.png',
      name: 'Milena Belmar',
      location: 'Argentina',
    },
  },

  {
    title: '“Love mathematics because of Besnik Academy”',
    text: '"The curriculum was directly targeted toward applied techniques with high profile projects – real datasets with industry partners. It helped me achieve my career transition goal."',
    user: {
      imgUrl: '/wilson.png',
      name: 'Wilson Thai',
      location: 'Ontario, Canada',
    },
  },

  {
    title: '“There is so much to see and do all over world”',
    text: '"The curriculum was directly targeted toward applied techniques with high profile projects – real datasets with industry partners. It helped me achieve my career transition goal."',
    user: {
      imgUrl: '/milena.png',
      name: 'Milena Belmar',
      location: 'Argentina',
    },
  },
]

export default function Testimonial() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [mob, setMob] = useState(false)

  useEffect(() => {
    setMob(window.matchMedia('(max-width: 560px)').matches)
  }, [])

  const prevCarouselHandler = () => {
    if (currentSlide == 0) return
    setCurrentSlide(currentSlide - 1)
  }
  const nextCarouselHandler = () => {
    if (currentSlide >= testimonials.length - 1) return
    setCurrentSlide(currentSlide + 1)
  }

  return (
    <Container className={styles.Testimonial}>
      <div className={styles.header}>
        <h2>Transform your life through education</h2>

        <div className={styles.sliderController}>
          <div onClick={prevCarouselHandler}>
            <Arrow />
          </div>

          <div onClick={nextCarouselHandler} className={styles.right}>
            <Arrow />
          </div>
        </div>
      </div>

      <Carousel
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        emulateTouch
        selectedItem={currentSlide}
        className={styles.carousel}
        onChange={(index: number, item: ReactNode) => setCurrentSlide(index)}
      >
        {mob
          ? testimonials.map((testimonial) => (
              <div className={styles.sliderSlide} key={Math.random()}>
                <div className={styles.sliderItem} key={Math.random()}>
                  <h3>{testimonial.title}</h3>
                  <p className={styles.subtitle}>{testimonial.text}</p>

                  <div className={styles.userData}>
                    <div className={styles.img}>
                      <Image
                        src={testimonial.user.imgUrl}
                        layout="fill"
                        alt="user img"
                      />
                    </div>

                    <div className={styles.userText}>
                      <h5>{testimonial.user.name}</h5>
                      <p>{testimonial.user.location}</p>
                      <Stars />
                    </div>
                  </div>
                </div>
              </div>
            ))
          : testimonials
              .reduce(function (prev: any, current, index) {
                return (
                  (index % 2 == 0
                    ? prev.push([current])
                    : prev[prev.length - 1].push(current)) && prev
                )
              }, [])
              .map((testimonial: TestimonialType[]) => (
                <div className={styles.sliderSlide} key={Math.random()}>
                  {testimonial.map((item) => (
                    <div className={styles.sliderItem} key={Math.random()}>
                      <h3>{item.title}</h3>
                      <p className={styles.subtitle}>{item.text}</p>

                      <div className={styles.userData}>
                        <div className={styles.img}>
                          <Image
                            src={item.user.imgUrl}
                            layout="fill"
                            alt="user img"
                          />
                        </div>

                        <div className={styles.userText}>
                          <h5>{item.user.name}</h5>
                          <p>{item.user.location}</p>
                          <Stars />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
      </Carousel>
    </Container>
  )
}
