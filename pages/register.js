import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useFirebase } from "react-redux-firebase";

import { BsGoogle } from "react-icons/bs";

import RegistrationForm from "../components/RegistrationForm";

const Register = () => {
  const router = useRouter();
  const firebase = useFirebase();
  function loginWithGoogle() {
    const result = firebase
      .login({ provider: "google", type: "redirect" })
      .then((user) => {
        router.push("/dashboard");
      })
      .catch((err) => {
        console.error(err);
      });
    return result;
  }

  return (
    <div>
      <Head>
        <title>Codelit | Register</title>
      </Head>
      <main>
        <section className="bg-bg-dark">
          <div className="max-w-7xl mx-auto py-12 px-2 sm:px-6 lg:px-8 min-h-screen flex flex-col items-center justify-center space-y-8">
            <div className="max-w-md w-full">
              <div>
                <div className="text-center mt-14">
                  <Image
                    src="/logo.png"
                    height="60"
                    width="60"
                    alt="Codelit logo"
                  />
                </div>
                <h2 className="mt-1 text-center text-xl md:text-3xl tracking-tight font-semibold text-gray-50">
                  Create your account
                </h2>
              </div>
            </div>
            <div className="max-w-md w-full bg-bg-medium rounded-md drop-shadow-md mt-8 space-y-4 px-3 md:px-8 py-2 md:py-6">
              <RegistrationForm />
              <div className="flex items-center my-4 before:flex-1 before:border-t before:text-gray-200 before:mt-0.5 after:flex-1 after:border-t after:text-gray-200 after:mt-0.5">
                <p className="text-center font-normal mx-4 mb-0 text-gray-200">
                  Or continue with
                </p>
              </div>
              <div className="flex items-center gap-4">
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-primary-400 text-xl font-medium rounded text-white bg-transparent hover:bg-primary-400 focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all ease focus:ring-indigo-500"
                  onClick={() => loginWithGoogle()}
                >
                  <span className="sr-only">Sign in with Google</span>
                  <BsGoogle />
                </button>
              </div>
              <div className="flex justify-center pb-4">
                <p className="text-white">
                  Already have an account?{" "}
                  <Link href="/login">
                    <a className="font-medium text-primary-200 hover:text-primary-400">
                      Login
                    </a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Register;
