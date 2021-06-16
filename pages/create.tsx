import {
  faCamera,
  faCode,
  faEllipsisH,
  faPlay,
  faPlus,
  faSearch,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FormData from "form-data";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import styles from "../styles/pages/Create.module.css";
import api from "../utils/api";

export default function Create() {
  const [toggle, setToggle] = useState(true);
  const [image, setImage] = useState<File>(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [price, setPrice] = useState("10.90");

  // switches floating row buttons
  function handleToggle() {
    setToggle(!toggle);
  }

  // clear/cancel article
  function handleClear() {
    setImage(null);
    setTitle("");
    setContent("");
    setPrice("");
  }

  // submit article
  function submitArticle(event: React.FormEvent) {
    event.preventDefault();
    let themes = ["UX Design", "Business", "Sales", "User Research"];
    let author = "Daniel Alves";
    let sales = 100;
    let publisher = "Tog Design";

    const form = new FormData();
    form.append("themes", themes);
    form.append("price", price);
    form.append("author", author);
    form.append("image", image);
    form.append("publisher", publisher);
    form.append("sales", sales);
    form.append("title", title);
    form.append("content", content);

    api
      .post("/article", form, { headers: form.getHeaders })
      .then((response) => {
        console.log(response.data);
        handleClear();
      })
      .catch((e) => console.log(e));
  }

  return (
    <form onSubmit={submitArticle} className={styles.containerArticle}>
      <Head>
        <title>Create Article</title>
      </Head>
      <nav className={styles.navArticle}>
        <Link href="/">
          <img
            className={styles.logo}
            src="assets/tog_logo.png"
            alt="Tog Design"
          />
        </Link>
        <div>
          <button onClick={handleClear} className={styles.cancelArticle}>
            Cancel
          </button>
          <button type="submit" className={styles.submitArticle}>
            Publish
          </button>
        </div>
      </nav>

      <div className={styles.form}>
        <div className={styles.icons}>
          {toggle ? (
            <i onClick={handleToggle}>
              <FontAwesomeIcon icon={faPlus} />
            </i>
          ) : (
            <div>
              <i onClick={handleToggle}>
                <FontAwesomeIcon icon={faTimes} />
              </i>
              <div>
                <i>
                  <label htmlFor="image">
                    <FontAwesomeIcon icon={faCamera} />
                  </label>
                  <input
                    type="file"
                    name="image"
                    id="image"
                    onChange={(ev) =>
                      setImage((ev.target as HTMLInputElement).files[0])
                    }
                    style={{ display: "none" }}
                  />
                </i>
                <i>
                  <FontAwesomeIcon icon={faSearch} />
                </i>
                <i>
                  <FontAwesomeIcon icon={faPlay} />
                </i>
                <i>
                  <FontAwesomeIcon icon={faCode} />
                </i>
                <i>
                  <FontAwesomeIcon icon={faEllipsisH} />
                </i>
              </div>
            </div>
          )}
        </div>

        <div className={styles.text}>
          <input
            type="text"
            placeholder="Title"
            name="title"
            value={title}
            onChange={(ev) => setTitle(ev.target.value)}
          ></input>
          <div>
            <textarea
              name="content"
              placeholder="Tell your story..."
              value={content}
              onChange={(ev) => setContent(ev.target.value)}
              cols={30}
              rows={15}
            />
          </div>
        </div>
        <div className={styles.additional}>
          <div className={styles.themes}>
            <p>Themes</p>
            <div className={styles.tagsContainer}>
              <div className={styles.tag}>
                <span>UX Design</span>
                <i>
                  <FontAwesomeIcon icon={faTimes} />
                </i>
              </div>
              <div className={styles.tag}>
                <span>Business</span>
                <i>
                  <FontAwesomeIcon icon={faTimes} />
                </i>
              </div>
              <div className={styles.tag}>
                <span>Sales</span>
                <i>
                  <FontAwesomeIcon icon={faTimes} />
                </i>
              </div>
              <div className={styles.tag}>
                <span>User Research</span>
                <i>
                  <FontAwesomeIcon icon={faTimes} />
                </i>
              </div>
            </div>
          </div>
          <div className={styles.sellingPrices}>
            <p>Selling Prices</p>
            <input
              type="number"
              placeholder="Prices"
              value={price}
              onChange={(ev) => setPrice(ev.target.value)}
            />
          </div>
        </div>
      </div>
    </form>
  );
}
