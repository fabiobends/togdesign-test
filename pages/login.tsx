import bcrypt from "bcryptjs";
import { addDays } from "date-fns";
import Cookie from "js-cookie";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../styles/pages/Login.module.css";
import auth from "../utils/auth";

function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  function signIn(hashCode: string) {
    const token = Cookie.get("token");

    if (!token) {
      Cookie.set("token", hashCode, {
        expires: addDays(new Date(), 3),
      });
    }
  }

  function handleSubmit(event: React.FormEvent<HTMLButtonElement>) {
    const salt = 10;
    event.preventDefault();
    bcrypt.hash(password, salt, (err, hash) => {
      if (err) {
        throw err;
      } else {
        signIn(hash);
      }
    });
    router.replace('/');
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
