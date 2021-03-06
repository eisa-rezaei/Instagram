import React, { useRef, useState, useEffect } from "react"
import { Link } from "gatsby"
import { AiOutlineClose } from "react-icons/ai"
import { IoIosFlash } from "react-icons/io"
import { posts } from "../../data/data"
import Layout from "../Layout"
import {
  StyledStoryPageCamera,
  StyledStoryPageCameraGallary,
  StyledStoryPageCameraGallaryLinks,
  StyledStoryPageCameraResult,
  StyledStoryPageCt,
  StyledStoryPageheader,
} from "./styles"

// You can name the constant variables with UPPERCASE so, ppl will understand that this
// variable is a constant one
const GALLERY_LINKS = [
  "Camera Roll",
  "Screen Shots",
  "Favorites",
  "Holiday 2021",
  "Gallary Roll",
  "boo Roll",
  "jooo Roll",
]

const AddStory = () => {
  const videoRef = useRef(null)
  const photoRef = useRef(null)
  const [hasTaken, setHasTaken] = useState(false)

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: { width: 2000, height: 3000 / (16 / 9) } })
      .then(streem => {
        let video = videoRef.current
        video.srcObject = streem
        video.play()
      })
      .catch(err => console.log("error massage :", err))
  }

  useEffect(() => {
    getVideo()
  }, [videoRef])

  // handler functions

  const takePhotoHandler = () => {
    const width = 280
    const height = width / (16 / 9)
    let video = videoRef.current
    let photo = photoRef.current
    let ctx = photo.getContext("2d")
    ctx.drawImage(video, 0, 0, width, height)
    setHasTaken(true)
  }

  const removephotoHandler = () => {
    const width = 280
    const height = width / (16 / 9)
    let video = videoRef.current
    let photo = photoRef.current
    let ctx = photo.getContext("2d")
    ctx.clearRect(video, 0, 0, width, height)
    setHasTaken(false)
  }
  return (
    <Layout>
      <StyledStoryPageCt>
        <StyledStoryPageheader>
          <Link to="/">
            <AiOutlineClose />
          </Link>
          <IoIosFlash />
        </StyledStoryPageheader>
        <StyledStoryPageCamera ref={videoRef}></StyledStoryPageCamera>
        <StyledStoryPageCameraResult
          taken={hasTaken}
          ref={photoRef}
        ></StyledStoryPageCameraResult>
        {hasTaken ? (
          <span aria-hidden="true" onClick={removephotoHandler}>
            x
          </span>
        ) : (
          <span aria-hidden="true" onClick={takePhotoHandler}>
            <p />
          </span>
        )}
        <StyledStoryPageCameraGallary>
          <StyledStoryPageCameraGallaryLinks>
            {GALLERY_LINKS.map((item, index) => (
              <p key={index}> {item}</p>
            ))}
          </StyledStoryPageCameraGallaryLinks>
          {posts.map(({ image, title }, id) => (
            <img src={image} alt={title} key={id} />
          ))}
        </StyledStoryPageCameraGallary>
      </StyledStoryPageCt>
    </Layout>
  )
}

export default AddStory
