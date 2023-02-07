import React from 'react';

const About = (props) => {
  const modalOpen = { props }
  let element = document.getElementById('about')
  if (element && modalOpen) {
    element.classList.add('isBlurred')
  } else if (element) {
    element.classList.remove('isBlurred')
  }
  return (
    <div className={`about`} id="about" >
      <h3 className="aboutTitle">Full-stack software engineer and web developer.</h3>
      <p className="aboutMe">
        I've worked on many different projects, including:
      </p>
      <div className="techStacks">
        <div className="techStack">
          <ul className="stackList">
            <li>front-end refactoring</li>
            <li>API architecture and implementation</li>
            <li>horizontally scaled microservice architectures</li>
            <li>multiplayer web games</li>
            <li>web-scrapers</li>
            <li>animated HTML5 canvases</li>
            <li>Single Page Applications (SPAs)</li>
          </ul>
        </div>
      </div>
      <p className="aboutMe">I am competent and comfortable in various languages:</p>
      <div className="techStacks">
        <div className="techStack">
          <ul className="stackList">
            <li>HTML/CSS/JavaScript</li>
            <li>SQL</li>
            <li>Python</li>
            <li>GoLang</li>
            <li>Java</li>
            <li>Google Apps Script</li>
            <li>VBA</li>
          </ul>
        </div>
      </div>
      <p className="aboutMe">I've used numerous technologies and frameworks in my work:</p>
      <div className="techStacks">
        <div className="techStack">
          <span>Front-end</span>
          <ul className="stackList">
            <li>Axios</li>
            <li>Mongoose</li>
            <li>pg</li>
            <li>React</li>
            <li>Redux</li>
            <li>Zustand</li>
          </ul>
          <ul className="stackList">
            <li>Bootstrap</li>
            <li>SCSS</li>
            <li>Canvas</li>
            <li>Chart.js</li>
            <li>apexcharts</li>
            <li>Auth0</li>
          </ul>
        </div>
        <div className="techStack">
          <span>Back-end</span>
          <ul className="stackList">
            <li>PostgreSQL</li>
            <li>MongoDB</li>
            <li>MySQL</li>
            <li>MariaDB</li>
            <li>AWS</li>
            <li>Heroku</li>
          </ul>
          <ul className="stackList">
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Socket.io</li>
            <li>Cookies</li>
            <li>JWT</li>
            <li>Nginx</li>
          </ul>
        </div>
        <div className="techStack">
          <span>Utilities</span>
          <ul className="stackList">
            <li>WebPack</li>
            <li>Babel</li>
            <li>ESLint</li>
            <li>Git</li>
            <li>GitHub Actions</li>
            <li>VirtualBox</li>
          </ul>
          <ul className="stackList">
            <li>Jest</li>
            <li>Mocha</li>
            <li>Chai</li>
            <li>Postman</li>
            <li>Puppeteer</li>
            <li>Selenium</li>
          </ul>
        </div>
      </div>
      <div className="techStacks">
        <div className="techStack">
          <span>Python</span>
          <ul className="stackList">
            <li>Pip3</li>
            <li>NumPy</li>
            <li>Pandas</li>
            <li>Django</li>
            <li>Flask</li>
            <li>TKLinter</li>
          </ul>
        </div>
      </div>
    </div >
  )
}

export default About;