import Head from "next/head";
import styles from "../styles/pages/Home.module.css";
import NavigationBar from "./components/NavigationBar";
import HomeCard from "./components/HomeCard";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tog Design Concepts</title>
      </Head>
      <NavigationBar />
      <main className={styles.main}>
        <div className={styles.cards}>
          <HomeCard
            title={"What was the trend in 2020 and you didn't use it"}
            alt="Trends"
            image="trends"
          />
          <HomeCard
            title={"How to implement design thinking process"}
            alt="Design Thinking"
            image="designThinking"
          />
          <HomeCard
            title={"A nice article about Design Sprint"}
            alt="Design Sprint"
            image="designSprint"
          />
          <HomeCard
            title={"What can we do? Some design categories"}
            alt="Design Types"
            image="designTypes"
          />
        </div>
        <div className={styles.sideBar}>
          <div className={styles.topic}>
            <div className={styles.marker}>
              <span>01</span>
              <div className={styles.dash}></div>
            </div>
            <div className={styles.texts}>
              <p>Emergency, Identifying</p>
              <span>Strategy</span>
            </div>
          </div>
          <div className={styles.topic}>
            <div className={styles.marker}>
              <span className={styles.yellowSpan}>02</span>
              <div className={styles.yellowDash}></div>
            </div>
            <div className={styles.texts}>
              <p>Research, Design and Validation</p>
              <span>Design</span>
            </div>
          </div>
          <div className={styles.topic}>
            <div className={styles.marker}>
              <span>03</span>
              <div className={styles.dash}></div>
            </div>
            <div className={styles.texts}>
              <p>From Ideation to a product</p>
              <span>Development</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
