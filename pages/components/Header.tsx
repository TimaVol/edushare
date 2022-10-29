import Image from 'next/image'
import Link from 'next/link'
import { Logo } from '../../common/icons'
import styles from '../../styles/components/Header.module.scss'
import Container from './Container'

export default function Header() {
  return (
    <header>
      <Container className={styles.Header}>
        <Logo />
        <nav>
          <Link href="/" legacyBehavior>
            <a className={styles.active}>Home</a>
          </Link>
          <Link href="/">Profile</Link>
          <Link href="/">Courses</Link>
          <Link href="/">Contact</Link>
        </nav>

        <button className={styles.signIn}>Sign In</button>
      </Container>
      <Container className={styles.Intro}>
        <div className={styles.textWrap}>
          <h1>Discover best classes for the best learning</h1>
          <p className={styles.subtitle}>
            We designed Connections Academy to give students all across the
            nation a tuition-free online public school that lets them learn.
          </p>

          <button>Get Started</button>

          <p className={styles.hint}>
            Not sure when to start?
            <Link href={'/'}> Learn more</Link>
          </p>
        </div>

        <div className={styles.imgWrap}>
          <Image src={'/intro.png'} layout="fill" alt="intor banner" priority />
        </div>
      </Container>
    </header>
  )
}
