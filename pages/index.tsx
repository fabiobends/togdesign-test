import axios, { AxiosResponse } from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "../styles/pages/Home.module.css";
import HomeCard from "./components/HomeCard";
import NavigationBar from "./components/NavigationBar";

interface cardProps {
  id: number;
  title: string;
  text: string;
  path: string;
  alt: string;
}

export default function Home() {
  // available only for this purpose...
  const url = "http://localhost:3001/cards";
  const [cards, setCards] = useState<cardProps[]>();

  useEffect(() => {
    axios
      .get(url)
      .then((response: AxiosResponse<cardProps[]>) => {
        setCards(response.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Tog Design Concepts</title>
      </Head>
      <NavigationBar />
      <main className={styles.main}>
        <div className={styles.cards}>
          {cards &&
            cards.map((element) => (
              <HomeCard
                key={element.id}
                title={element.title}
                alt={element.alt}
                image={element.path}
              />
            ))}
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
