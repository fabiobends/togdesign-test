import {
  faPlus,
  faTimes,
  faCamera,
  faSearch,
  faPlay,
  faCode,
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styles from "../styles/pages/Create.module.css";
import api from "../utils/api";

export default function Create() {
  const [toggle, setToggle] = useState(true);
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function handleToggle() {
    setToggle(!toggle);
  }

  function submitArticle(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    let themes = ["UX Design", "Business", "sales", "User Research"];
    let author = "Daniel Alves";
    let price = 10.9;
    let sales = 100;
    let publisher = "Tog Design";
    console.log(image);
    let data = {
      themes,
      price,
      author,
      sales,
      publisher,
      title,
      content,
      image,
    };
    api
      .post("/article", data)
      .then((response) => console.log(response))
      .catch((e) => console.log(e));
  }

  return (
    <form onSubmit={submitArticle} className={styles.containerArticle}>
      <nav className={styles.navArticle}>
        <img
          className={styles.logo}
          src="assets/tog_logo.png"
          alt="Tog Design"
        />
        <div>
          <button className={styles.cancelArticle}>Cancel</button>
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
                    onChange={(ev) => setImage(ev.target.files[0])}
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
              rows={5}
            />
          </div>
        </div>
      </div>
    </form>
  );
}
