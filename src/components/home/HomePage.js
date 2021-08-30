import React, { useState } from "react"
import { Link } from "gatsby"

// icons
import { RiAddCircleLine } from "react-icons/ri"
import { FaRegCommentDots, FaRegComment } from "react-icons/fa"
import { RiHeartLine } from "react-icons/ri"
import { MdAdd } from "react-icons/md"
import { BiDotsVerticalRounded } from "react-icons/bi"
import { AiOutlineHeart } from "react-icons/ai"
import { BsBookmark } from "react-icons/bs"

// styled components
import Layout from "../layout/Layout"
import {
  StyledHomeCt,
  StyledHomeHeader,
  StyledHomeHeaderIcons,
  StyledHomePosts,
  StyledHomeShade,
  StyledHomeSinglePost,
  StyledHomeSinglePostHead,
  StyledHomeSinglePostHeadDetails,
  StyledHomeSinglePostHeadDetailsUserInfo,
  StyledHomeSinglePostLikesCommentsBox,
  StyledHomeSinglePostPostOption,
  StyledHomeStories,
  StyledHomeStory,
  StyledHomeUserStory,
} from "./HomePageStyle"

// data
import { posts, stories } from "src/data/data"

// static array of data
const postOptions = [
  "Report...",
  "Hide",
  "Turn on Post Notifications",
  "Copy Link",
  "Share to",
]

// component
const HomePage = () => {
  const [postOptionIsOpen, setPostOptionIsOpen] = useState(false)
  const togglePostOptionHandler = id => () => {
    setPostOptionIsOpen(!postOptionIsOpen)
  }

  return (
    <Layout>
      <StyledHomeCt>
        <StyledHomeShade
          onClick={() => setPostOptionIsOpen(false)}
          postOptionIsOpen={postOptionIsOpen}
        />
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
            ({
              image,
              id,
              title,
              user,
              location,
              name,
              likes,
              comments,
              username,
            }) => (
              <StyledHomeSinglePost key={id}>
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
                  <BiDotsVerticalRounded onClick={togglePostOptionHandler()} />
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
        <StyledHomeSinglePostPostOption postOptionIsOpen={postOptionIsOpen}>
          {postOptions.map((item, index) => (
            <li
              aria-hidden="true"
              onClick={() => setPostOptionIsOpen(false)}
              key={index}
            >
              {item}
            </li>
          ))}
        </StyledHomeSinglePostPostOption>
      </StyledHomeCt>
    </Layout>
  )
}

export default HomePage
