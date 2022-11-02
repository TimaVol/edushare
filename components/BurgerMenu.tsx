import { CSSTransition } from 'react-transition-group'
import ReactDOM from 'react-dom'
import styles from '../styles/components/BurgerMenu.module.scss'
import { useCallback, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import HamburgerMenu from 'react-hamburger-menu'

export default function BurgerMenu() {
  const modalRef = useRef(null)
  const [body, setBody] = useState<HTMLElement>()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setBody(document.body)
    document.body.style.overflow = ''

    if (isOpen) {
      document.body.style.overflow = 'hidden'
    }
  }, [isOpen])

  const burgerHandler = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div className={styles.bm_button} onClick={burgerHandler}>
        <HamburgerMenu
          isOpen={isOpen}
          menuClicked={burgerHandler}
          width={18}
          height={15}
          strokeWidth={1}
          rotate={0}
          color="black"
          borderRadius={0}
          animationDuration={0.5}
        />
      </div>
      <CSSTransition
        nodeRef={modalRef}
        in={isOpen}
        timeout={800}
        classNames={styles}
        unmountOnExit
      >
        <>
          {body &&
            ReactDOM.createPortal(
              <div className={styles.burgerWrap} ref={modalRef}>
                <div
                  className={styles.bm_body}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className={styles.closeBtn}>
                    <HamburgerMenu
                      isOpen={isOpen}
                      menuClicked={burgerHandler}
                      width={18}
                      height={15}
                      strokeWidth={1}
                      rotate={0}
                      color="black"
                      borderRadius={0}
                      animationDuration={0.5}
                    />
                  </div>
                  <nav>
                    <Link href="/" legacyBehavior>
                      <a className={styles.active}>Home</a>
                    </Link>
                    <Link href="/">Profile</Link>
                    <Link href="/">Courses</Link>
                    <Link href="/">Contact</Link>
                  </nav>

                  <button className={styles.signIn}>Sign In</button>
                </div>
                <div className={styles.overlay} onClick={burgerHandler}></div>
              </div>,
              body
            )}
        </>
      </CSSTransition>
    </>
  )
}
