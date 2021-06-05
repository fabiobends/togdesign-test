import styles from "../../styles/components/StatsBar.module.css";
import { rowStatsProps } from "../../types";

export default function StatsBar({
  color,
  number,
  percentage,
  title,
}: rowStatsProps) {
  return (
    <div className={styles.row}>
      <p className={styles.title}>{title}</p>
      <div className={styles.stats}>
        <span>{number}</span>
        <div className={styles.bar}>
          <div
            className={styles.percentage}
            style={{ backgroundColor: color, width: percentage + "%" }}
          ></div>
        </div>
      </div>
    </div>
  );
}
