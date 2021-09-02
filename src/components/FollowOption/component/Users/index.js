import React, { useState } from "react"
import { Link } from "gatsby"
import {
  StyledFollowPageListItemInfo,
  StyledFollowPageContentListItem,
  StyledFollowPageListItemInfoButton,
} from "./styles"

const Index = ({ username, avatar, name }) => {
  const [isFollowing, setIsFollowed] = useState(true)
  return (
    <StyledFollowPageContentListItem>
      <Link to={`/profile/${username}`}>
        <img src={avatar} alt={username} />
      </Link>
      <StyledFollowPageListItemInfo>
        <span>
          <Link to={`/profile/${username}`}>{`${username.substring(
            0,
            8
          )}..`}</Link>
          {name}
        </span>
        <StyledFollowPageListItemInfoButton
          isFollowing={isFollowing}
          onClick={() => setIsFollowed(!isFollowing)}
        >
          {isFollowing ? ` Following ` : `Follow`}
        </StyledFollowPageListItemInfoButton>
      </StyledFollowPageListItemInfo>
    </StyledFollowPageContentListItem>
  )
}

export default Index
