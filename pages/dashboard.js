import { useEffect } from "react";
import { useRouter } from "next/router";
import { isLoaded, isEmpty } from "react-redux-firebase";
import { useSelector } from "react-redux";
import Loader from "../components/Loader";
import DashboardHeader from "../components/DashboardHeader";
import Head from "next/head";
import CurrentCourses from "../components/CurrentCourses";
import CardWithHeading from "../components/CardWithHeading";

const dashboard = () => {
  const auth = useSelector((state) => state.firebase.auth);
  const router = useRouter();

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
      <section className="bg-bg-dark min-h-screen">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 pb-8">
          <div className="flex flex-wrap -mx-1 lg:-mx-4">
            <div className="w-full md:w-1/2 py-1 md:py-2 lg:py-3 px-1 lg:px-4 ">
              <CurrentCourses userid={auth.uid} />
            </div>
            <div className="w-full md:w-1/2 py-1 md:py-2 lg:py-3 px-1 lg:px-4 ">
              <CardWithHeading heading={"Achivements"} content={<></>} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default dashboard;
