import {
  faBook,
  faChartLine,
  faFeather
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";
import styles from "../../styles/components/UserAreaStatistics.module.css";
import { rowStatsProps } from "../../types";
import api from "../../utils/api";
import StatsBar from "../components/StatsBar";

export default function UserAreaStatistics() {
  const [stats, setStats] = useState<rowStatsProps[]>();

  api
    .get("/dashboard")
    .then((response) => {
      setStats(response.data);
    })
    .catch((e) => console.log(e));

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
          <Link href="/purchased-articles">
            <i>
              <FontAwesomeIcon className={styles.ordinaryIcon} icon={faBook} />
            </i>
          </Link>
          <Link href="/articles-you-wrote">
            <i>
              <FontAwesomeIcon
                className={styles.ordinaryIcon}
                icon={faFeather}
              />
            </i>
          </Link>
        </div>
      </div>
      <div className={styles.barsContainer}>
        {stats && stats.map((element) => <StatsBar {...element} />)}
      </div>
    </div>
  );
}
