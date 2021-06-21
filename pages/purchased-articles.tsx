import Head from "next/head";
import { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import styles from "../styles/pages/PurchasedArticles.module.css";
import { ArticleProps } from "../types";
import api from "../utils/api";
import HomeCard from "./components/HomeCard";
import UserAreaStatistics from "./components/UserAreaStatistics";
import userAreaWrapper from "./shared/userAreaWrapper";

function PurchasedArticle() {
  const { purchasedArticles } = useContext(CartContext);

  return (
    <div className={styles.container}>
      <Head>
        <title>Purchased articles</title>
      </Head>
      <div className={styles.purchasedArticlesContainer}>
        {purchasedArticles ? (
          purchasedArticles.map((element) => <HomeCard {...element} />)
        ) : (
          <p>You didn't buy any article</p>
        )}
      </div>
      <UserAreaStatistics path="/purchased-articles" />
    </div>
  );
}

export default userAreaWrapper(PurchasedArticle);
