import React, { useState } from "react"
import { Link } from "@reach/router"

import { FaRegCommentDots } from "react-icons/fa"
import { BiDotsVerticalRounded } from "react-icons/bi"
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import { BsBookmark, BsBookmarkFill } from "react-icons/bs"

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
  const [isSaved, setIsSaved] = useState(false)

  const getLikesCount = () => {
    const makeShortedNumber = number => {
      return number >= 10000
        ? `${(number / 1000).toString().substring(0, 4)}k`
        : number
    }
    if (isLiked) {
      return makeShortedNumber(likes + 1)
    } else {
      return makeShortedNumber(likes)
    }
  }

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
          {getLikesCount(likes)}
        </span>
        <span>
          <FaRegCommentDots />
          {comments >= 1000 ? `${comments / 1000}k` : comments}
        </span>
        <span>
          {isSaved ? (
            <BsBookmarkFill onClick={() => setIsSaved(!isSaved)} />
          ) : (
            <BsBookmark onClick={() => setIsSaved(!isSaved)} />
          )}
        </span>
      </StyledHomeSinglePostLikesCommentsBox>
    </StyledHomeSinglePost>
  )
}

export default Index
