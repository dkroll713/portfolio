import React, { useState, useEffect } from 'react';

import ImageModal from './ImageModal.jsx'

import './_gallery.scss'

const Gallery = (props) => {
  const { assets, modalOpen, setModalOpen, open, setOpen, name } = props;
  const [images, setImages] = useState(assets)
  const [active, setActive] = useState(0);
  const [clicked, setClicked] = useState(false);
  const toggleModal = (e) => {
    setClicked(!clicked)
    setModalOpen(!modalOpen)
    open === null ? setOpen(name) : setOpen(null)
  }
  let min
  let max
  if (assets) {
    min = Math.min(...Object.keys(assets))
    max = Math.max(...Object.keys(assets))
  }
  // console.log(min, max)

  const goLower = () => {
    if (active == min) {
      setActive(max)
    } else {
      setActive(active - 1)
    }
  }

  const goHigher = () => {
    if (active == max) {
      setActive(min)
    } else {
      setActive(active + 1)
    }
  }

  return (
    <>
      {
        assets
          ?
          !clicked
            ?
            <div className="gallery">
              <div className="imageContainer">
                <div className="leftArrow arrow" onClick={goLower}>
                  ❰
                </div>
                <img
                  src={images[active].image}
                  onClick={toggleModal}
                />
                <div
                  className="rightArrow arrow"
                  onClick={goHigher}
                >
                  ❱
                </div>
              </div>
              <div className="captions">{images[active].caption}</div>
            </div>
            :
            <ImageModal
              image={images[active]}
              shrink={toggleModal}
            />
          :
          null
      }
    </>
  )
}

export default Gallery;