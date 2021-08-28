import React from "react"
import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import { RiAddCircleLine } from "react-icons/ri"
import { FaRegCommentDots, FaRegComment } from "react-icons/fa"
import { RiHeartLine } from "react-icons/ri"
import { MdAdd } from "react-icons/md"
import { BiDotsVerticalRounded } from "react-icons/bi"
import { AiOutlineHeart } from "react-icons/ai"
import { BsBookmark } from "react-icons/bs"

import Layout from "../layout/Layout"
import {
  StyledHomeCt,
  StyledHomeHeader,
  StyledHomeHeaderIcons,
  StyledHomePosts,
  StyledHomeSinglePost,
  StyledHomeSinglePostHead,
  StyledHomeSinglePostHeadDetails,
  StyledHomeSinglePostLikesCommentsBox,
  StyledHomeStories,
  StyledHomeStory,
  StyledHomeUserStory,
} from "./HomePageStyle"

import { posts, stories } from "../../data/data"

const HomePage = () => {
  return (
    <Layout>
      <StyledHomeCt>
        <StyledHomeHeader>
          <span>Instagram</span>
          <StyledHomeHeaderIcons>
            <RiAddCircleLine />
            <FaRegComment />
            <RiHeartLine />
          </StyledHomeHeaderIcons>
        </StyledHomeHeader>
        <StyledHomeStories>
          <StyledHomeStory>
            <Link to="/addstory">
              <StyledHomeUserStory>
                <MdAdd />
              </StyledHomeUserStory>
            </Link>
            <p>my story</p>
          </StyledHomeStory>
          {stories.map(({ image, name }, index) => (
            <StyledHomeStory key={index}>
              <span>
                <img src={image} alt={name} />
              </span>
              <p>{name}</p>
            </StyledHomeStory>
          ))}
        </StyledHomeStories>
        <StyledHomePosts>
          {posts.map(
            ({ image, id, title, user, location, name, likes, comments }) => (
              <StyledHomeSinglePost key={id}>
                <StyledHomeSinglePostHead>
                  <StyledHomeSinglePostHeadDetails>
                    <img src={user} alt={name} />
                    <span>
                      <h5>{name}</h5>
                      <p>{location}</p>
                    </span>
                  </StyledHomeSinglePostHeadDetails>
                  <BiDotsVerticalRounded />
                </StyledHomeSinglePostHead>
                <StyledHomeSinglePostLikesCommentsBox>
                  <span>
                    <AiOutlineHeart />
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
                <img src={image} alt={title} />
              </StyledHomeSinglePost>
            )
          )}
        </StyledHomePosts>
      </StyledHomeCt>
    </Layout>
  )
}

export default HomePage
