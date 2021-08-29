import React, { useState } from "react"
import { Link } from "gatsby"

// icons

import { BsArrowRight } from "react-icons/bs"
import { AiOutlineCamera, AiOutlineClose } from "react-icons/ai"
import { IoMdCopy } from "react-icons/io"
import { HiOutlineChevronDown } from "react-icons/hi"

import { posts } from "../../data/data"

import Layout from "../layout/Layout"
import ImageContainer from "./ImageContainer"
import {
  StyledAddPostCt,
  StyledHeader,
  StyledImgList,
  StyledImgLocation,
} from "./AddPostStyles"

// component

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
            <span onClick={imageChanger(id)} aria-hidden="true" key={id}>
              <img src={image} alt={title} key={id} />
            </span>
          ))}
        </StyledImgList>
      </StyledAddPostCt>
    </Layout>
  )
}

export default AddPost
