import Head from "next/head";
import { useState } from "react";
import styles from "../styles/pages/PurchasedArticles.module.css";
import { cardProps } from "../types";
import api from "../utils/api";
import HomeCard from "./components/HomeCard";
import UserAreaStatistics from "./components/UserAreaStatistics";
import userAreaWrapper from "./shared/userAreaWrapper";

function PurchasedArticle() {
  const [cards, setCards] = useState<cardProps[]>();

  api.get("/articles").then((response) => setCards(response.data));
  return (
    <div className={styles.container}>
      <Head>
        <title>Purchased articles</title>
      </Head>
      <div className={styles.purchasedArticlesContainer}>
        {cards && cards.map((element) => <HomeCard {...element} />)}
      </div>
      <UserAreaStatistics path="/purchased-articles" />
    </div>
  );
}

export default userAreaWrapper(PurchasedArticle);
