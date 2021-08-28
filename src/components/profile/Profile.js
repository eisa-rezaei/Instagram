import React from "react"
import Layout from "../layout/Layout"

import { HiOutlineChevronDown } from "react-icons/hi"
import { GoThreeBars } from "react-icons/go"
import { MdAdd } from "react-icons/md"
import { BsFillGrid1X2Fill, BsThreeDotsVertical } from "react-icons/bs"
import { FaUserTag } from "react-icons/fa"

import {
  StyledProfileHeader,
  StyledProfileHighlite,
  StyledProfileHighlites,
  StyledProfilePageCt,
  StyledProfilePostsCt,
  StyledProfilePostsCtImages,
  StyledProfilePostsNav,
  StyledProfileUserInfo,
  StyledProfileUserInfoBio,
  StyledProfileUserInfoEditBtns,
  StyledProfileUserInfoFollowers,
} from "./ProfileStyles"
import { RiAddCircleLine } from "react-icons/ri"

import userImage from "../../assets/avatars/user-image.png"
import post1 from "../../assets/posts/post4.jpg"
import post3 from "../../assets/posts/post5.jpeg"
import post2 from "../../assets/posts/post6.jpeg"

import { highlights } from "../../data/data"

const userData = {
  name: "Eisa Reazaei",
  title: "front end web developer",
  bio: "front end react web developer from iran country",
  id: "eisa.rez",
  followers: 675,
  followings: 452,
  posts: 6,
  location: "Iran",
}
const Profile = () => {
  return (
    <Layout>
      <StyledProfilePageCt>
        <StyledProfileHeader>
          <span>
            <p> {userData.id}</p>
            <HiOutlineChevronDown />
          </span>
          <span>
            <RiAddCircleLine />
            <GoThreeBars />
          </span>
        </StyledProfileHeader>
        <StyledProfileUserInfo>
          <img src={userImage} alt="user-pic" />
          <StyledProfileUserInfoFollowers>
            <span>
              <h6>{userData.posts}</h6>
              <p> posts</p>
            </span>
            <BsThreeDotsVertical />
            <span>
              <h6>{userData.followers}</h6>
              <p> followers</p>
            </span>
            <BsThreeDotsVertical />
            <span>
              <h6>{userData.followings}</h6>
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
          {highlights.map(({ icon, title, color, id }) => (
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
          <StyledProfilePostsCtImages flex="row">
            <img src={post1} alt="post1" />
            <span>
              <img src={post2} alt="post2" />
              <img src={post3} alt="post2" />
            </span>
          </StyledProfilePostsCtImages>
          <StyledProfilePostsCtImages flex="row-reverse">
            <img src={post1} alt="post1" />
            <span>
              <img src={post2} alt="post2" />
              <img src={post3} alt="post2" />
            </span>
          </StyledProfilePostsCtImages>
        </StyledProfilePostsCt>
      </StyledProfilePageCt>
    </Layout>
  )
}

export default Profile
