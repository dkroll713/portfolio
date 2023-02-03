import React from 'react';

import './_projects.scss'

const ProjectTab = (props) => {
  const { alignment, title, subtitle, desc, link, ghlink, image } = props;


  let linkAnchor = link ? <a className="plink" href={link}>To a deployed instance</a> : null
  let ghLinkAnchor = ghlink ? <a className="plink" href={ghlink}>To the GitHub repo</a> : null
  return (
    <div className={`project ${alignment}`}>
      <div className="projectHeader">
        <h3 className="projectTitle">{title}</h3>
        {
          image ? <img className="projectImage" src={imgage}></img> : null
        }
      </div>
      <h3 className="projectSubTitle">{subtitle}</h3>
      <div className="plinks">
        {linkAnchor}
        {ghLinkAnchor}
      </div>
      <h3 className="projectDescTitle">Project Description</h3>
      <p className="projectDesc">{desc}</p>
    </div>
  )
}

export default ProjectTab;