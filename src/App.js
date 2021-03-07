import React from 'react';
import NavbarPage from './components/NavbarPage';
import HeroHeader from './components/HeroHeader';
import IconText from './components/IconText';
import InfoSideImage from './components/InfoSideImage';
import FooterPage from './components/FooterPage';

import certificate from './assets/img/svg/certificate.svg';
import learning from './assets/img/svg/learn.svg';
import test from './assets/img/svg/quiz.svg';
import homeAboutImg from './assets/img/jpg/side.jpg';

function App() {
  const features = {
    heading: 'Benefits',
    headingColor: 'text-white',
    shortDetail: 'Why is it so great?',
    shortDetailColor: 'text-grey',
    backgroud: 'backgroud-dark-1',
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

  const homeAbout = {
    backgroud: 'backgroud-dark-2',
    heading: 'WELCOME TO CODELIT',
    shortDetail: 'We develope Applications, Tools, and WebApps',
    longDetail: `I believe you must bring your whole self to the table if 
    you want to thrive in today’s crazy world; 
    your personality, your sense of humor, and most importantly, your heart. 
    All of these elements brought me to found TechnoGeekx in May, 2020. 
    Since then, the blog has been thriving, and has quickly gained a loyal following. 
    I invite you to explore my site, learn about my passions, and explore what excites 
    and interests you as well.`,
    imgLink: homeAboutImg,
    imgAlt: 'home-about'
  }

  return (
    <>
      <NavbarPage />
      <HeroHeader />
      <IconText info={ features } />
      <InfoSideImage info={ homeAbout } />
      <FooterPage />
    </>
  );
}

export default App;
