import { Link } from "gatsby"
import React, { useState } from "react"
import {
  StyledLikePageContentListItem,
  StyledLikePageListItemInfo,
  StyledLikePageListItemInfoButton,
} from "./styles"

const Index = ({ username, avatar }) => {
  const [isFollowing, setIsFollowed] = useState(false)
  return (
    <StyledLikePageContentListItem>
      <Link to={`/profile/${username}`}>
        <img src={avatar} alt={username} />
      </Link>
      <StyledLikePageListItemInfo>
        <p>
          <Link to={`/profile/${username}`}>{username}</Link> started to
          following you.
        </p>
        <StyledLikePageListItemInfoButton
          isFollowing={isFollowing}
          onClick={() => setIsFollowed(!isFollowing)}
        >
          {isFollowing ? ` Following ` : `Follow`}
        </StyledLikePageListItemInfoButton>
      </StyledLikePageListItemInfo>
    </StyledLikePageContentListItem>
  )
}

export default Index
