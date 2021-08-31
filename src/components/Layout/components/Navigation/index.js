import React from "react"
import { Link } from "gatsby"

// icons

import { HiHome } from "react-icons/hi"
import { BiSearch } from "react-icons/bi"
import { CgAddR } from "react-icons/cg"
import { RiHeartLine } from "react-icons/ri"
import { FaRegUserCircle } from "react-icons/fa"
import { NavContainer } from "./styles"

const navLinks = [
  { icon: <HiHome />, path: "/" },
  { icon: <BiSearch />, path: "/explore" },
  { icon: <CgAddR />, path: "/addpost" },
  { icon: <RiHeartLine />, path: "/likes" },
  { icon: <FaRegUserCircle />, path: "/profile" },
]

const Index = () => {
  return (
    <NavContainer>
      {navLinks.map(({ icon, path }, index) => (
        <Link to={path} activeClassName="active-link" key={index}>
          {icon}
        </Link>
      ))}
    </NavContainer>
  )
}
export default Index
