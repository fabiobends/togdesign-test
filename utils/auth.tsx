import Cookie from "js-cookie";
import { useRouter } from "next/router";
import { ElementType, useEffect } from "react";

export default function Auth(WrappedComponent: ElementType) {
  const wrapper = (props: any) => {
    const router = useRouter();

    function signOut() {
      Cookie.remove("token");
    }

    useEffect(() => {
      const token = Cookie.get("token");
      if (token) {
        signOut();
        router.replace("/");
      }
    }, []);

    return <WrappedComponent {...props} />;
  };

  return wrapper;
}
