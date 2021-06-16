import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import styles from "../styles/pages/ArticlesYouWrote.module.css";
import UserAreaStatistics from "./components/UserAreaStatistics";
import userAreaWrapper from "./shared/userAreaWrapper";

function ArticlesYouWrote() {
  return (
    <div className={styles.articlesContainer}>
      <Head>
        <title>Articles you wrote</title>
      </Head>
      <table>
        <thead>
          <tr>
            <th>Article</th>
            <th>Publisher</th>
            <th>Publication Date</th>
            <th>Value</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>What was the trend in 2020 and you didn't use it</td>
            <td>Tog Design</td>
            <td>03/04/2021</td>
            <td>R$ 10,90</td>
            <td className={styles.trashButton}>
              <FontAwesomeIcon icon={faTrashAlt} />
            </td>
          </tr>
          <tr>
            <td>Where can you apply design and you didn't use it</td>
            <td>Tog Design</td>
            <td>01/04/2021</td>
            <td>R$ 18,90</td>
            <td className={styles.trashButton}>
              <FontAwesomeIcon icon={faTrashAlt} />
            </td>
          </tr>
        </tbody>
      </table>
      <UserAreaStatistics path="/articles-you-wrote" />
    </div>
  );
}

export default userAreaWrapper(ArticlesYouWrote);
