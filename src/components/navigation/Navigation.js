import React from "react"
// import { VscHome } from "@react-icons/all-files/vsc/VscHome"
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
      <Link to="/">
        {/* <VscHome /> */}
        <HiHome />
      </Link>
      <Link to="/global">
        <BiSearch />
      </Link>
      <Link to="/addpost">
        <CgAddR />
      </Link>
      <Link to="/likes">
        <RiHeartLine />
      </Link>
      <Link to="/profile">
        <FaRegUserCircle />
      </Link>
    </NavContainer>
  )
}
export default Navigation
