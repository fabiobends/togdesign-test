import Cookie from "js-cookie";
import { addDays } from "date-fns";
import auth from "../utils/auth";
import styles from "../styles/pages/Login.module.css";
import { useState } from "react";
import bcrypt from "bcryptjs";

function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const salt = 10;

  function signIn(hashCode: string) {
    Cookie.set("token", hashCode, {
      expires: addDays(new Date(), 3),
    });
  }

  function signOut() {
    Cookie.remove("token");
  }

  function handleSubmit(event: React.FormEvent<HTMLButtonElement>) {
    event.preventDefault();
    bcrypt.hash(password, salt, (err, hash) => {
      if (err) {
        throw err;
      } else {
        signIn(hash);
      }
    });
    console.log(Cookie.get("token"));
  }

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src="assets/tog_logo.png" alt="Tog Design" />
      </div>
      <form>
        <label htmlFor="sign-in" className={styles.label}>
          Sign In
        </label>
        <input
          type="text"
          placeholder="E-mail"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <p>Forgot your password?</p>
        <button
          type="submit"
          className={styles.submitButton}
          onClick={(event) => handleSubmit(event)}
        >
          Sign in
        </button>
      </form>
    </div>
  );
}

export default auth(Login);
