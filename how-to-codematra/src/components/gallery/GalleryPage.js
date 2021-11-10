import React, { useState, useEffect } from 'react'
import GalleryItem from './GalleryItem';
import '../gallery/Gallery.scss';

const GalleryPage = () => {

  const [galleryData, setGalleryData] = useState([]);
  const [showItems, setShowItems]     = useState(4);

  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
    .then(res => res.json())
    .then(data => {
      setGalleryData(data);      
    }).catch(error => console.log(error))

  }, [galleryData, showItems])

  const loadMoreItems = (e) => {
    e.preventDefault();
    setShowItems(showItems + 4);
  }

  return (
    <>

      <div className="gallery-items">
        {
          galleryData.slice(0, showItems ).map((item, i) => {
            return <GalleryItem key={ item.id } data={ item } />
          })
        }
        <div className="gpactions">
          <button className="btnui" onClick={(e) => loadMoreItems(e)}>Load More</button>
        </div>
      </div>
    </>
  )
}

export default GalleryPage;