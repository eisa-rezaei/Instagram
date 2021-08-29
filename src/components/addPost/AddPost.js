import React, { useState } from "react"
import { Link } from "gatsby"
import { BsArrowRight } from "react-icons/bs"
import { AiOutlineCamera, AiOutlineClose } from "react-icons/ai"
import { IoMdCopy } from "react-icons/io"
import { HiOutlineChevronDown } from "react-icons/hi"
import Layout from "../layout/Layout"
import {
  StyledAddPostCt,
  StyledHeader,
  StyledImgList,
  StyledImgLocation,
} from "./AddPostStyles"
import { posts } from "../../data/data"
import ImageContainer from "./ImageContainer"

const AddPost = () => {
  const [currentImg, setCurrentImg] = useState(1)
  const imageChanger = id => () => {
    setCurrentImg(id)
  }

  return (
    <Layout>
      <StyledAddPostCt>
        <StyledHeader>
          <span>
            <Link to="/">
              <AiOutlineClose />
            </Link>
            <p>New Post</p>
          </span>
          <BsArrowRight />
        </StyledHeader>
        <ImageContainer id={currentImg} />
        <StyledImgLocation>
          <p>
            Gallary
            <HiOutlineChevronDown />
          </p>

          <span>
            <IoMdCopy />
            <Link to="/addstory">
              <AiOutlineCamera />
            </Link>
          </span>
        </StyledImgLocation>
        <StyledImgList>
          {posts.map(({ image, id, title }) => (
            <img
              src={image}
              alt={title}
              onClick={imageChanger(id)}
              onKeyDown={imageChanger(id)}
              key={id}
            />
          ))}
        </StyledImgList>
      </StyledAddPostCt>
    </Layout>
  )
}

export default AddPost
