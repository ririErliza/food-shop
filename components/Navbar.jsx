import Image from "next/image"
import styles from "../styles/Navbar.module.css"

const Navbar = () => {
  return (
    <div className={styles.container}>

      <div className={styles.item}>

        <div className={styles.callButton}>
        <Image src="/images/call.png" alt="call" width="30" height="30"/>
        </div>

        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>0812 7902121</div>
        </div>
      
      </div>

      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Home</li>
          <li className={styles.listItem}>Products</li>
          <li className={styles.listItem}>Menu</li>
          <Image src="/images/logo.png" alt="call" width="80" height="80"/>
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>

        </ul>
      </div>

      <div className={styles.item}>
        <div className={styles.cart}>
          <Image src="/images/logo.png" alt="call" width="80" height="80"/>
          <div className={styles.counter}>2</div>
        </div>
      </div>
      
    </div>
  )
}

export default Navbar