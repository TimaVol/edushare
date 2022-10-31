import styles from '../styles/Home.module.scss'
import Features from '../components/Features'
import Header from '../components/Header'
import HowItWorks from '../components/HowItWorks'
import OnlineSchool from '../components/OnlineSchool'
import Partners from '../components/Partners'
import Testimonial from '../components/Testimonial'
import Pricing from '../components/Pricing'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <main>
        <Partners />
        <HowItWorks />
        <OnlineSchool />
        <Features />
        <Testimonial />
        <Pricing />
      </main>
    </div>
  )
}
