import styles from "../../styles/components/NavigationArticle.module.css";

export default function NavigationArticle() {
  return (
    <nav className={styles.nav}>
      <img className={styles.logo} src="assets/tog_logo.png" alt="Tog Design" />
      <div>
        <button className={styles.cancelArticle}></button>
        <button type="submit" className={styles.submitArticle}>Publish</button>
      </div>
    </nav>
  );
}
