import Container from './Container'
import styles from '../styles/components/Features.module.scss'
import Image from 'next/image'
export default function Features() {
  return (
    <Container className={styles.Features}>
      <div className={styles.info}>
        <h2>Transform your life through education</h2>
        <p>
          Ariel Hocsman launched a new career in software development by taking
          courses on Besnik. What will you be able to do?
        </p>
        <button>Get Started</button>
      </div>
      <div className={styles.player}>
        <div className={styles.img}>
          <Image src={'/lecture1.png'} layout="fill" alt="lecture" priority />
        </div>

        <div className={styles.galery}>
          <div className={styles.item}>
            <div className={styles.galeryImg}>
              <Image src={'/lecture2.png'} layout="fill" alt="lecture" />
            </div>
            <p>Lecture 2</p>
          </div>
          <div className={styles.item}>
            <div className={styles.galeryImg}>
              <Image src={'/lecture3.png'} layout="fill" alt="lecture" />
            </div>
            <p>Lecture 3</p>
          </div>
          <div className={styles.item}>
            <div className={styles.galeryImg}>
              <Image src={'/lecture4.png'} layout="fill" alt="lecture" />
            </div>
            <p>Lecture 4</p>
          </div>
        </div>
      </div>
    </Container>
  )
}
