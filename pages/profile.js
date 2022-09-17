import { useEffect } from "react";
import { useRouter } from "next/router";
import { isLoaded, isEmpty } from "react-redux-firebase";
import { useSelector } from "react-redux";
import Loader from "../components/Loader";

const profile = () => {
  const auth = useSelector((state) => state.firebase.auth);
  const router = useRouter();

  // Listen for changes on loading and authUser, redirect if needed
  useEffect(() => {
    if (isLoaded(auth) && isEmpty(auth)) router.push("/login");
  }, [auth]);

  if (isLoaded(auth) && isEmpty(auth)) {
    return <Loader />;
  }

  return <div>Test</div>;
};

export default profile;
