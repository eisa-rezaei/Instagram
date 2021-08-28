import React from "react"
import { RiSearchLine } from "react-icons/ri"
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
import post1 from "../../assets/posts/post1.jpg"
import post2 from "../../assets/posts/post2.jpg"
import post3 from "../../assets/posts/post3.jpg"
import { posts } from "../../data/data"

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
            <img src={post1} alt="post1" />
            <img src={post2} alt="post2" />
          </span>
          <img src={post3} alt="post3" />
        </StyledGlobalPageFirstContant>
        <StyledGlobalPageSecoundContant>
          {posts.map(({ image, id, title }) => (
            <StyledGlobalPageSecoundContantSinlgeItem key={id}>
              <img src={image} alt={title} />
            </StyledGlobalPageSecoundContantSinlgeItem>
          ))}
        </StyledGlobalPageSecoundContant>
      </StyledGlobalPageCt>
    </Layout>
  )
}

export default Global
