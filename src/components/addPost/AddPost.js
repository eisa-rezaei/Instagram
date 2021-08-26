import React from "react"
import { BsArrowRight } from "@react-icons/all-files/bs/BsArrowRight"
import { AiOutlineClose } from "@react-icons/all-files/ai/AiOutlineClose"
import Layout from "../layout/Layout"
import { StyledAddPostCt, StyledHeader } from "./AddPostStyles"
import { Link } from "gatsby"

const AddPost = () => {
  return (
    <Layout>
      <StyledAddPostCt>
        <StyledHeader>
          <span>
            <Link to="/">
              <AiOutlineClose />
            </Link>
            <p>New Post</p>
          </span>
          <BsArrowRight />
        </StyledHeader>
      </StyledAddPostCt>
    </Layout>
  )
}

export default AddPost
