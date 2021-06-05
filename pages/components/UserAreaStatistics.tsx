import {
  faBook,
  faChartLine,
  faFeather
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../styles/components/UserAreaStatistics.module.css";
import { rowStatsProps } from "../../types";
import StatsBar from "../components/StatsBar";

export default function UserAreaStatistics() {
  const rowTest1: rowStatsProps = {
    color: "cyan",
    number: 25,
    percentage: 25,
    title: "Published articles",
  };
  const rowTest2: rowStatsProps = {
    color: "yellow",
    number: 25,
    percentage: 80,
    title: "Published articles",
  };
  const rowTest3: rowStatsProps = {
    color: "green",
    number: 25,
    percentage: 40,
    title: "Published articles",
  };
  const rowTest4: rowStatsProps = {
    color: "blue",
    number: 25,
    percentage: 80,
    title: "Published articles",
  };
  const rowTest5: rowStatsProps = {
    color: "blue",
    number: 25,
    percentage: 80,
    title: "Published articles",
  };
  return (
    <div className={styles.content}>
      <div className={styles.actions}>
        <div className={styles.currentPage}>
          <i>
            <FontAwesomeIcon
              className={styles.currentIcon}
              icon={faChartLine}
            />
          </i>
          <p>Dashboard</p>
        </div>
        <div className={styles.otherPages}>
          <i>
            <FontAwesomeIcon className={styles.ordinaryIcon} icon={faBook} />
          </i>
          <i>
            <FontAwesomeIcon className={styles.ordinaryIcon} icon={faFeather} />
          </i>
        </div>
      </div>
      <div className={styles.barsContainer}>
        <StatsBar {...rowTest1} />
        <StatsBar {...rowTest2} />
        <StatsBar {...rowTest3} />
        <StatsBar {...rowTest4} />
        <StatsBar {...rowTest5} />
      </div>
    </div>
  );
}
