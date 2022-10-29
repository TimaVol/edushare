import Container from './Container'
import styles from '../../styles/components/HowItWorks.module.scss'
import { Book, Canvas, Hierarchy, Note } from '../../common/icons'
import Image from 'next/image'

export default function HowItWorks() {
  return (
    <Container className={styles.HowItWorks}>
      <div className={styles.img}>
        <Image src={'/howItWorks.png'} layout="fill" alt="how it work" />
      </div>
      <div className={styles.mainInfo}>
        <h2>How our online public school works</h2>

        <div className={styles.infoBoard}>
          <div className={styles.item}>
            <Canvas />
            <h3>Virtual Learning</h3>
            <p>
              The only costs are for standard school supplies and voluntary
              field trips.
            </p>
          </div>
          <div className={styles.item}>
            <Note />
            <h3>Meaningful Education</h3>
            <p>
              Many of our Connections Academy schools have additional
              accreditations.
            </p>
          </div>
          <div className={styles.item}>
            <Book />
            <h3>Online Curriculum</h3>
            <p>
              Our curriculum prepares students to go further in life by giving
              them support.
            </p>
          </div>
          <div className={styles.item}>
            <Hierarchy />
            <h3>Social Interaction</h3>
            <p>
              Students at Connections Academy collaborate on projects together.
            </p>
          </div>
        </div>
      </div>
    </Container>
  )
}
