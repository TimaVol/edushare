import Container from './Container'
import styles from '../../styles/components/OnlineSchool.module.scss'
import Image from 'next/image'
import { Cart, Time, Users } from '../../common/icons'

export default function OnlineSchool() {
  return (
    <Container className={styles.OnlineSchool}>
      <div className={styles.header}>
        <h2>How our online public school works</h2>
        <button>View all courses</button>
      </div>

      <div className={styles.board}>
        <div className={styles.item}>
          <div className={styles.img}>
            <Image
              src={'/handsOnPython.png'}
              height="165px"
              width="240px"
              alt="img"
            />
          </div>
          <h4>Hands-On Python & R In Data Science</h4>

          <div className={styles.analyse}>
            <div>
              <Users />
              <p>1,45,690</p>
            </div>

            <div>
              <Time />
              <p>4 monts</p>
            </div>
          </div>

          <button>
            <Cart /> Add to Cart
          </button>
        </div>

        <div className={styles.item}>
          <div className={styles.img}>
            <Image
              src={'/ScienceAndMachine.png'}
              height="165px"
              width="240px"
              alt="img"
            />
          </div>
          <h4>Science and Machine Learning Bootcamp</h4>

          <div className={styles.analyse}>
            <div>
              <Users />
              <p>1,45,690</p>
            </div>

            <div>
              <Time />
              <p>4 monts</p>
            </div>
          </div>
          <button>
            <Cart /> Add to Cart
          </button>
        </div>

        <div className={styles.item}>
          <div className={styles.img}>
            <Image
              src={'/PythonCourse.png'}
              height="165px"
              width="240px"
              alt="img"
            />
          </div>
          <h4>The Python Mega Course:Real Applications</h4>

          <div className={styles.analyse}>
            <div>
              <Users />
              <p>1,45,690</p>
            </div>

            <div>
              <Time />
              <p>4 monts</p>
            </div>
          </div>
          <button>
            <Cart /> Add to Cart
          </button>
        </div>
      </div>
    </Container>
  )
}
