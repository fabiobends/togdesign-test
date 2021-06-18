import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cookie from "js-cookie";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import styles from "../styles/pages/Cart.module.css";
import NavigationBar from "./components/NavigationBar";

export default function Cart() {
  const { articles, removeArticle, formatter } = useContext(CartContext);
  const [totalAmount, setTotalAmount] = useState<number>();
  const router = useRouter();

  function handleCheckout() {
    const token = Cookie.get("token");
    if (token) {
      router.replace("/dashboard");
    } else {
      router.replace("/login");
    }
  }

  useEffect(() => {
    let amount = 0;
    articles.forEach((ele) => amount += ele.price);
    setTotalAmount(amount);
  }, [totalAmount]);

  return (
    <div className={styles.cartContainer}>
      <Head>
        <title>Your cart</title>
      </Head>
      <div className={styles.navbar}>
        <NavigationBar writeNowFlag={false} />
      </div>
      <div className={styles.yourCart}>
        <p className={styles.title}>Your cart</p>
        {articles ? (
          <>
            <table>
              <thead>
                <tr>
                  <th>Article</th>
                  <th>Author</th>
                  <th>Publisher</th>
                  <th>Value</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {articles &&
                  articles.map((article) => (
                    <tr>
                      <td>{article.title}</td>
                      <td>{article.author}</td>
                      <td>{article.publisher}</td>
                      <td>{formatter(article.price)}</td>
                      <td
                        onClick={() => removeArticle(article)}
                        className={styles.trashButton}
                      >
                        <FontAwesomeIcon icon={faTrashAlt} />
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <div className={styles.divider}></div>
            <div className={styles.subTotalCart}>
              <span>Subtotal</span>
              <p>{formatter(totalAmount)}</p>
            </div>
          </>
        ) : (
          <p>There is no article in the cart</p>
        )}
      </div>
      <div className={styles.resume}>
        <div className={styles.wrapper}>
          <p className={styles.resumeTitle}>Resume</p>
          <input
            type="text"
            name="coupon"
            id="coupon"
            placeholder="Discount coupon"
          />
          <div>
            <span>Subtotal</span>
            <p className={styles.subTotal}>{formatter(totalAmount)}</p>
          </div>
          <div className={styles.divider}></div>
          <div>
            <span>Total</span>
            <p className={styles.totalAmount}>{formatter(totalAmount)}</p>
          </div>
          <div className={styles.spacer}></div>
          <button onClick={handleCheckout} className={styles.checkout}>
            Checkout
          </button>
          <Link href="/">
            <button className={styles.keepBuying}>Keep Buying</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
