import Container from './Container'
import styles from '../styles/components/Footer.module.scss'
import { AppStore, GooglePlay, Logo } from '../common/icons'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <Container className={styles.Footer}>
        <div className={styles.links}>
          <div>
            <Logo />

            <p>
              Our motto to fulfill customer demand by making them satisfied with
              growing their business.
            </p>
          </div>

          <div>
            <h4>About</h4>

            <Link href="/">About Us</Link>
            <Link href="/">Features</Link>
            <Link href="/">News</Link>
            <Link href="/">Careers</Link>
            <Link href="/">FAQ</Link>
          </div>

          <div>
            <h4>Support</h4>

            <Link href="/">Account</Link>
            <Link href="/">Support Center</Link>
            <Link href="/">Feedback</Link>
            <Link href="/">Contact Us</Link>
            <Link href="/">Accesbility</Link>
          </div>

          <div>
            <h4>Get our app</h4>

            <Link href={'/'} legacyBehavior>
              <a>
                <GooglePlay />
              </a>
            </Link>
            <Link href={'/'} legacyBehavior>
              <a>
                <AppStore />
              </a>
            </Link>
          </div>
        </div>

        <div className={styles.copyrights}>
          <p>Copyright Besnik 2021 All rights reserved.</p>
        </div>
      </Container>
    </footer>
  )
}
