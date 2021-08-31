import React from "react"
import { Link } from "gatsby"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"

import { BsArrowLeft } from "react-icons/bs"
import { MdLocationOn } from "react-icons/md"

import { posts } from "../../data/data"

import Layout from "../Layout"
import {
  StyledLocationPageContantTop,
  StyledLocationPageContantTopInfo,
  StyledLocationPageCt,
  StyledLocationPageHeader,
  StyledLocationPageSecoundContant,
  StyledLocationPageSecoundContantSinlgeItem,
  StyledLocationPageSecoundContantToggle,
} from "./styles"

const Location = props => {
  const post = posts.filter(post => post.id === parseInt(props.id))

  const { location, position } = post[0]

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
                <Link to={`/posts/${id}`}>
                  <img src={image} alt={title} />
                </Link>
              </StyledLocationPageSecoundContantSinlgeItem>
            ))}
        </StyledLocationPageSecoundContant>
      </StyledLocationPageCt>
    </Layout>
  )
}

export default Location
