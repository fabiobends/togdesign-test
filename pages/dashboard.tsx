import styles from "../styles/pages/Dashboard.module.css";
import UserAreaStatistics from "./components/UserAreaStatistics";
import userAreaWrapper from "./shared/userAreaWrapper";

function Dashboard() {
  return (
    <div className={styles.container}>
      <div className={styles.dashBoardContainer}>
        <div className={styles.graphics}>
          <p>Your sales for the last 7 days</p>
          <img src="assets/graphics.png" alt="Graphics" />
        </div>
        <div className={styles.bestSellers}>
          <p>Your bestsellers</p>
          <table>
            <thead>
              <tr>
                <th>Article</th>
                <th>Publisher</th>
                <th>Sales</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>What was the trend in 2020 and you didn't use it</td>
                <td>Tog Design</td>
                <td>200</td>
                <td>R$ 10,90</td>
              </tr>
              <tr>
                <td>Where can you apply design and you didn't use it</td>
                <td>Tog Design</td>
                <td>100</td>
                <td>R$ 18,90</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <UserAreaStatistics />
    </div>
  );
}

export default userAreaWrapper(Dashboard);
