import { useEffect } from "react";
import { useRouter } from "next/router";
import { isLoaded, isEmpty } from "react-redux-firebase";
import { useSelector } from "react-redux";
import Loader from "../components/Loader";
import DashboardHeader from "../components/DashboardHeader";
import Head from "next/head";

const dashboard = () => {
  const auth = useSelector((state) => state.firebase.auth);
  const router = useRouter();
  console.log(auth)

  // Listen for changes on loading and authUser, redirect if needed
  useEffect(() => {
    if (isLoaded(auth) && isEmpty(auth)) router.push("/login");
  }, [auth]);

  if (isLoaded(auth) && isEmpty(auth)) {
    return <Loader />;
  }

  return (
    <div>
      <Head>
        <title>Codelit | Dashboard</title>
      </Head>
      <DashboardHeader displayName={auth.displayName} email={auth.email} />
    </div>
  );
};

export default dashboard;
