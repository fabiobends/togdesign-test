import Head from "next/head";
import UserAreaStatistics from "./components/UserAreaStatistics";
import userAreaWrapper from "./shared/userAreaWrapper";

function ArticlesYouWrote() {
  return (
    <div>
      <Head>
        <title>Articles you wrote (..building)</title>
      </Head>
      <h1>Articles you wrote page</h1>
      <UserAreaStatistics />
    </div>
  );
}

export default userAreaWrapper(ArticlesYouWrote);
