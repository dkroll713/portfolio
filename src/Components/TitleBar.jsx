import React from 'react';

const TitleBar = () => {
  return (
    <div className="titleBar">
      <div className="leftTitleBar">
        <h3 className="siteTitle">
          David Kroll
        </h3>
      </div>
      <div className="midTitleBar">
      </div>
      <div className="rightTitleBar">
        <div className="links">
          <a className="link" href={"#intro"}>Home</a>
          <a className="link" href={"#about"}>About me</a>
          <a className="link" href={"#projects"}>Projects</a>
          <a className="link" href={"#contact"}>Contact/Hire</a>
        </div>
      </div>
    </div>
  )
}

export default TitleBar