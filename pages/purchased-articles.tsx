import Head from "next/head";
import UserAreaStatistics from "./components/UserAreaStatistics";
import userAreaWrapper from "./shared/userAreaWrapper";

function PurchasedArticle() {
  return (
    <div>
      <Head>
        <title>Purchased articles (...building)</title>
      </Head>
      <h1>Purchased articles page</h1>
      <UserAreaStatistics />
    </div>
  );
}

export default userAreaWrapper(PurchasedArticle);
