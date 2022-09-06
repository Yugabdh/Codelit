import Head from "next/head";
import "../styles/global.css";

import { Provider, useSelector } from "react-redux";
import { wrapper, newStore } from "../redux/index.js";
import { isLoaded, ReactReduxFirebaseProvider } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import firebaseConfig from "../firebase/firebaseConfig";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

function AuthIsLoaded({ children }) {
  const auth = useSelector((state) => state.firebase.auth);
  if (!isLoaded(auth)) return <Loader />;
  return children;
}

function MyApp({ Component, pageProps }) {
  const rrfConfig = {
    userProfile: "users",
    useFirestoreForProfile: true,
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    firebase.auth();
    firebase.firestore();
  }

  const store = newStore();

  const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance,
  };

  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps} initializeAuth={true}>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
          />
        </Head>
        <AuthIsLoaded>
          <NavBar />
          <Component {...pageProps} />
          <Footer />
        </AuthIsLoaded>
      </ReactReduxFirebaseProvider>{" "}
    </Provider>
  );
}

export default wrapper.withRedux(MyApp);
