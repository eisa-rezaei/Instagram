import React from "react"
import Layout from "../layout/Layout"
import { HiOutlineChevronDown } from "@react-icons/all-files/hi/HiOutlineChevronDown"
import { GoThreeBars } from "@react-icons/all-files/go/GoThreeBars"
import { BsThreeDotsVertical } from "@react-icons/all-files/bs/BsThreeDotsVertical"
import { MdAdd } from "@react-icons/all-files/md/MdAdd"
import { BsFillGrid1X2Fill } from "@react-icons/all-files/bs/BsFillGrid1X2Fill"
import { FaUserTag } from "@react-icons/all-files/fa/FaUserTag"

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
import { RiAddCircleLine } from "@react-icons/all-files/ri/RiAddCircleLine"

import userImage from "../../assets/user-image.png"
import post1 from "../../assets/post4.jpg"
import post3 from "../../assets/post5.jpeg"
import post2 from "../../assets/post6.jpeg"

import { highlights } from "../../data/data"

const Profile = () => {
  return (
    <Layout>
      <StyledProfilePageCt>
        <StyledProfileHeader>
          <span>
            <p> eisa.rez</p>
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
              <h6>21</h6>
              <p> posts</p>
            </span>
            <BsThreeDotsVertical />
            <span>
              <h6>563</h6>
              <p> followers</p>
            </span>
            <BsThreeDotsVertical />
            <span>
              <h6>172</h6>
              <p> following</p>
            </span>
          </StyledProfileUserInfoFollowers>
        </StyledProfileUserInfo>
        <StyledProfileUserInfoBio>
          <h6>
            Eisa Rezaei <span> front end web developer </span>
          </h6>
          <p> front end react web developer from iran country </p>
          <p> IRAN </p>
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
