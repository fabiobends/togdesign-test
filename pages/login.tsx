import bcrypt from "bcryptjs";
import { addDays } from "date-fns";
import Cookie from "js-cookie";
import Head from 'next/head';
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../styles/pages/Login.module.css";
import auth from "../utils/auth";

function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  function signIn(hashCode: string) {
    Cookie.set("token", hashCode, {
      expires: addDays(new Date(), 3),
    });
  }

  function handleSubmit(event: React.FormEvent<HTMLButtonElement>) {
    event.preventDefault();

    const salt = 10;
    bcrypt.hash(password, salt, (err, hash) => {
      if (err) {
        throw err;
      } else {
        signIn(hash);
      }
    });
    router.replace("/dashboard");
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Sign In</title>
      </Head>
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
