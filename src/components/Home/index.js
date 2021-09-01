import React, { useState } from "react"
import { Link } from "gatsby"

import { MdAdd } from "react-icons/md"

import SinglePsot from "./components/SinglePost"

// styled components
import Layout from "../Layout"
import { posts, stories } from "../../data/data"
import {
  StyledHomeCt,
  StyledHomeHeader,
  StyledHomeHeaderIcons,
  StyledHomePosts,
  StyledHomeShade,
  StyledHomeSinglePostPostOption,
  StyledHomeStories,
  StyledHomeStory,
  StyledHomeUserStory,
} from "./styles"
import { FiSend } from "react-icons/fi"

const POST_OPTIONS = [
  "Report...",
  "Hide",
  "Turn on Post Notifications",
  "Copy Link",
  "Share to",
]

const HomePage = () => {
  const [postOptionIsOpen, setPostOptionIsOpen] = useState(false)
  const togglePostOptionHandler = () => {
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
            <FiSend />
            <Link to="/">1</Link>
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
          {posts.map(post => (
            <SinglePsot
              key={post.id}
              {...post}
              togglePostOptionHandler={togglePostOptionHandler}
            />
          ))}
        </StyledHomePosts>
        <StyledHomeSinglePostPostOption postOptionIsOpen={postOptionIsOpen}>
          {POST_OPTIONS.map((item, index) => (
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
