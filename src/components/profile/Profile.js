import React from "react"
import Layout from "../layout/Layout"

// icons
import { HiOutlineChevronDown } from "react-icons/hi"
import { GoThreeBars } from "react-icons/go"
import { MdAdd } from "react-icons/md"
import { BsFillGrid1X2Fill, BsThreeDotsVertical } from "react-icons/bs"
import { FaUserTag } from "react-icons/fa"
import { RiAddCircleLine } from "react-icons/ri"

// default data
import userImage from "../../assets/avatars/user-image.png"
import post1 from "../../assets/posts/post4.jpg"
import post3 from "../../assets/posts/post5.jpeg"
import post2 from "../../assets/posts/post6.jpeg"

import { highlights, posts } from "../../data/data"

import {
  StyledProfileHeader,
  StyledProfileHighlite,
  StyledProfileHighlites,
  StyledProfilePageCt,
  StyledProfilePageSinlgePost,
  StyledProfilePostsCt,
  StyledProfilePostsCtImages,
  StyledProfilePostsNav,
  StyledProfileUserInfo,
  StyledProfileUserInfoBio,
  StyledProfileUserInfoEditBtns,
  StyledProfileUserInfoFollowers,
} from "./ProfileStyles"

const Profile = ({ user }) => {
  const initialUser = {
    avatar: userImage,
    name: "Eisa Reazaei",
    title: "front end web developer",
    bio: "front end react web developer living in Iran country  *** THIS IS DEFAULT ***",
    username: "eisa.rez",
    followers: 675,
    followings: 452,
    posts: 6,
    location: "Iran",
    highlights: highlights,
    userposts: [
      { image: post1, id: 120942, title: "picture" },
      { image: post2, id: 124345, title: "picture2" },
      { image: post3, id: 234213, title: "picture3" },
    ],
  }

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
        <StyledProfileHeader>
          <span>
            <p>{userData.username}</p>
            <HiOutlineChevronDown />
          </span>
          <span>
            <RiAddCircleLine />
            <GoThreeBars />
          </span>
        </StyledProfileHeader>
        <StyledProfileUserInfo>
          <img src={userData.avatar} alt="user-pic" />
          <StyledProfileUserInfoFollowers>
            <span>
              <h6>{userData.userposts.length}</h6>
              <p>posts</p>
            </span>
            <BsThreeDotsVertical />
            <span>
              <h6>
                {userData.followers >= 1000
                  ? `${userData.followers / 1000}k`
                  : userData.followers}
              </h6>
              <p>followers</p>
            </span>
            <BsThreeDotsVertical />
            <span>
              <h6>
                {userData.followings >= 1000
                  ? `${userData.followings / 1000}k`
                  : userData.followings}
              </h6>
              <p> following</p>
            </span>
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
        <StyledProfileHighlites>
          <StyledProfileHighlite>
            <span>
              <MdAdd />
            </span>
            <p>New</p>
          </StyledProfileHighlite>
          {userData.highlights.map(({ icon, title, color, id }) => (
            <StyledProfileHighlite key={id} color={color}>
              <span> {icon}</span>
              <p>{title}</p>
            </StyledProfileHighlite>
          ))}
        </StyledProfileHighlites>
        <StyledProfilePostsNav>
          <span>
            <BsFillGrid1X2Fill />
          </span>
          <span>
            <FaUserTag />
          </span>
        </StyledProfilePostsNav>
        <StyledProfilePostsCt>
          <StyledProfilePostsCtImages>
            {userData.userposts.map(({ image, id, title }) => (
              <StyledProfilePageSinlgePost key={id}>
                <img src={image} alt={title} />
              </StyledProfilePageSinlgePost>
            ))}
          </StyledProfilePostsCtImages>
        </StyledProfilePostsCt>
      </StyledProfilePageCt>
    </Layout>
  )
}

export default Profile
