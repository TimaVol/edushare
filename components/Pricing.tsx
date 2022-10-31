import Container from './Container'
import styles from '../styles/components/Pricing.module.scss'

const pricing = [
  {
    title: 'Regular',
    price: 65,
    set: ['1 Day Event', '1 Speaker', 'Interaction Sessions', '35 Classes'],
  },
  {
    title: 'Medium',
    price: 95,
    set: ['1 Day Event', '1 Speaker', 'Interaction Sessions', '65 Classes'],
  },
  {
    title: 'Premium',
    price: 445,
    set: ['1 Day Event', '1 Speaker', 'Interaction Sessions', '95 Classes'],
  },
]

export default function Pricing() {
  return (
    <Container className={styles.Pricing}>
      <div className={styles.header}>
        <h2>Transform your life through education</h2>

        <button>Upgrade now</button>
      </div>

      <div className={styles.board}>
        {pricing.map((item) => (
          <div
            key={Math.random()}
            className={styles.item + ' ' + styles[item.title]}
          >
            <div className={styles.pricingHeader}>
              <h3>{item.title}</h3>
            </div>

            <div className={styles.content}>
              <p className={styles.price}>
                <sup>$</sup>
                {item.price}
              </p>

              <div className={styles.list}>
                {item.set.map((setItem) => (
                  <p key={Math.random()}>{setItem}</p>
                ))}
              </div>

              <button>Buy Plan</button>
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}
