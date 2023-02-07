import React from 'react';

import Gallery from './Gallery/Gallery.jsx'

import './_projects.scss'

const ProjectTab = (props) => {
  const {
    alignment, title, subtitle, desc, link, ghlink, assets, modalOpen, setModalOpen,
    open, setOpen, name
  } = props;

  let linkAnchor = link ? <a className="plink" href={link}>To a deployed instance</a> : null
  let ghLinkAnchor = ghlink ? <a className="plink" href={ghlink}>To the GitHub repo</a> : null
  let descText
  if (desc) {
    descText = desc.split('\n')
  }
  return (
    <>
      <div className={`project ${alignment}`} id={name}>
        <div className="projectHeader">
          <h3 className="projectTitle">{title}</h3>
        </div>
        <h3 className="projectSubTitle">{subtitle}</h3>
        <div className="plinks">
          {linkAnchor}
          {ghLinkAnchor}
        </div>
        <h3 className="projectDescTitle">Project Description</h3>
        {/* <p className="projectDesc">{desc}</p> */}
        {
          desc ? descText.map(text => {
            return (
              <p className="projectDesc">{text}</p>
            )
          })
            : null
        }
      </div>
      <div className="galleryContainer isNotBlurred">
        <Gallery
          assets={props.assets}
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          open={open}
          setOpen={setOpen}
          name={name}
        />
      </div>
    </>
  )
}

export default ProjectTab;