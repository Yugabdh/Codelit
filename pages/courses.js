import { useEffect } from "react";
import { useRouter } from "next/router";
import { isLoaded, isEmpty } from "react-redux-firebase";
import { useSelector } from "react-redux";
import Loader from "../components/Loader";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

// Pixel GIF code adapted from https://stackoverflow.com/a/33919020/266535
const keyStr =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

const triplet = (e1, e2, e3) =>
  keyStr.charAt(e1 >> 2) +
  keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
  keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
  keyStr.charAt(e3 & 63);

const rgbDataURL = (r, g, b) =>
  `data:image/gif;base64,R0lGODlhAQABAPAA${
    triplet(0, r, g) + triplet(b, 255, 255)
  }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;

const courses = () => {
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
    <>
      <Head>
        <title>Codelit | Courses</title>
      </Head>
      <section className="bg-bg-dark mt-20 min-h-screen">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="container py-4">
            <h1 className="mt-1 text-xl md:text-3xl tracking-tight font-semibold text-gray-50 pb-3">
              My Courses
            </h1>
            <ul className="flex flex-wrap -mx-1 lg:-mx-4">
              <li class="py-1 md:py-2 lg:py-3 px-1 lg:px-4 w-1/2 md:w-1/3 lg:w-1/4 text-center">
                <Link href="/dashboard">
                  <div className="bg-bg-medium hover:bg-bg-faint overflow-hidden rounded-lg p-5 shadow-lg hover:shadow-xl cursor-pointer">
                    <div className="rounded-full bg-bg-dark w-20 h-20 p-2 mx-auto">
                      <Image
                        src="/logo.png"
                        height="60"
                        width="60"
                        placeholder="blur"
                        blurDataURL={rgbDataURL(28, 27, 41)}
                        alt="profile photo"
                      />
                    </div>
                    <h2 className="font-semibold text-gray-50 pt-1">
                      Course Name
                    </h2>
                  </div>
                </Link>
              </li>
              <li class="py-1 md:py-2 lg:py-3 px-1 lg:px-4 w-1/2 md:w-1/3 lg:w-1/4 text-center">
                <Link href="/dashboard">
                  <div className="bg-bg-medium hover:bg-bg-faint overflow-hidden rounded-lg p-5 shadow-lg hover:shadow-xl cursor-pointer">
                    <div className="rounded-full bg-bg-dark w-20 h-20 p-2 mx-auto">
                      <Image
                        src="/logo.png"
                        height="60"
                        width="60"
                        placeholder="blur"
                        blurDataURL={rgbDataURL(28, 27, 41)}
                        alt="profile photo"
                      />
                    </div>
                    <h2 className="font-semibold text-gray-50 pt-1">
                      Course Name
                    </h2>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
          <div className="container py-4">
            <h1 className="mt-1 text-xl md:text-3xl tracking-tight font-semibold text-gray-50">
              Available courses
            </h1>
            <div>
              <ul className="flex flex-wrap -mx-1 lg:-mx-4 mt-2">
                <li class="py-1 md:py-2 lg:py-3 px-1 lg:px-4 w-1/2 md:w-1/3 lg:w-1/4 text-center">
                  <Link href="/dashboard">
                    <div className="bg-bg-medium hover:bg-bg-faint overflow-hidden rounded-lg p-5 shadow-lg hover:shadow-xl cursor-pointer">
                      <div className="rounded-full bg-bg-dark w-20 h-20 p-2 mx-auto">
                        <Image
                          src="/logo.png"
                          height="60"
                          width="60"
                          placeholder="blur"
                          blurDataURL={rgbDataURL(28, 27, 41)}
                          alt="profile photo"
                        />
                      </div>
                      <h2 className="font-semibold text-gray-50 pt-1">
                        Course Name
                      </h2>
                    </div>
                  </Link>
                </li>
                <li class="py-1 md:py-2 lg:py-3 px-1 lg:px-4 w-1/2 md:w-1/3 lg:w-1/4 text-center">
                  <Link href="/dashboard">
                    <div className="bg-bg-medium hover:bg-bg-faint overflow-hidden rounded-lg p-5 shadow-lg hover:shadow-xl cursor-pointer">
                      <div className="rounded-full bg-bg-dark w-20 h-20 p-2 mx-auto">
                        <Image
                          src="/logo.png"
                          height="60"
                          width="60"
                          placeholder="blur"
                          blurDataURL={rgbDataURL(28, 27, 41)}
                          alt="profile photo"
                        />
                      </div>
                      <h2 className="font-semibold text-gray-50 pt-1">
                        Course Name
                      </h2>
                    </div>
                  </Link>
                </li>
                <li class="py-1 md:py-2 lg:py-3 px-1 lg:px-4 w-1/2 md:w-1/3 lg:w-1/4 text-center">
                  <Link href="/dashboard">
                    <div className="bg-bg-medium hover:bg-bg-faint overflow-hidden rounded-lg p-5 shadow-lg hover:shadow-xl cursor-pointer">
                      <div className="rounded-full bg-bg-dark w-20 h-20 p-2 mx-auto">
                        <Image
                          src="/logo.png"
                          height="60"
                          width="60"
                          placeholder="blur"
                          blurDataURL={rgbDataURL(28, 27, 41)}
                          alt="profile photo"
                        />
                      </div>
                      <h2 className="font-semibold text-gray-50 pt-1">
                        Course Name
                      </h2>
                    </div>
                  </Link>
                </li>
                <li class="py-1 md:py-2 lg:py-3 px-1 lg:px-4 w-1/2 md:w-1/3 lg:w-1/4 text-center">
                  <Link href="/dashboard">
                    <div className="bg-bg-medium hover:bg-bg-faint overflow-hidden rounded-lg p-5 shadow-lg hover:shadow-xl cursor-pointer">
                      <div className="rounded-full bg-bg-dark w-20 h-20 p-2 mx-auto">
                        <Image
                          src="/logo.png"
                          height="60"
                          width="60"
                          placeholder="blur"
                          blurDataURL={rgbDataURL(28, 27, 41)}
                          alt="profile photo"
                        />
                      </div>
                      <h2 className="font-semibold text-gray-50 pt-1">
                        Course Name
                      </h2>
                    </div>
                  </Link>
                </li>
                <li class="py-1 md:py-2 lg:py-3 px-1 lg:px-4 w-1/2 md:w-1/3 lg:w-1/4 text-center">
                  <Link href="/dashboard">
                    <div className="bg-bg-medium hover:bg-bg-faint overflow-hidden rounded-lg p-5 shadow-lg hover:shadow-xl cursor-pointer">
                      <div className="rounded-full bg-bg-dark w-20 h-20 p-2 mx-auto">
                        <Image
                          src="/logo.png"
                          height="60"
                          width="60"
                          placeholder="blur"
                          blurDataURL={rgbDataURL(28, 27, 41)}
                          alt="profile photo"
                        />
                      </div>
                      <h2 className="font-semibold text-gray-50 pt-1">
                        Course Name
                      </h2>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default courses;
