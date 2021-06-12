import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styles from "../styles/pages/Create.module.css";
import NavigationArticle from "./components/NavigationArticle";

export default function Create() {
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    setToggle(!toggle);
  }

  function submitArticle(event) {
    console.log(event);
  }
  return (
    <div className={styles.containerArticle}>
      <NavigationArticle />
      <form onSubmit={submitArticle} className={styles.form}>
        <i onClick={handleToggle}>
          <FontAwesomeIcon icon={toggle ? faPlus : faTimes} />
        </i>
        <div>
          <input type="text" placeholder="title" name="title"></input>
          <div>
            <textarea
              name="content"
              placeholder="Tell your story..."
              // cols={100}
              // rows={20}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
