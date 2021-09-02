import React, { useState } from "react"
import { Link } from "gatsby"

import { HiOutlineChevronDown } from "react-icons/hi"
import { GoThreeBars } from "react-icons/go"
import { MdAdd } from "react-icons/md"
import { BsFillGrid1X2Fill, BsThreeDotsVertical } from "react-icons/bs"
import { FaPlus, FaUserTag } from "react-icons/fa"
import { RiAddCircleLine } from "react-icons/ri"

import Layout from "../Layout"

import { initialUser, posts, users, SETTING_LIST } from "../../data/data"
import {
  StyledProfileHeader,
  StyledProfileHighlight,
  StyledProfileHighlights,
  StyledProfileImageCt,
  StyledProfilePageContent,
  StyledProfilePageCt,
  StyledProfilePageSinglePost,
  StyledProfilePostsCt,
  StyledProfilePostsCtImages,
  StyledProfilePostsNav,
  StyledProfileShade,
  StyledProfileSideBar,
  StyledProfileUserInfo,
  StyledProfileUserInfoBio,
  StyledProfileUserInfoEditBtns,
  StyledProfileUserInfoFollowers,
} from "./styles"

const Profile = ({ username }) => {
  const [isSetteingOpen, setIsSetteingOpen] = useState(false)
  const [isPostGrid, setIsPostGrid] = useState(true)

  const user = users.filter(user => user.username === username)

  const userInfo = user ? user[0] : initialUser

  const userData = {
    avatar: userInfo.avatar,
    name: userInfo.name,
    title: userInfo.title,
    bio: userInfo.bio,
    username: userInfo.username,
    followers: userInfo.followers,
    followings: userInfo.followings,
    location: "Iran",
    highlights: userInfo.highlights,
    userposts:
      userInfo.userposts ||
      posts.filter(post => post.username === userInfo.username),
  }

  return (
    <Layout>
      <StyledProfilePageCt>
        <StyledProfilePageContent>
          <StyledProfileShade
            onClick={() => setIsSetteingOpen(false)}
            isSetteingOpen={isSetteingOpen}
          />
          <StyledProfileHeader>
            <span>
              <p>{userData.username}</p>
              <HiOutlineChevronDown />
            </span>
            <span>
              <RiAddCircleLine />
              <GoThreeBars onClick={() => setIsSetteingOpen(true)} />
            </span>
          </StyledProfileHeader>
          <StyledProfileUserInfo>
            <StyledProfileImageCt>
              <img src={userData.avatar} alt="user-pic" />
              <Link to="/addstory">
                <FaPlus />
              </Link>
            </StyledProfileImageCt>
            <StyledProfileUserInfoFollowers>
              <span>
                <h6>{userData.userposts.length}</h6>
                <p>posts</p>
              </span>
              <BsThreeDotsVertical />
              <Link to={`/follow-option/${username}`}>
                <h6>
                  {userData.followers.length >= 1000
                    ? `${userData.followers.length / 1000}k`
                    : userData.followers.length}
                </h6>
                <p>followers</p>
              </Link>
              <BsThreeDotsVertical />
              <Link to={`/follow-option/${username}`}>
                <h6>
                  {userData.followings.length >= 1000
                    ? `${userData.followings.length / 1000}k`
                    : userData.followings.length}
                </h6>
                <p> following</p>
              </Link>
            </StyledProfileUserInfoFollowers>
          </StyledProfileUserInfo>
          <StyledProfileUserInfoBio>
            <h6>
              {userData.name} <span> {userData.title} </span>
            </h6>
            <p> {userData.bio} </p>
            <p> {userData.location} </p>
          </StyledProfileUserInfoBio>
          <StyledProfileUserInfoEditBtns>
            <button> Edit profile </button>
            <button> Promotions </button>
            <button> Insights </button>
          </StyledProfileUserInfoEditBtns>
          <StyledProfileHighlights>
            <StyledProfileHighlight>
              <span>
                <MdAdd />
              </span>
              <p>New</p>
            </StyledProfileHighlight>
            {userData.highlights.map(({ icon, title, color, id }) => (
              <StyledProfileHighlight key={id} color={color}>
                <span>{icon}</span>
                <p>{title}</p>
              </StyledProfileHighlight>
            ))}
          </StyledProfileHighlights>
          <StyledProfilePostsNav isPostGrid={isPostGrid}>
            <span onClick={() => setIsPostGrid(true)} aria-hidden="true">
              <BsFillGrid1X2Fill />
            </span>
            <span onClick={() => setIsPostGrid(false)} aria-hidden="true">
              <FaUserTag />
            </span>
          </StyledProfilePostsNav>
          {isPostGrid && (
            <StyledProfilePostsCt>
              <StyledProfilePostsCtImages>
                {userData.userposts.map(({ image, id, title }) => (
                  <StyledProfilePageSinglePost key={id}>
                    <Link to={`/posts/${id}`}>
                      <img src={image} alt={title} />
                    </Link>
                  </StyledProfilePageSinglePost>
                ))}
              </StyledProfilePostsCtImages>
            </StyledProfilePostsCt>
          )}
        </StyledProfilePageContent>
        <StyledProfileSideBar isSetteingOpen={isSetteingOpen}>
          {SETTING_LIST.map(({ icon, title }, index) => (
            <li
              aria-hidden="true"
              onClick={() => setIsSetteingOpen(false)}
              key={index}
            >
              {icon} {title}
            </li>
          ))}
        </StyledProfileSideBar>
      </StyledProfilePageCt>
    </Layout>
  )
}

export default Profile
