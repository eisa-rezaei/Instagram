import React from "react"
import { HiHome } from "@react-icons/all-files/hi/HiHome"
import { BiSearch } from "@react-icons/all-files/bi/BiSearch"
import { CgAddR } from "@react-icons/all-files/cg/CgAddR"
import { RiHeartLine } from "@react-icons/all-files/ri/RiHeartLine"
import { FaRegUserCircle } from "@react-icons/all-files/fa/FaRegUserCircle"
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
