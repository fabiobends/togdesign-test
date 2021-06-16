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

export default function UserAreaStatistics({ path }) {
  const [stats, setStats] = useState<rowStatsProps[]>();

  const settings = {
    page: "Purchased Articles",
    path1: "/dashboard",
    path2: "/articles-you-wrote",
    currentIcon: faBook,
    icon1: faChartLine,
    icon2: faFeather,
  };

  if (path === "/dashboard") {
    settings.page = "Dashboard";
    settings.currentIcon = faChartLine;
    settings.icon1 = faBook;
    settings.icon2 = faFeather;
    settings.path1 = "/purchased-articles";
    settings.path2 = "/articles-you-wrote";
  }
  if (path === "/articles-you-wrote") {
    settings.page = "Articles you wrote";
    settings.currentIcon = faFeather;
    settings.icon1 = faChartLine;
    settings.icon2 = faBook;
    settings.path1 = "/dashboard";
    settings.path2 = "/purchased-articles";
  }
  api
    .get(path)
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
              icon={settings.currentIcon}
            />
          </i>
          <p>{settings.page}</p>
        </div>
        <div className={styles.otherPages}>
          <Link href={settings.path1}>
            <i>
              <FontAwesomeIcon
                className={styles.ordinaryIcon}
                icon={settings.icon1}
              />
            </i>
          </Link>
          <Link href={settings.path2}>
            <i>
              <FontAwesomeIcon
                className={styles.ordinaryIcon}
                icon={settings.icon2}
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
