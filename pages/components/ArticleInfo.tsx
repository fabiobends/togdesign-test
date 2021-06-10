import styles from "../../styles/components/ArticleInfo.module.css";
import { cardProps } from "../../types";

export default function ArticleInfo({ themes, author }: cardProps) {
  return (
    <div className={styles.container}>
      <div className={styles.author}>
        <img
          className={styles.authorAvatar}
          src="http://localhost:3333/avatar"
          alt="Author"
        />
        <div className={styles.authorInfo}>
          <div>
            <span>{author}</span>
            <p>Product Design</p>
          </div>
          <button>Follow</button>
        </div>
      </div>
      <div className={styles.themes}>
        <div className={styles.divider}></div>
        <div>
          <p>Themes</p>
          <span>{themes}</span>
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
