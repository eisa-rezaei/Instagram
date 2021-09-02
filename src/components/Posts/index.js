import React, { useState } from "react"
import { navigate } from "@reach/router"
import { Link } from "gatsby"

import { BsArrowLeft, BsBookmark, BsBookmarkFill } from "react-icons/bs"
import { BiDotsHorizontalRounded } from "react-icons/bi"
import { VscComment } from "react-icons/vsc"
import { FiSend } from "react-icons/fi"

import Layout from "../Layout"
import { posts } from "../../data/data"
import {
  StyledPostCaption,
  StyledPostCt,
  StyledPostHeadDetails,
  StyledPostHeadDetailsUserInfo,
  StyledPostHeader,
  StyledPostHeartAnimation,
  StyledPostIconsBar,
  StyledPostImgCt,
  StyledPostOptions,
  StyledPostOptionShade,
  StyledPostPageCt,
  StyledPostPageHeader,
} from "./styles"
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"

const POST_OPTIONS = [
  "Report...",
  "Hide",
  "Turn on Post Notifications",
  "Copy Link",
  "Share to",
]

const PostPage = props => {
  const post = posts.filter(post => post.id === parseInt(props.id))

  const { id, image, user, title, likes, caption, location, username, name } =
    post[0]
  const [postOptionIsOpen, setPostOptionIsOpen] = useState(false)
  const togglePostOptionHandler = () => {
    setPostOptionIsOpen(!postOptionIsOpen)
  }
  const [isLiked, setIsLiked] = useState(false)
  const [isSaved, setIsSaved] = useState(false)

  return (
    <Layout>
      <StyledPostPageCt>
        <StyledPostOptionShade
          onClick={() => setPostOptionIsOpen(false)}
          postOptionIsOpen={postOptionIsOpen}
        />
        <StyledPostPageHeader>
          <span onClick={() => navigate(-1)} aria-hidden="true">
            <BsArrowLeft />
          </span>
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
          <StyledPostImgCt onDoubleClick={() => setIsLiked(!isLiked)}>
            <img src={image} alt={title} />
            <StyledPostHeartAnimation isLiked={isLiked}>
              <AiFillHeart />
            </StyledPostHeartAnimation>
          </StyledPostImgCt>

          <StyledPostIconsBar isLiked={isLiked}>
            <span>
              {isLiked ? (
                <AiFillHeart onClick={() => setIsLiked(!isLiked)} />
              ) : (
                <AiOutlineHeart onClick={() => setIsLiked(!isLiked)} />
              )}
              <VscComment />
              <FiSend />
            </span>
            {isSaved ? (
              <BsBookmarkFill onClick={() => setIsSaved(!isSaved)} />
            ) : (
              <BsBookmark onClick={() => setIsSaved(!isSaved)} />
            )}
          </StyledPostIconsBar>
          <StyledPostCaption>
            <h4>{isLiked ? likes + 1 : likes} likes</h4>
            <p>
              <Link to={`/profile/${username}`}>{username}</Link> {caption}
            </p>
          </StyledPostCaption>
        </StyledPostCt>
        <StyledPostOptions postOptionIsOpen={postOptionIsOpen}>
          {POST_OPTIONS.map((item, index) => (
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
