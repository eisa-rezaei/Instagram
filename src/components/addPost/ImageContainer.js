import React, { useState } from "react"
import { BsArrowsAngleExpand } from "react-icons/bs"
import { StyledImagesCt } from "./AddPostStyles"
import { posts } from "../../data/data"

const ImageContainer = ({ id }) => {
  const [imageCover, setImageCover] = useState(false)
  const selectedImage = posts.find(post => post.id === id)
  return (
    <StyledImagesCt imageCover={imageCover}>
      <img src={selectedImage.image} alt={selectedImage.title} />
      <span>
        <BsArrowsAngleExpand onClick={() => setImageCover(!imageCover)} />
      </span>
    </StyledImagesCt>
  )
}

export default ImageContainer
