import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cookie from "js-cookie";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "../../styles/components/NavigationBar.module.css";

export default function NavigationBar() {
  const [token, setToken] = useState<string>("");

  useEffect(() => {
    setToken(Cookie.get("token"));
  }, []);

  return (
    <nav className={styles.nav}>
      <img className={styles.logo} src="assets/tog_logo.png" alt="Tog Design" />
      <div>
        {token && (
          <Link href="/create">
            <button className={styles.writeNowButton}>Write Now</button>
          </Link>
        )}
        <Link href="/cart">
          <div className={styles.circleBagButton}>
            <FontAwesomeIcon
              icon={faShoppingBag}
              className={styles.shoppingBag}
            />
          </div>
        </Link>
        <Link href="/login">
          <button className={styles.signInButton}>
            {token ? "Logout" : "Sign In"}
          </button>
        </Link>
      </div>
    </nav>
  );
}
