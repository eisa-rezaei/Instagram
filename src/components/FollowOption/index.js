import React, { useState } from "react"
import { navigate } from "gatsby"
import FollowOption from "./component/Users"

import { BsArrowLeft } from "react-icons/bs"
import { users } from "../../data/data"
import {
  StyledFollowOptionHeader,
  StyledFollowOptionInput,
  StyledFollowOptionPageCt,
  StyledFollowOptionSearchBox,
  StyledFollowOptionTogglePagesBar,
  StyledUsersListCt,
} from "./styles"
import Layout from "../Layout"
import { RiSearchLine } from "react-icons/ri"

const Index = ({ username }) => {
  const [isFollowingPage, setisFollowingPage] = useState(true)
  const [inputValue, setInputValue] = useState("")
  const user = users.filter(user => user.username === username)[0]
  console.log(inputValue)
  return (
    <Layout>
      <StyledFollowOptionPageCt>
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

        {isFollowingPage ? (
          <StyledUsersListCt>
            {user.followings
              .filter(user => {
                if (inputValue === "") {
                  return user
                } else if (
                  (
                    user.username.toLowerCase() || user.name.toLowerCase()
                  ).includes(inputValue.toLowerCase())
                ) {
                  return user
                } else {
                  return false
                }
              })
              .map(user => (
                <FollowOption {...user} key={user.user_id} />
              ))}
          </StyledUsersListCt>
        ) : (
          <StyledUsersListCt>
            {user.followers
              .filter(user => {
                if (inputValue === "") {
                  return user
                } else if (
                  (
                    user.username.toLowerCase() || user.name.toLowerCase()
                  ).includes(inputValue.toLowerCase())
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
                  isFollowingPage={isFollowingPage}
                />
              ))}
          </StyledUsersListCt>
        )}
      </StyledFollowOptionPageCt>
    </Layout>
  )
}

export default Index
