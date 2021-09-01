import React from "react"

import { FiArrowUpRight } from "react-icons/fi"

import Activities from "./components/Activities"

import { posts } from "../../data/data"

import Layout from "../Layout"
import {
  StyledLikePageContent,
  StyledLikePageContentHead,
  StyledLikePageContentHeadInfo,
  StyledLikePageCt,
  StyledLikePageHeader,
} from "./styles"

const Likes = () => {
  return (
    <Layout>
      <StyledLikePageCt>
        <StyledLikePageHeader>Activities</StyledLikePageHeader>
        <StyledLikePageContentHead>
          <span>
            <FiArrowUpRight />
          </span>
          <StyledLikePageContentHeadInfo>
            <h1>Promotions</h1>
            <p> Recent actions from your Activities.</p>
          </StyledLikePageContentHeadInfo>
        </StyledLikePageContentHead>
        <StyledLikePageContent>
          <h3>Yesterday</h3>
          {posts.map(post => (
            <Activities key={post.id} {...post} />
          ))}
        </StyledLikePageContent>
      </StyledLikePageCt>
    </Layout>
  )
}

export default Likes
