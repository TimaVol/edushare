import styles from '../styles/Home.module.scss'
import Header from './components/Header'
import HowItWorks from './components/HowItWorks'
import OnlineSchool from './components/OnlineSchool'
import Partners from './components/Partners'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Partners />
      <HowItWorks />
      <OnlineSchool />
    </div>
  )
}
