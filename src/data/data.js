import React from "react"
import avatar1 from "../assets/avatar1.png"
import avatar2 from "../assets/avatar2.png"
import avatar3 from "../assets/avatar3.png"
import avatar4 from "../assets/avatar4.png"
import avatar5 from "../assets/avatar5.png"
import avatar6 from "../assets/avatar6.png"
import avatar7 from "../assets/avatar7.png"
import avatar8 from "../assets/avatar8.png"
import avatar9 from "../assets/avatar9.png"
import avatar10 from "../assets/avatar10.png"
import avatar11 from "../assets/avatar11.png"
import avatar12 from "../assets/avatar12.png"
import avatar13 from "../assets/avatar13.png"

import post1 from "../assets/post1.jpg"
import post2 from "../assets/post2.jpg"
import post3 from "../assets/post3.jpg"
import post4 from "../assets/post4.jpg"

import { FaBehance } from "@react-icons/all-files/fa/FaBehance"
import { FaDribbble } from "@react-icons/all-files/fa/FaDribbble"
import { FaPinterestP } from "@react-icons/all-files/fa/FaPinterestP"
import { ImSpoonKnife } from "@react-icons/all-files/im/ImSpoonKnife"

export const stories = [
  { name: "nick", image: avatar1 },
  { name: "john", image: avatar2 },
  { name: "mahsa", image: avatar3 },
  { name: "ali", image: avatar4 },
  { name: "some", image: avatar5 },
  { name: "sue", image: avatar6 },
  { name: "asd", image: avatar7 },
  { name: "qwf", image: avatar8 },
  { name: "vdfs", image: avatar9 },
  { name: "vdfs", image: avatar10 },
  { name: "sdfsdf", image: avatar11 },
  { name: "sds", image: avatar12 },
  { name: "vddfss", image: avatar13 },
]

export const posts = [
  {
    image: post1,
    id: 1,
    title: "post-pic",
    user: avatar1,
    location: "Iran , ardabil",
    name: "nick",
    likes: 2300,
    comments: 20,
  },
  {
    image: post2,
    id: 2,
    title: "post-img",
    user: avatar2,
    location: "Iran , tehran",
    name: "john",
    likes: 1000,
    comments: 120,
  },
  {
    image: post3,
    id: 3,
    title: "post-image",
    user: avatar3,
    location: "Iran , tabriz",
    name: "mahsa",
    likes: 22300,
    comments: 810,
  },
  {
    image: post4,
    id: 4,
    title: "post-sth",
    user: avatar4,
    location: "Iran , gilan",
    likes: 6300,
    name: "ali",
    comments: 310,
  },
]
export const highlights = [
  { icon: <FaBehance />, title: "behance", color: "#224cf5", id: 1 },
  { icon: <FaDribbble />, title: "behance", color: "#e73668", id: 2 },
  { icon: <FaPinterestP />, title: "behance", color: "#e83223", id: 3 },
  { icon: <ImSpoonKnife />, title: "behance", color: "#6734e1", id: 4 },
]
