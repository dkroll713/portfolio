import React from 'react';

import ProjectTab from '../Components/ProjectTab.jsx';

const Projects = (props) => {
  const { modalOpen, setModalOpen, open, setOpen } = props;

  let projects = document.getElementsByClassName('project');
  for (let x = 0; x < projects.length; x++) {
    let id = projects[x].id;
    let elem = document.getElementById(id);
    if (open && id !== name) {
      elem.classList.add('isBlurred')
    } else if (!open) {
      elem.classList.remove('isBlurred');
    }
  }

  return (
    <div className="projects" id="projects">
      <ProjectTab
        name="0"
        alignment="left"
        title={"The Mastermind Game"}
        subtitle={"Cryptography and code-breaking web game"}
        desc={"Made as part of a takehome challenge, this game has roots in cryptography and codebreaking."}
        link={"https://54.174.194.84/"}
        ghlink={"https://github.com/dkroll713/reach"}
        assets={{
          0: '/../../assets/mastermind/mastermind_rules.png',
          1: '/../../assets/mastermind/mastermind_leaderboards.png',
          2: '/../../assets/mastermind/mastermind_history.png',
          3: '/../../assets/mastermind/mastermind_difficulties.png',
          4: '../../assets/mastermind/mastermind_guess.png',
          5: '/../../assets/mastermind/mastermind_matrix.png'
        }}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        open={open}
        setOpen={setOpen}
      />
      <ProjectTab
        name="1"
        alignment="right"
        title={"SimpleStocks"}
        subtitle={"A free financial analysis web-app."}
        link={null}
        ghlink={"https://github.com/dkroll713/simplestocks"}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        open={open}
        setOpen={setOpen}
      />
      <ProjectTab
        name="2"
        alignment="left"
        title={"API Refactor"}
        subtitle={"Reduced a monolithic server into a microservice architecture"}
        desc={"Per client request, refactored a monolithic server architecture into a microservice architecture."}
        link={null}
        ghlink={"https://github.com/sdc-hoth/reviews"}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        open={open}
        setOpen={setOpen}
      />
      <ProjectTab
        name="3"
        alignment="right"
        title={"LingoLingo"}
        subtitle={"A language- and culture-based social media web-app"}
        desc={"Per client request, a language- and culture-based social media web-app with an emphasis on cultural education and learning languages."}
        link={null}
        ghlink={"https://github.com/Team-Scar/Lingo-Lingo"}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        open={open}
        setOpen={setOpen}
      />
      <ProjectTab
        name="4"
        alignment="left"
        title={"eCommerce Site Redesign & Modernization"}
        subtitle={"Modernized an existing e-commerce storefront"}
        desc={"Per client request, refactored an existing codebase to use modern libraries and design principles."}
        link={null}
        ghlink={"https://github.com/rfc2205-europa/front-end-capstone"}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        open={open}
        setOpen={setOpen}
      />
    </div>
  )
}

export default Projects;