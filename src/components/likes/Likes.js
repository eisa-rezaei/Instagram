import React from "react"
import { FiArrowUpRight } from "react-icons/fi"
import { posts } from "../../data/data"
import Layout from "../layout/Layout"
import {
  StyledLikePageContent,
  StyledLikePageContentHead,
  StyledLikePageContentHeadInfo,
  StyledLikePageContentListItem,
  StyledLikePageCt,
  StyledLikePageHeader,
  StyledLikePageListItemInfo,
  StyledLikePageListItemInfoButton,
} from "./LikesStyles"

const Likes = () => {
  return (
    <Layout>
      <StyledLikePageCt>
        <StyledLikePageHeader>Activitise</StyledLikePageHeader>
        <StyledLikePageContentHead>
          <span>
            <FiArrowUpRight />
          </span>
          <StyledLikePageContentHeadInfo>
            <h1>Promotions</h1>
            <p> Recent actions from your Activitise .</p>
          </StyledLikePageContentHeadInfo>
        </StyledLikePageContentHead>
        <StyledLikePageContent>
          <h3>Yesterday</h3>
          {posts.map(({ user, name, id }) => (
            <StyledLikePageContentListItem key={id}>
              <img src={user} alt={name} />
              <StyledLikePageListItemInfo>
                <p>
                  <span> {name}</span> started to following you .
                </p>
                <StyledLikePageListItemInfoButton>
                  Follow
                </StyledLikePageListItemInfoButton>
              </StyledLikePageListItemInfo>
            </StyledLikePageContentListItem>
          ))}
        </StyledLikePageContent>
      </StyledLikePageCt>
    </Layout>
  )
}

export default Likes
