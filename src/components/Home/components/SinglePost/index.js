import React, { useState } from "react"
import { Link } from "@reach/router"

import { FaRegCommentDots } from "react-icons/fa"
import { BiDotsVerticalRounded } from "react-icons/bi"
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import { BsBookmark } from "react-icons/bs"

import {
  StyledHomeSinglePost,
  StyledHomeSinglePostHead,
  StyledHomeSinglePostHeadDetails,
  StyledHomeSinglePostHeadDetailsUserInfo,
  StyledHomeSinglePostHeartAnimation,
  StyledHomeSinglePostImgCt,
  StyledHomeSinglePostLikesCommentsBox,
} from "./styles"

const Index = ({
  image,
  id,
  title,
  user,
  location,
  name,
  likes,
  comments,
  username,
  togglePostOptionHandler,
}) => {
  const [isLiked, setIsLiked] = useState(false)
  return (
    <StyledHomeSinglePost>
      <StyledHomeSinglePostHead>
        <StyledHomeSinglePostHeadDetails>
          <Link to={`/profile/${username}`}>
            <img src={user} alt={name} />
          </Link>
          <StyledHomeSinglePostHeadDetailsUserInfo>
            <Link to={`/profile/${username}`}>
              <h5>{name}</h5>
            </Link>
            <Link to={`/location/${id}`}>
              <p>{location}</p>
            </Link>
          </StyledHomeSinglePostHeadDetailsUserInfo>
        </StyledHomeSinglePostHeadDetails>
        <BiDotsVerticalRounded onClick={() => togglePostOptionHandler()} />
      </StyledHomeSinglePostHead>
      <StyledHomeSinglePostImgCt onDoubleClick={() => setIsLiked(!isLiked)}>
        <img src={image} alt={title} />
        <StyledHomeSinglePostHeartAnimation isLiked={isLiked}>
          <AiFillHeart />
        </StyledHomeSinglePostHeartAnimation>
      </StyledHomeSinglePostImgCt>

      <StyledHomeSinglePostLikesCommentsBox isLiked={isLiked}>
        <span>
          {isLiked ? (
            <AiFillHeart onClick={() => setIsLiked(!isLiked)} />
          ) : (
            <AiOutlineHeart onClick={() => setIsLiked(!isLiked)} />
          )}
          {likes >= 1000 ? `${likes / 1000}k` : likes}
        </span>
        <span>
          <FaRegCommentDots />
          {comments >= 1000 ? `${comments / 1000}k` : comments}
        </span>
        <span>
          <BsBookmark />
        </span>
      </StyledHomeSinglePostLikesCommentsBox>
    </StyledHomeSinglePost>
  )
}

export default Index
