import Image from 'next/image'
import Container from './Container'

import styles from '../styles/components/Partners.module.scss'

export default function Partners() {
  return (
    <Container className={styles.Partners}>
      <div className={styles.text}>
        <p className={styles.count}>400+</p>
        <p className={styles.subtitle}>
          Universities worldwide that partner with us
        </p>
      </div>

      <div className={styles.imgsWrap}>
        <Image
          src={'/McGill.png'}
          height="60px"
          width="168px"
          alt="mggill logo"
        />
        <Image
          src={'/amity.png'}
          height="60px"
          width="168px"
          alt="mggill logo"
        />
        <Image
          src={'/houston.png'}
          height="60px"
          width="168px"
          alt="mggill logo"
        />
        <Image
          src={'/plymouth.png'}
          height="60px"
          width="168px"
          alt="mggill logo"
        />
      </div>
    </Container>
  )
}
