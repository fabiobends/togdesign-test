import { ElementType, useEffect } from "react";
import Cookie from "js-cookie";
import { useRouter } from "next/router";

export default function Auth (WrappedComponent: ElementType) {
  const wrapper = (props: any) => {

    const router = useRouter();

    useEffect(() => {
      const token = Cookie.get("token");
      if (!token) {
        router.replace("/");
      }
    }, []);

    return <WrappedComponent {...props} />;
  };

  return wrapper;
}
