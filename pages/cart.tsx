import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cookie from "js-cookie";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/pages/Cart.module.css";
import NavigationBar from "./components/NavigationBar";

export default function Cart() {
  const router = useRouter();

  function handleCheckout() {
    const token = Cookie.get("token");
    if (token) {
      router.replace("/dashboard");
    } else {
      router.replace("/login");
    }
  }

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
            <tr>
              <td>What was the trend in 2020 and you didn't use it</td>
              <td>Daniel Alves</td>
              <td>Tog Design</td>
              <td>R$ 10,90</td>
              <td className={styles.trashButton}>
                <FontAwesomeIcon icon={faTrashAlt} />
              </td>
            </tr>
            <tr>
              <td>Where can you apply design and you didn't use it</td>
              <td>Daniel Alves</td>
              <td>Tog Design</td>
              <td>R$ 18,90</td>
              <td className={styles.trashButton}>
                <FontAwesomeIcon icon={faTrashAlt} />
              </td>
            </tr>
          </tbody>
        </table>
        <div className={styles.divider}></div>
        <div className={styles.subTotalCart}>
          <span>Subtotal</span>
          <p>R$ 29,90</p>
        </div>
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
            <p className={styles.subTotal}>R$ 29,80</p>
          </div>
          <div className={styles.divider}></div>
          <div>
            <span>Total</span>
            <p className={styles.totalAmount}>R$ 29,80</p>
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
