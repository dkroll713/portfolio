import React from 'react';

const About = () => {
  return (
    <div className="about" id="about">
      <h3 className="aboutTitle">Full-stack software engineer and web developer.</h3>
      <p className="aboutMe">
        I've worked on many different projects, including:
      </p>
      <ul className="stackList">
        <li>front-end refactoring</li>
        <li>API architecture and implementation</li>
        <li>horizontally scaled microservice architectures</li>
        <li>multiplayer web games</li>
        <li>web-scrapers</li>
        <li>Single Page Applications (SPAs)</li>
        <li>coming soon... PWAs</li>
      </ul>

      <div className="techStacks">
        <div className="techStack">
          <span>Preferred tech stack:</span>
          <ul className="stackList">
            <li>PostgreSQL</li>
            <li>Express.js</li>
            <li>React.js</li>
            <li>Node.js</li>
          </ul>
        </div>
      </div>

    </div>
  )
}

export default About;