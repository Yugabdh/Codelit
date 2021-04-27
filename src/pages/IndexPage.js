import React from "react";

import HeroHeader from '../components/HeroHeader';
import IconText from '../components/IconText';
import InfoSideImage from '../components/InfoSideImage';

import certificate from '../assets/img/svg/certificate.svg';
import learning from '../assets/img/svg/learn.svg';
import test from '../assets/img/svg/quiz.svg';
import homeAboutImg from '../assets/img/png/side-img.png';



function IndexPage() {
  const homeAbout = {
    backgroud: 'backgroud-dark-0',
    heading: 'Our mission is to make you a better coder',
    shortDetail: 'Learn. Test. Sharpen your Skills.',
    longDetail: `This app is created by TechnoGeekx. Learn coding anywhere, anytime you want
    in simple language. Learn and test your skills at a sametime.
    I invite you to explore my site, learn about my passions, and explore what excites 
    and interests you as well.`,
    imgLink: homeAboutImg,
    imgAlt: 'home-about'
  }

  const features = {
    heading: 'Benefits',
    headingColor: 'text-white',
    shortDetail: 'Why is it so great?',
    backgroud: 'backgroud-dark-0',
    cardbg: 'backgroud-dark-2',
    cards: [
      {
        id: 1,
        img: certificate,
        heading: 'Certification',
        info: 'Get certified for what you learn.'
      },
      {
        id: 2,
        img: learning,
        heading: 'Self-paced learning',
        info: 'Now you can brag about being self-taught while learning at your pace.'
      },
      {
        id: 3,
        img: test,
        heading: 'Tests',
        info: 'While bragging first check if you actually learned it with quizzes per chapter.'
      }
    ]
  }

  return (
    <>
      <HeroHeader />
      <IconText info={ features } />
      <InfoSideImage info={ homeAbout } />
    </>
  );
  
}

export default IndexPage;