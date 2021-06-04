import { ElementType } from "react";
import styles from "../../styles/shared/userAreaWrapper.module.css";
import NavigationBar from "../components/NavigationBar";

export default function userAreaWrapper(WrappedComponent: ElementType) {
  const wrapper = (props: any) => {
    return (
      <div className={styles.container}>
        <NavigationBar />
        <WrappedComponent {...props} />
      </div>
    );
  };

  return wrapper;
}
