import { useEffect } from "react";
import Image from "next/image";
import Head from "next/head";

import AOS from "aos";
import "aos/dist/aos.css";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeatureSection";
import SectionWithContentAndAside from "../components/SectionWithContentAndAside";

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
        <HeroSection />
      </>
      <main>
        <FeatureSection heading="Benefits" subtitle="Why is it so great?" />
        <SectionWithContentAndAside
          heading="Our mission is to make you a better coder"
          subtitle="Learn. Test. Sharpen your Skills."
          content={
            <p className="text-gray-300">
              Codelit is learning platform I created to learn coding anywhere,
              anytime you want in simple language. Learn and test your skills at
              a sametime. I invite you to explore my site, learn about my
              passions, and explore what excites and interests you as well.
            </p>
          }
          aside={<div className="info-side-inner pt-2 sm:pt-6">
            <Image src="/side-img.png" alt="About Codelit app image" height="1112" width="1920" />
          </div>}
        />
      </main>
      <Footer />
    </div>
  );
}
