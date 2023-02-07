import React, { useState } from 'react';

import TitleBar from '../Components/TitleBar.jsx'
import Intro from './Intro.jsx';
import About from './About.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';

import './_home.scss'

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [open, setOpen] = useState(null)
  return (
    <>
      <div className="page" id="home">
        <TitleBar
          modalOpen={modalOpen}
        />
        <Intro
          modalOpen={modalOpen}
        />
        <About
          modalOpen={modalOpen}
        />
        <Projects
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          open={open}
          setOpen={setOpen}
        />
        <Contact
          modalOpen={modalOpen}
        />
      </div>
    </>
  )
}

export default Home