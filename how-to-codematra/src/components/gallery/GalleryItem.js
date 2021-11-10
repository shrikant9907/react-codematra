import React from 'react'
const GalleryItem = (props) => {
  const { title, url } = props.data;
  return (
    <>
      <div className="galleryitem">
        <img src={ url } alt={ title } />
        <div className="img-title">{ title }</div>
      </div>
    </>
  )
}
export default GalleryItem;