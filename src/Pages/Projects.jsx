import React from 'react';

import ProjectTab from '../Components/ProjectTab.jsx';

const Projects = () => {

  return (
    <div className="projects" id="projects">
      <ProjectTab
        alignment="left"
        title={"The Mastermind Game"}
        subtitle={"Cryptography and code-breaking web game"}
        desc={"Made as part of a takehome challenge, this game has roots in cryptography and codebreaking."}
        link={"https://54.174.194.84/"}
        ghlink={"https://github.com/dkroll713/reach"}
      />
      <ProjectTab
        alignment="right"
        title={"SimpleStocks"}
        subtitle={"A free financial analysis web-app."}
        link={null}
        ghlink={"https://github.com/dkroll713/simplestocks"}
      />
      <ProjectTab
        alignment="left"
        title={"API Refactor"}
        subtitle={"Reduced a monolithic server into a microservice architecture"}
        desc={"Per client request, refactored a monolithic server architecture into a microservice architecture."}
        link={null}
        ghlink={"https://github.com/sdc-hoth/reviews"}
      />
      <ProjectTab
        alignment="right"
        title={"LingoLingo"}
        subtitle={"A language- and culture-based social media web-app"}
        desc={"Per client request, a language- and culture-based social media web-app with an emphasis on cultural education and learning languages."}
        link={null}
        ghlink={"https://github.com/Team-Scar/Lingo-Lingo"}
      />
      <ProjectTab
        alignment="left"
        title={"eCommerce Site Redesign & Modernization"}
        subtitle={"Modernized an existing e-commerce storefront"}
        desc={"Per client request, refactored an existing codebase to use modern libraries and design principles."}
        link={null}
        ghlink={"https://github.com/rfc2205-europa/front-end-capstone"}
      />
    </div>
  )
}

export default Projects;