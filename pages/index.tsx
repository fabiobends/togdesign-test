import Head from "next/head";
import styles from "../styles/pages/Home.module.css";
import NavigationBar from "./components/NavigationBar";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tog Design Concepts</title>
      </Head>
      <NavigationBar />
      <img src="/assets/trends/regular.png" alt="Trends" />
    </div>
  );
}
