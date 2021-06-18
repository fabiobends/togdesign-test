import styles from "../../styles/components/HomeCard.module.css";
import { ArticleProps } from "../../types";
import ArticleInfo from "./ArticleInfo";

export default function HomeCard(props: ArticleProps) {
  return (
    <div className={styles.container}>
      <img src={props.url_image} alt={props.title} />
      <h1>{props.title}</h1>
      <ArticleInfo {...props}  />
    </div>
  );
}
