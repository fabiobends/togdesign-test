import styles from "../../styles/components/ArticleInfo.module.css";

export default function ArticleInfo() {
  return (
    <div className={styles.container}>
      <div className={styles.author}>
        <img
          className={styles.authorAvatar}
          src="assets/author/regular.png"
          alt="Author"
        />
        <div className={styles.authorInfo}>
          <div>
            <span>Daniel Alves</span>
            <p>Product Design</p>
          </div>
          <button>Follow</button>
        </div>
      </div>
      <div className={styles.themes}>
        <div className={styles.divider}></div>
        <div>
          <p>Themes</p>
          <span>UX Design, Business, Sales, User Research</span>
        </div>
      </div>
      <div className={styles.temps}>
        <div className={styles.divider}></div>
        <div>
          <p>Temps</p>
          <span>4 minutes</span>
        </div>
      </div>
    </div>
  );
}
