import { useState, useEffect } from "react";
import Head from "next/head";

import AOS from "aos";
import "aos/dist/aos.css";

import NavBar from "../components/NavBar";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      anchorPlacement: "center-center",
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <Head>
        <title>Codelit | Learn to code</title>
      </Head>
      <>
        <NavBar />
      </>
      <main>
        <h1 className="text-3xl font-bold underline">Hello Codelit</h1>
      </main>

      <footer>
        Codelit | <a href="https://yugabdh.com/">Yugabdh Pashte</a> |{" "}
        <a href="https://www.linkedin.com/in/yugabdh-pashte/">LinkedIn</a> |{" "}
        <a href="https://twitter.com/yugabdh">Twitter</a> |{" "}
        <a href="https://github.com/Yugabdh">Github</a>
      </footer>
    </div>
  );
}
