import React from "react"
import { RiAddCircleLine } from "@react-icons/all-files/ri/RiAddCircleLine"
import { FaRegComment } from "@react-icons/all-files/fa/FaRegComment"
import { FaRegCommentDots } from "@react-icons/all-files/fa/FaRegCommentDots"
import { RiHeartLine } from "@react-icons/all-files/ri/RiHeartLine"
import { MdAdd } from "@react-icons/all-files/md/MdAdd"
import { BiDotsVerticalRounded } from "@react-icons/all-files/bi/BiDotsVerticalRounded"
import { AiOutlineHeart } from "@react-icons/all-files/ai/AiOutlineHeart"
import { BsBookmark } from "@react-icons/all-files/bs/BsBookmark"

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
import { Link } from "gatsby"

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
