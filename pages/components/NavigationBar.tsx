import { faShoppingBag } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "../../styles/components/NavigationBar.module.css"

export default function NavigationBar() {
  return (
    <nav className={styles.nav}>
      <img className={styles.logo} src="assets/tog_logo.png" alt="Tog Design" />
      <div>
        <div className={styles.circleBagButton}>
          <FontAwesomeIcon
            icon={faShoppingBag}
            className={styles.shoppingBag}
          />
        </div>
        <button className={styles.signInButton}>Sign In</button>
      </div>
    </nav>
  );
}
