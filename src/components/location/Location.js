import React from "react"
import { Link } from "gatsby"
import { BsArrowLeft } from "react-icons/bs"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import Layout from "../layout/Layout"
import {
  StyledLocationPageContantTop,
  StyledLocationPageContantTopInfo,
  StyledLocationPageCt,
  StyledLocationPageHeader,
  StyledLocationPageSecoundContant,
  StyledLocationPageSecoundContantSinlgeItem,
  StyledLocationPageSecoundContantToggle,
} from "./LocationStyle"
import { MdLocationOn } from "react-icons/md"
import { posts } from "../../data/data"

const Location = ({ post }) => {
  const selectedPost = post[0]
  const { location, position } = selectedPost

  return (
    <Layout>
      <StyledLocationPageCt>
        <StyledLocationPageHeader>
          <Link to="/">
            <BsArrowLeft />
          </Link>
          <h5>{location}</h5>
        </StyledLocationPageHeader>
        <StyledLocationPageContantTop>
          <span>
            <MdLocationOn />
          </span>
          <StyledLocationPageContantTopInfo>
            <h6>City</h6>
            <h5>{location}</h5>
          </StyledLocationPageContantTopInfo>
        </StyledLocationPageContantTop>
        <MapContainer center={position} zoom={9} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup position={position}>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
        <StyledLocationPageSecoundContantToggle>
          <span>Top</span>
          <span> Recent</span>
        </StyledLocationPageSecoundContantToggle>
        <StyledLocationPageSecoundContant>
          {posts
            .filter(post => post.location === location)
            .map(({ image, id, title }) => (
              <StyledLocationPageSecoundContantSinlgeItem key={id}>
                <img src={image} alt={title} />
              </StyledLocationPageSecoundContantSinlgeItem>
            ))}
        </StyledLocationPageSecoundContant>
      </StyledLocationPageCt>
    </Layout>
  )
}

export default Location
