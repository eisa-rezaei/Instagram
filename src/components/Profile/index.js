import React from "react"
import { HiOutlineChevronDown } from "react-icons/hi"
import { GoThreeBars } from "react-icons/go"
import { MdAdd } from "react-icons/md"
import { BsFillGrid1X2Fill, BsThreeDotsVertical } from "react-icons/bs"
import { FaUserTag } from "react-icons/fa"
import { RiAddCircleLine } from "react-icons/ri"
import { Link } from "gatsby"

import Layout from "../Layout"
import userImage from "../../assets/avatars/user-image.png"
import post1 from "../../assets/posts/post4.jpg"
import post3 from "../../assets/posts/post5.jpg"
import post2 from "../../assets/posts/post6.jpeg"
import {highlights, posts, users} from "../../data/data"
import {
  StyledProfileHeader,
  StyledProfileHighlight,
  StyledProfileHighlights,
  StyledProfilePageCt,
  StyledProfilePageSinglePost,
  StyledProfilePostsCt,
  StyledProfilePostsCtImages,
  StyledProfilePostsNav,
  StyledProfileUserInfo,
  StyledProfileUserInfoBio,
  StyledProfileUserInfoEditBtns,
  StyledProfileUserInfoFollowers,
} from "./styles"

const Profile = ({ username }) => {
  const user = users.filter(user => user.username === username)

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
      { image: post1, id: 14, title: "picture" },
      { image: post3, id: 15, title: "picture2" },
      { image: post2, id: 16, title: "picture3" },
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
        <StyledProfileHighlights>
          <StyledProfileHighlight>
            <span>
              <MdAdd />
            </span>
            <p>New</p>
          </StyledProfileHighlight>
          {userData.highlights.map(({ icon, title, color, id }) => (
            <StyledProfileHighlight key={id} color={color}>
              <span> {icon}</span>
              <p>{title}</p>
            </StyledProfileHighlight>
          ))}
        </StyledProfileHighlights>
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
              <StyledProfilePageSinglePost key={id}>
                <Link to={`/posts/${id}`}>
                  <img src={image} alt={title} />
                </Link>
              </StyledProfilePageSinglePost>
            ))}
          </StyledProfilePostsCtImages>
        </StyledProfilePostsCt>
      </StyledProfilePageCt>
    </Layout>
  )
}

export default Profile
