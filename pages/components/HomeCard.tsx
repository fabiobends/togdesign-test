import styles from "../../styles/components/HomeCard.module.css";
import { cardProps } from "../../types";
import ArticleInfo from "./ArticleInfo";

export default function HomeCard(props: cardProps) {
  return (
    <div className={styles.container}>
      <img src={props.url_image} alt={props.title} />
      <h1>{props.title}</h1>
      <ArticleInfo {...props}  />
    </div>
  );
}
