import React, { useEffect } from 'react';

const About = (props) => {
  const { modalOpen } = props
  useEffect(() => {
    console.log('modalOpen:', modalOpen)
    let element = document.getElementById('about')
    if (modalOpen === true) {
      element.classList.add('isBlurred')
    } else {
      element.classList.remove('isBlurred')
    }
  }, [modalOpen])

  return (
    <div className={`about`} id="about" >
      <h3 className="aboutTitle">Full-stack software engineer and web developer</h3>
      <p className="aboutMe">
        I've worked on many different projects, including:
      </p>
      <div className="techStacks">
        <div className="techStack">
          <ul className="stackList">
            <p className="feature">designing & implementing new front-ends</p>
            <p className="feature">refactoring existing front-ends</p>
            <p className="feature">architecting & implenting RESTful APIs</p>
            <p className="feature">refactoring monolith architectures into microservices</p>
            <p className="feature">designing & implementing horizontally-scaled distributed systems</p>
            <p className="feature">creating multiplayer web games</p>
            <p className="feature">building web-scrapers</p>
            <p className="feature">animating HTML5 canvases natively and with libraries</p>
            <p className="feature">building Single Page Apppcations</p>
          </ul>
        </div>
      </div>
      <p className="aboutMe">I am competent and comfortable in various languages:</p>
      <div className="techStacks">
        <div className="techStack">
          <ul className="stackList">
            <p className="feature">HTML/CSS/JavaScript</p>
            <p className="feature">SQL</p>
            <p className="feature">Python</p>
            <p className="feature">GoLang</p>
            <p className="feature">Java</p>
            <p className="feature">Google Apps Script</p>
            <p className="feature">VBA</p>
          </ul>
        </div>
      </div>
      <p className="aboutMe">I've used numerous technologies and frameworks in my work:</p>
      <div className="techStacks">
        <div className="techStack">
          <span className="span">Front-end</span>
          <ul className="stackList">
            <p className="feature">Axios</p>
            <p className="feature">Mongoose</p>
            <p className="feature">pg</p>
            <p className="feature">React</p>
            <p className="feature">Redux</p>
            <p className="feature">Zustand</p>
          </ul>
          <ul className="stackList">
            <p className="feature">Bootstrap</p>
            <p className="feature">SCSS</p>
            <p className="feature">Canvas</p>
            <p className="feature">Chart.js</p>
            <p className="feature">apexcharts</p>
            <p className="feature">Auth0</p>
          </ul>
        </div>
        <div className="techStack">
          <span className="span">Back-end</span>
          <ul className="stackList">
            <p className="feature">PostgreSQL</p>
            <p className="feature">MongoDB</p>
            <p className="feature">MySQL</p>
            <p className="feature">MariaDB</p>
            <p className="feature">AWS</p>
            <p className="feature">Heroku</p>
          </ul>
          <ul className="stackList">
            <p className="feature">Node.js</p>
            <p className="feature">Express.js</p>
            <p className="feature">Socket.io</p>
            <p className="feature">Cookies</p>
            <p className="feature">JWT</p>
            <p className="feature">Nginx</p>
          </ul>
        </div>
        <div className="techStack">
          <span className="span">Utilities</span>
          <ul className="stackList">
            <p className="feature">WebPack</p>
            <p className="feature">Babel</p>
            <p className="feature">ESLint</p>
            <p className="feature">Git</p>
            <p className="feature">GitHub Actions</p>
            <p className="feature">VirtualBox</p>
          </ul>
          <ul className="stackList">
            <p className="feature">Jest</p>
            <p className="feature">Mocha</p>
            <p className="feature">Chai</p>
            <p className="feature">Postman</p>
            <p className="feature">Puppeteer</p>
            <p className="feature">Selenium</p>
          </ul>
        </div>
      </div>
      <div className="techStacks">
        <div className="techStack">
          <span className="span">Python</span>
          <ul className="stackList">
            <p className="feature">Pip3</p>
            <p className="feature">NumPy</p>
            <p className="feature">Pandas</p>
            <p className="feature">Django</p>
            <p className="feature">Flask</p>
            <p className="feature">TKLinter</p>
          </ul>
        </div>
      </div>
    </div >
  )
}

export default About;