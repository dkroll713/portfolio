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
        desc={
          `Made as part of a takehome challenge, this game has roots in cryptography and codebreaking. Users can select from easy, medium, hard, or custom-set difficulties and try to crack a computer-generated code using a combination of intuition and computer feedback.
            Users can create accounts and sign-in, and when signed in, can submit scores to a global leaderboard. If connection to the server is lost, users can use the local leaderboards.
            Made in the PERN stack - game UI generated with React, leaderboards stored in a Postgres instance and communicatd to via Express server. User authentication done with Auth0. Deployed in an AWS EC2 instance, HTTPS-enabled with self-signed certificates.`
        }
        link={"https://54.174.194.84/"}
        ghlink={"https://github.com/dkroll713/reach"}
        assets={{
          0: {
            image: './assets/mastermind_rules.png',
            caption: 'The rules of the game'
          },
          1: {
            image: './assets/mastermind_leaderboards.png',
            caption: 'Global leaderboards'
          },
          2: {
            image: './assets/mastermind_history.png',
            caption: `Clicking on a score reveals that game's history`
          },
          3: {
            image: './assets/mastermind_difficulties.png',
            caption: 'Users can select different difficulties or customize their own'
          },
          4: {
            image: './assets/mastermind_guess.png',
            caption: 'Guessing in action'
          },
          5: {
            image: './assets/mastermind_matrix.png',
            caption: 'Users can toggle two different themes'
          }
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
        desc={
          `This project has been evolving for several years - it began as a .txt file, several Python scripts, and a MariaDB database.
          It's now a full-fledged web-app, built in Postgres, Express, React, & Node with user authentication enabled by Auth0, charts provided by react-apexcharts, and more. SimpleStocks aggregates the best and most actionable information from various investment analysis sites like Yahoo Finance and Schwab.com.
          Historical data is gathered from datasets provided by Sharadar and the SEC.gov API, and real-time data is provided by IEXCloud. Users can sign in, create stock watchlists, see price charts, and browse deep into the financial statements.
          Helpful tooltips elaborate on different financial metrics if you hover over them, allowing users to learn if they don't already know about the topic.`
        }
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