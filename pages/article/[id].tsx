import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AxiosResponse } from "axios";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import styles from "../../styles/pages/Article.module.css";
import { ArticleProps } from "../../types";
import api from "../../utils/api";
import ArticleInfo from "../components/ArticleInfo";

export default function Article() {
  const { addArticle, formatter } = useContext(CartContext);
  const router = useRouter();
  const [article, setArticle] = useState<ArticleProps>();
  const { id } = router.query;

  useEffect(() => {
    api
      .get(`article/${id}`)
      .then((response: AxiosResponse<ArticleProps>) => {
        // console.log(response.data);
        setArticle(response.data);
      })
      .then((e) => console.log(e));
  }, []);

  return (
    <>
      {article && (
        <div className={styles.articleContainer}>
          <Head>
            <title>{article.title}</title>
          </Head>
          <Link href="/">
            <i>
              <FontAwesomeIcon icon={faTimes} />
            </i>
          </Link>
          <img src={article.url_image} alt={article.title} />
          <h1>{article.title}</h1>
          <p>{article.content}</p>
          <div className={styles.moreInfo}>
            <p>To continue reading, you need to buy this article</p>
            <p>
              You can continue this reading for only R${" "}
              {formatter(article.price)} paid on your card.
            </p>
          </div>
          <Link href="/cart">
            <button onClick={() => addArticle(article)}>Buy item</button>
          </Link>
          <ArticleInfo {...article} />
        </div>
      )}
    </>
  );
}
