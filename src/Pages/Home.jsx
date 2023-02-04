import React from 'react';

import TitleBar from '../Components/TitleBar.jsx'
import Intro from './Intro.jsx';
import About from './About.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';

import './_home.scss'

const Home = () => {
  return (
    <>
      <div className="page" id="home">
        <TitleBar />
        <Intro />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  )
}

export default Home