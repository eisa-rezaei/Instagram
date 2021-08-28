import React from "react"
import { HiHome } from "react-icons/hi"
import { BiSearch } from "react-icons/bi"
import { CgAddR } from "react-icons/cg"
import { RiHeartLine } from "react-icons/ri"
import { FaRegUserCircle } from "react-icons/fa"
import { Link } from "gatsby"
import { NavContainer } from "./NavigationStyles"

const Navigation = () => {
  return (
    <NavContainer>
      <Link to="/" activeClassName="active-link">
        {/* <VscHome /> */}
        <HiHome />
      </Link>
      <Link to="/global" activeClassName="active-link">
        <BiSearch />
      </Link>
      <Link to="/addpost" activeClassName="active-link">
        <CgAddR />
      </Link>
      <Link to="/likes" activeClassName="active-link">
        <RiHeartLine />
      </Link>
      <Link to="/profile" activeClassName="active-link">
        <FaRegUserCircle />
      </Link>
    </NavContainer>
  )
}
export default Navigation
