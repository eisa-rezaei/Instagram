import React from "react"
import { Link } from "gatsby"

import { RiSearchLine } from "react-icons/ri"

import { posts } from "../../data/data"

import Layout from "../layout/Layout"
import {
  StyledGlobalPageCt,
  StyledGlobalPageFirstContant,
  StyledGlobalPageHeader,
  StyledGlobalPageHeaderInput,
  StyledGlobalPageHeaderSearchBox,
  StyledGlobalPageSecoundContant,
  StyledGlobalPageSecoundContantSinlgeItem,
} from "./GlobalPageStyles"

const Global = () => {
  return (
    <Layout>
      <StyledGlobalPageCt>
        <StyledGlobalPageHeader>
          <StyledGlobalPageHeaderSearchBox>
            <RiSearchLine />
            <StyledGlobalPageHeaderInput placeholder="search" />
          </StyledGlobalPageHeaderSearchBox>
        </StyledGlobalPageHeader>
        <StyledGlobalPageFirstContant>
          <span>
            <Link to="/posts/12">
              <img src={posts[11].image} alt="post1" />
            </Link>
            <Link to="/posts/9">
              <img src={posts[8].image} alt="post2" />
            </Link>
          </span>
          <Link to="/posts/8">
            <img src={posts[7].image} alt="post3" />
          </Link>
        </StyledGlobalPageFirstContant>
        <StyledGlobalPageSecoundContant>
          {posts.map(({ image, id, title }) => (
            <StyledGlobalPageSecoundContantSinlgeItem key={id}>
              <Link to={`/posts/${id}`}>
                <img src={image} alt={title} />
              </Link>
            </StyledGlobalPageSecoundContantSinlgeItem>
          ))}
        </StyledGlobalPageSecoundContant>
      </StyledGlobalPageCt>
    </Layout>
  )
}

export default Global
