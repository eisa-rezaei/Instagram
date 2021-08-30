import React, { useState } from "react"
import { Link } from "gatsby"
import { BsArrowLeft, BsBookmark } from "react-icons/bs"
import { BiDotsHorizontalRounded } from "react-icons/bi"
import { RiHeartLine } from "react-icons/ri"
import { VscComment } from "react-icons/vsc"
import { FiSend } from "react-icons/fi"

import Layout from "../Layout"
import { posts } from "../../data/data";
import {
  StyledPostCaption,
  StyledPostCt,
  StyledPostHeadDetails,
  StyledPostHeadDetailsUserInfo,
  StyledPostHeader,
  StyledPostIconsBar,
  StyledPostOptions,
  StyledPostOptionShade,
  StyledPostPageCt,
  StyledPostPageHeader,
} from "./styles"

const postOptions = [
  "Report...",
  "Hide",
  "Turn on Post Notifications",
  "Copy Link",
  "Share to",
]

const PostPage = (props) => {
  const post = posts.filter(post => post.id === parseInt(props.id))

  const { id, image, user, title, likes, caption, location, username, name } =
    post[0]
  const [postOptionIsOpen, setPostOptionIsOpen] = useState(false)
  const togglePostOptionHandler = () => {
    setPostOptionIsOpen(!postOptionIsOpen)
  }
  return (
    <Layout>
      <StyledPostPageCt>
        <StyledPostOptionShade
          onClick={() => setPostOptionIsOpen(false)}
          postOptionIsOpen={postOptionIsOpen}
        />
        <StyledPostPageHeader>
          <Link to="/">
            <BsArrowLeft />
          </Link>
          <h5>Explorer</h5>
        </StyledPostPageHeader>
        <StyledPostCt>
          <StyledPostHeader>
            <StyledPostHeadDetails>
              <Link to={`/profile/${username}`}>
                <img src={user} alt={name} />
              </Link>
              <StyledPostHeadDetailsUserInfo>
                <Link to={`/profile/${username}`}>
                  <h5>{username}</h5>
                </Link>
                <Link to={`/location/${id}`}>
                  <p>{location}</p>
                </Link>
              </StyledPostHeadDetailsUserInfo>
            </StyledPostHeadDetails>
            <BiDotsHorizontalRounded onClick={togglePostOptionHandler} />
          </StyledPostHeader>
          <img src={image} alt={title} />
          <StyledPostIconsBar>
            <span>
              <RiHeartLine />
              <VscComment />
              <FiSend />
            </span>
            <BsBookmark />
          </StyledPostIconsBar>
          <StyledPostCaption>
            <h4>{likes} likes</h4>
            <p>
              <Link to={`/profile/${username}`}>{username}</Link> {caption}
            </p>
          </StyledPostCaption>
        </StyledPostCt>
        <StyledPostOptions postOptionIsOpen={postOptionIsOpen}>
          {postOptions.map((item, index) => (
            <li
              aria-hidden="true"
              onClick={() => setPostOptionIsOpen(false)}
              key={index}
            >
              {item}
            </li>
          ))}
        </StyledPostOptions>
      </StyledPostPageCt>
    </Layout>
  )
}

export default PostPage
