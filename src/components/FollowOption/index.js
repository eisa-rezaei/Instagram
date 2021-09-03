import React, { useState } from "react"
import { navigate } from "gatsby"

import { BsArrowLeft } from "react-icons/bs"
import { RiSearchLine } from "react-icons/ri"

import FollowOption from "./component/Users"
import { users } from "../../data/data"
import Layout from "../Layout"
import {
  StyledFollowOptionHeader,
  StyledFollowOptionInput,
  StyledFollowOptionPageCt,
  StyledFollowOptionSearchBox,
  StyledFollowOptionPopUp,
  StyledFollowOptionTogglePagesBar,
  StyledUsersListCt,
} from "./styles"

const Index = ({ username }) => {
  const [isFollowingPage, setisFollowingPage] = useState(true)
  const [inputValue, setInputValue] = useState("")
  const [isPopUpOpen, setIsPopUpOpen] = useState(false)
  const user = users.filter(user => user.username === username)[0]

  const followOptionListHandler = data => {
    const List = data
      .filter(user => {
        if (inputValue === "") {
          return user
        } else if (
          (user.username.toLowerCase() || user.name.toLowerCase()).includes(
            inputValue.toLowerCase()
          )
        ) {
          return user
        } else {
          return false
        }
      })
      .map(user => (
        <FollowOption
          {...user}
          key={user.user_id}
          setIsPopUpOpen={setIsPopUpOpen}
        />
      ))
    return <StyledUsersListCt>{List}</StyledUsersListCt>
  }

  return (
    <Layout>
      <StyledFollowOptionPageCt>
        <StyledFollowOptionPopUp
          onClick={() => setIsPopUpOpen(false)}
          isPopUpOpen={isPopUpOpen}
        >
          <ul>
            <li>Manage Notifications</li>
            <li>Mute</li>
          </ul>
        </StyledFollowOptionPopUp>
        <StyledFollowOptionHeader>
          <span onClick={() => navigate(-1)} aria-hidden="true">
            <BsArrowLeft />
          </span>
          <h5>{user.username}</h5>
        </StyledFollowOptionHeader>
        <StyledFollowOptionTogglePagesBar isFollowingPage={isFollowingPage}>
          <button aria-hidden="true" onClick={() => setisFollowingPage(false)}>
            {user.followers.length}&nbsp;&nbsp;Followers
          </button>
          <button aria-hidden="true" onClick={() => setisFollowingPage(true)}>
            {user.followings.length}&nbsp;&nbsp;Followings
          </button>
        </StyledFollowOptionTogglePagesBar>
        <StyledFollowOptionSearchBox>
          <RiSearchLine />
          <StyledFollowOptionInput
            placeholder="search"
            onChange={e => setInputValue(e.target.value)}
          />
        </StyledFollowOptionSearchBox>

        {isFollowingPage
          ? followOptionListHandler(user.followings)
          : followOptionListHandler(user.followers)}
      </StyledFollowOptionPageCt>
    </Layout>
  )
}

export default Index
