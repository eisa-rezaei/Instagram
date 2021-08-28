import React from "react"
import avatar1 from "../assets/avatars/avatar1.png"
import avatar2 from "../assets/avatars/avatar2.png"
import avatar3 from "../assets/avatars/avatar3.png"
import avatar4 from "../assets/avatars/avatar4.png"
import avatar5 from "../assets/avatars/avatar5.png"
import avatar6 from "../assets/avatars/avatar6.png"
import avatar7 from "../assets/avatars/avatar7.png"
import avatar8 from "../assets/avatars/avatar8.png"
import avatar9 from "../assets/avatars/avatar9.png"
import avatar10 from "../assets/avatars/avatar10.png"
import avatar11 from "../assets/avatars/avatar11.png"
import avatar12 from "../assets/avatars/avatar12.png"
import avatar13 from "../assets/avatars/avatar13.png"

import post1 from "../assets/posts/post1.jpg"
import post2 from "../assets/posts/post2.jpg"
import post3 from "../assets/posts/post3.jpg"
import post4 from "../assets/posts/post4.jpg"
import post5 from "../assets/posts/post7.jpg"
import post6 from "../assets/posts/post8.jpg"
import post7 from "../assets/posts/post9.jpg"

import { FaBehance, FaDribbble, FaPinterestP } from "react-icons/fa"
import { ImSpoonKnife } from "react-icons/im"

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
  {
    image: post2,
    id: 5,
    title: "post-img",
    user: avatar2,
    location: "Iran , tehran",
    name: "john",
    likes: 1000,
    comments: 120,
  },
  {
    image: post3,
    id: 6,
    title: "post-image",
    user: avatar3,
    location: "Iran , tabriz",
    name: "mahsa",
    likes: 22300,
    comments: 1200,
  },
  {
    image: post1,
    id: 7,
    title: "post-pic",
    user: avatar7,
    location: "Iran , ardabil",
    name: "sara",
    likes: 2300,
    comments: 20,
  },
  {
    image: post2,
    id: 8,
    title: "post-img",
    user: avatar5,
    location: "Iran , tehran",
    name: "susan",
    likes: 1000,
    comments: 120,
  },
  {
    image: post5,
    id: 9,
    title: "post-img",
    user: avatar2,
    location: "Iran , tehran",
    name: "john",
    likes: 1000,
    comments: 120,
  },
  {
    image: post6,
    id: 10,
    title: "post-img",
    user: avatar10,
    location: "Iran , tehran",
    name: "eisa",
    likes: 35000,
    comments: 2300,
  },
  {
    image: post7,
    id: 11,
    title: "post-img",
    user: avatar9,
    location: "Iran , tehran",
    name: "fatemeh",
    likes: 5990,
    comments: 342,
  },
  {
    image: post5,
    id: 12,
    title: "post-img",
    user: avatar8,
    location: "Iran , tehran",
    name: "ali",
    likes: 350,
    comments: 10,
  },
  {
    image: post5,
    id: 13,
    title: "post-img",
    user: avatar13,
    location: "Iran , tehran",
    name: "elisa",
    likes: 1200,
    comments: 500,
  },
]
export const highlights = [
  { icon: <FaBehance />, title: "behance", color: "#224cf5", id: 1 },
  { icon: <FaDribbble />, title: "dribble", color: "#e73668", id: 2 },
  { icon: <FaPinterestP />, title: "pinter", color: "#e83223", id: 3 },
  { icon: <ImSpoonKnife />, title: "spoon", color: "#6734e1", id: 4 },
]
