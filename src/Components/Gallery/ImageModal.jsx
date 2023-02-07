import React from 'react';

const ImageModal = (props) => {
  const { image, shrink } = props;

  const goBack = () => {
    shrink()
  }

  return (
    <div className="imageModal isNotBlurred">
      <img
        src={image}
        onClick={goBack}
      />
    </div>
  )
}

export default ImageModal;