import "./ImageList.css"
import React from "react"

const ImageList = (props) => {
  console.log(props)
  const images = props.images.map((image) => {
    return <img key={image.id} alt={image.description} src={image.urls.regular} width="100%" />
  })
  console.log("cars-image", images)
  return <div className="container image-list">{images}</div>
};

export default ImageList; 