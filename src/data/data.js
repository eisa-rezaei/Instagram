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
import adminDefualt from "../assets/avatars/user-image.png"

import userImage from "../assets/avatars/user-image.png"

import post1 from "../assets/posts/post1.jpg"
import post2 from "../assets/posts/post2.jpg"
import post3 from "../assets/posts/post3.jpg"
import post4 from "../assets/posts/post4.jpg"
import post5 from "../assets/posts/post5.jpg"
import post6 from "../assets/posts/post6.jpg"
import post7 from "../assets/posts/post7.jpg"
import post8 from "../assets/posts/post8.jpg"

import { FaBehance, FaDribbble, FaPinterestP } from "react-icons/fa"
import { ImSpoonKnife } from "react-icons/im"
import { FiSettings } from "react-icons/fi"
import { BiArchiveIn } from "react-icons/bi"
import { CgInsights } from "react-icons/cg"
import {
  BsClockHistory,
  BsFillPersonPlusFill,
  BsListCheck,
} from "react-icons/bs"
import { RiBookmarkFill, RiMentalHealthLine } from "react-icons/ri"
import { AiOutlineQrcode } from "react-icons/ai"

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
    location: "Iran, Ardabil",
    name: "nick",
    likes: 21300,
    comments: 20,
    position: [37.505, 48.5],
    username: "nick.nnnn",
    caption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius maxime provident ut ratione eveniet dolores facilis quis saepe esse pariatur.",
  },
  {
    image: post2,
    id: 2,
    title: "post-img",
    user: avatar2,
    location: "Iran, Tehran",
    name: "john",
    likes: 23400,
    comments: 120,
    position: [35.505, 51.5],
    username: "john.hhhh",
    caption:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam rem nobis impedit perferendis. Similique debitis tenetur fuga quae in quasi?",
  },
  {
    image: post7,
    id: 3,
    title: "post-image",
    user: avatar3,
    location: "Iran, Tabriz",
    name: "mahsa",
    likes: 22300,
    comments: 810,
    position: [37.505, 46.5],
    username: "mahsa.mmmm",
    caption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, consequuntur minima sint dolorum necessitatibus doloribus reprehenderit incidunt tenetur eos exercitationem!",
  },
  {
    image: post4,
    id: 4,
    title: "post-sth",
    user: avatar4,
    location: "Iran, Gilan",
    likes: 6300,
    name: "ali",
    comments: 310,
    position: [36.505, 47.5],
    username: "ali.aaaa",
    caption:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, atque! Recusandae, ratione tempore deleniti magni quibusdam voluptas inventore accusantium sunt!",
  },
  {
    image: post4,
    id: 5,
    title: "post-img",
    user: avatar2,
    location: "Iran, Tehran",
    name: "john",
    likes: 12000,
    comments: 120,
    position: [35.505, 51.5],
    username: "john.hhhh",
    caption:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi earum culpa corporis voluptatibus expedita quia!",
  },
  {
    image: post3,
    id: 6,
    title: "post-image",
    user: avatar3,
    location: "Iran, Tabriz",
    name: "mahsa",
    likes: 22300,
    comments: 1200,
    position: [37.505, 46.5],
    username: "mahsa.mmmm",
    caption:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, labore!",
  },
  {
    image: post5,
    id: 7,
    title: "post-pic",
    user: avatar7,
    location: "Iran, Ardabil",
    name: "sara",
    likes: 12300,
    comments: 20,
    position: [37.505, 48.5],
    username: "sara.ssss",
    caption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores iure ex asperiores ducimus fugiat, exercitationem dolorem ad reprehenderit omnis quam.",
  },
  {
    image: post2,
    id: 8,
    title: "post-img",
    user: avatar5,
    location: "Iran, Tehran",
    name: "susan",
    likes: 1500,
    comments: 120,
    position: [35.505, 51.5],
    username: "susan.ssss",
    caption:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas odio molestias magni assumenda deleniti nihil aut, aperiam delectus.",
  },
  {
    image: post6,
    id: 10,
    title: "post-img",
    user: avatar10,
    location: "Iran, Tehran",
    name: "eisa",
    likes: 35000,
    comments: 2300,
    position: [35.505, 51.5],
    username: "eisa.eeee",
    caption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil modi dolorem dignissimos blanditiis nulla veniam quo illo?",
  },
  {
    image: post7,
    id: 11,
    title: "post-img",
    user: avatar9,
    location: "Iran, Tehran",
    name: "fatemeh",
    likes: 5999,
    comments: 342,
    position: [35.505, 51.5],
    username: "fatemeh.ffff",
    caption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem repudiandae ad animi vero nesciunt est, modi incidunt veniam omnis eum cupiditate.",
  },
  {
    image: post8,
    id: 12,
    title: "post-img",
    user: avatar8,
    location: "Iran, boshehr",
    name: "ali reza",
    likes: 350,
    comments: 10,
    position: [35.505, 51.5],
    username: "alireza.aaaa",
    caption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci placeat quo vitae.",
  },
  {
    image: post5,
    id: 13,
    title: "post-img",
    user: avatar13,
    location: "Iran, Mashhad",
    name: "elisa",
    likes: 1200,
    comments: 500,
    position: [37.505, 60.5],
    username: "elisa.eeee",
    caption:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, sit.",
  },
  {
    image: post4,
    id: 14,
    title: "post-img",
    user: adminDefualt,
    location: "Iran, Ardabil",
    name: "eisa",
    likes: 20345,
    comments: 982,
    position: [37.505, 48.5],
    username: "eisa.rez",
    caption:
      "Lorem  dolor sit amet consectetur ipsum, adipisicing elit. Voluptates, sit.",
  },
  {
    image: post5,
    id: 15,
    title: "post-img",
    user: adminDefualt,
    location: "Iran, Ardabil",
    name: "eisa",
    likes: 12340,
    comments: 234,
    position: [37.505, 48.5],
    username: "eisa.rez",
    caption:
      "Lorem onsectetur, adipisicing elit. Voluptates,  consectetur, adipisicing elit. Voluptates, sit.",
  },
  {
    image: post6,
    id: 16,
    title: "post-img",
    user: adminDefualt,
    location: "Iran, Ardabil",
    name: "eisa",
    likes: 999,
    comments: 243,
    position: [37.505, 48.5],
    username: "eisa.rez",
    caption:
      "Lorem , adipisicing elit. Voluptates, sit ipsum dolor sit amet consectetur.",
  },
]
export const highlights = [
  { icon: <FaBehance />, title: "behance", color: "#224cf5", id: 1 },
  { icon: <FaDribbble />, title: "dribble", color: "#e73668", id: 2 },
  { icon: <FaPinterestP />, title: "pinter", color: "#e83223", id: 3 },
  { icon: <ImSpoonKnife />, title: "spoon", color: "#6734e1", id: 4 },
]

export const initialUser = {
  avatar: userImage,
  name: "Eisa Reazaei",
  title: "front end web developer",
  bio: "front end react web developer living in Iran country  *** THIS IS DEFAULT ***",
  username: "eisa.rez",
  location: "Iran",
  highlights: highlights,
  userposts: [
    { image: post4, id: 14, title: "picture" },
    { image: post5, id: 15, title: "picture2" },
    { image: post6, id: 16, title: "picture3" },
  ],
}

const userFollowOption = {
  followers: [
    {
      avatar: avatar1,
      username: "nick.nnnn",
      name: "nick",
      user_id: 1,
    },
    {
      avatar: avatar2,
      username: "john.hhhh",
      name: "john",
      user_id: 2,
    },
    {
      avatar: avatar3,
      username: "mahsa.mmmm",
      name: "mahsa",
      user_id: 3,
    },
    {
      avatar: avatar4,
      username: "ali.aaaa",
      name: "ali",
      user_id: 4,
    },
    {
      avatar: avatar9,
      username: "fatemeh.ffff",
      name: "fatemeh",
      user_id: 5,
    },
    {
      avatar: avatar10,
      username: "eisa.eeee",
      name: "eisa",
      user_id: 6,
    },
    {
      avatar: avatar5,
      username: "susan.ssss",
      name: "susan",
      user_id: 7,
    },
    {
      avatar: avatar13,
      username: "elisa.eeee",
      name: "elisa",
      user_id: 8,
    },
    {
      avatar: avatar8,
      username: "alireza.aaaa",
      name: "alireza",
      user_id: 9,
    },
    {
      avatar: avatar7,
      username: "sara.ssss",
      name: "sara",
      user_id: 10,
    },
    {
      avatar: adminDefualt,
      username: "eisa.rez",
      name: "eisa",
      user_id: 11,
    },
  ],
  followings: [
    {
      avatar: avatar1,
      username: "nick.nnnn",
      name: "nick",
      user_id: 1,
    },
    {
      avatar: avatar2,
      username: "john.hhhh",
      name: "john",
      user_id: 2,
    },
    {
      avatar: avatar3,
      username: "mahsa.mmmm",
      name: "mahsa",
      user_id: 3,
    },
    {
      avatar: avatar4,
      username: "ali.aaaa",
      name: "ali",
      user_id: 4,
    },
    {
      avatar: avatar9,
      username: "fatemeh.ffff",
      name: "fatemeh",
      user_id: 5,
    },
    {
      avatar: avatar10,
      username: "eisa.eeee",
      name: "eisa",
      user_id: 6,
    },
    {
      avatar: avatar5,
      username: "susan.ssss",
      name: "susan",
      user_id: 7,
    },
    {
      avatar: avatar13,
      username: "elisa.eeee",
      name: "elisa",
      user_id: 8,
    },
    {
      avatar: avatar8,
      username: "alireza.aaaa",
      name: "alireza",
      user_id: 9,
    },
    {
      avatar: avatar7,
      username: "sara.ssss",
      name: "sara",
      user_id: 10,
    },
    {
      avatar: adminDefualt,
      username: "eisa.rez",
      name: "eisa",
      user_id: 11,
    },
  ],
}

export const users = [
  {
    avatar: avatar1,
    name: "nick",
    username: "nick.nnnn",
    followers: userFollowOption.followers,
    followings: userFollowOption.followings,
    user_id: 1,
    bio: "Hello my name is Nick And I am From Some where",
    title: " web prgrammer",
    highlights: highlights,
  },
  {
    avatar: avatar2,
    name: "john",
    username: "john.hhhh",
    followers: userFollowOption.followers,
    followings: userFollowOption.followings,
    user_id: 2,
    bio: "Hello my name is John ",
    title: "worker",
    highlights: highlights,
  },
  {
    avatar: avatar3,
    name: "mahsa",
    username: "mahsa.mmmm",
    followers: userFollowOption.followers,
    followings: userFollowOption.followings,
    user_id: 3,
    bio: "Hello my name is Mahsa Iranian ",
    title: " paniter ",
    highlights: highlights,
  },
  {
    avatar: avatar4,
    name: "ali",
    username: "ali.aaaa",
    followers: userFollowOption.followers,
    followings: userFollowOption.followings,
    user_id: 4,
    bio: "Hello my name is Ali ",
    title: " manager ",
    highlights: highlights,
  },
  {
    avatar: avatar9,
    name: "fatemeh",
    username: "fatemeh.ffff",
    followers: userFollowOption.followers,
    followings: userFollowOption.followings,
    user_id: 5,
    bio: "Hello my name is Fateme and I am from Iran ",
    title: " desiner ",
    highlights: highlights,
  },
  {
    avatar: avatar10,
    name: "eisa",
    username: "eisa.eeee",
    followers: userFollowOption.followers,
    followings: userFollowOption.followings,
    user_id: 6,
    bio: "Hello my name is Eisa and i am from Tehran ",
    title: " web developer ",
    highlights: highlights,
  },
  {
    avatar: avatar5,
    name: "susan",
    username: "susan.ssss",
    followers: userFollowOption.followers,
    followings: userFollowOption.followings,
    user_id: 7,
    bio: "Hello There! My name is Susan and i am from some where ",
    title: " local guide ",
    highlights: highlights,
  },
  {
    avatar: avatar13,
    name: "elisa",
    username: "elisa.eeee",
    followers: userFollowOption.followers,
    followings: userFollowOption.followings,
    user_id: 8,
    bio: "Heyoo! my name is Elisa and I am from Mashhad",
    title: " engineer  ",
    highlights: highlights,
  },
  {
    avatar: avatar8,
    name: "alireza",
    username: "alireza.aaaa",
    followers: userFollowOption.followers,
    followings: userFollowOption.followings,
    user_id: 9,
    bio: "Hello my name is AliReza living in Boushehr",
    title: " student ",
    highlights: highlights,
  },
  {
    avatar: avatar7,
    name: "sara",
    username: "sara.ssss",
    followers: userFollowOption.followers,
    followings: userFollowOption.followings,
    user_id: 10,
    bio: "Hello my name is Sara living in Hamadan ",
    title: " student ",
    highlights: highlights,
  },
  {
    avatar: adminDefualt,
    name: "eisa",
    username: "eisa.rez",
    followers: userFollowOption.followers,
    followings: userFollowOption.followings,
    user_id: 11,
    title: "React developer",
    bio: "Frontend | react developer living in Iran country.",
    highlights: highlights,
  },
]

export const SETTING_LIST = [
  { title: "Setting", icon: <FiSettings /> },
  { title: "Archives", icon: <BiArchiveIn /> },
  { title: "Insights", icon: <CgInsights /> },
  { title: "Your Activity", icon: <BsClockHistory /> },
  { title: "Qr Code", icon: <AiOutlineQrcode /> },
  { title: "Saved", icon: <RiBookmarkFill /> },
  { title: "Close Friends", icon: <BsListCheck /> },
  { title: "Discover People", icon: <BsFillPersonPlusFill /> },
  { title: "Covid 19 information center", icon: <RiMentalHealthLine /> },
]
