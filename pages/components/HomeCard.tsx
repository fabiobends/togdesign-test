import styles from "../../styles/components/HomeCard.module.css";
import ArticleInfo from "./ArticleInfo";

interface HomeCardProps {
  alt: string;
  image: string;
  title: string;
}

export default function HomeCard({ alt, image, title }: HomeCardProps) {
  return (
    <div className={styles.container}>
      <img src={`assets/${image}/regular.png`} alt={alt} />
      <h1>{title}</h1>
      <ArticleInfo />
    </div>
  );
}
