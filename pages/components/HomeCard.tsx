import styles from "../../styles/components/HomeCard.module.css";
import { cardProps } from "../../types";
import ArticleInfo from "./ArticleInfo";

export default function HomeCard({ alt, path, title }: cardProps) {
  return (
    <div className={styles.container}>
      <img src={`assets/${path}/regular.png`} alt={alt} />
      <h1>{title}</h1>
      <ArticleInfo />
    </div>
  );
}
