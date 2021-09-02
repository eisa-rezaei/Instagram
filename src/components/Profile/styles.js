import styled from "styled-components"

export const StyledProfilePageCt = styled.main`
  width: 100%;
  height: 100%;
  position: relative;
`
export const StyledProfilePageContent = styled.div`
  width: 100%;
  height: 100%;
  margin: 0px auto;
  padding: 1rem 0;
  padding-bottom: 60px;
  background-color: #fff;
  font-size: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  text-transform: capitalize;
  overflow-y: scroll;
  overflow-x: hidden;
`

export const StyledProfileHeader = styled.header`
  width: 100%;
  height: 50px;
  padding: 0 1rem;
  font-size: 1.6rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #d0d0d0;
  margin-bottom: 10px;
  & p {
    font-weight: bold;
  }
  & span {
    width: 26%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-transform: lowercase;
  }
  & svg {
    cursor: pointer;
    :hover {
      color: orange;
    }
  }
`
export const StyledProfileUserInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 1rem;
`
export const StyledProfileImageCt = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  & img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 50%;
    border: 1px solid #d0d0d0;
  }
  & a {
    bottom: 0;
    right: 0;
    color: #fff;
    font-size: 0.6rem;
    padding: 5px;
    position: absolute;
    border-radius: 50%;
    background-color: #2f93f5;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  @media (max-width: 600px) {
    width: 70px;
    height: 70px;
    & img {
      width: 70px;
      height: 70px;
    }
  }
`
export const StyledProfileUserInfoFollowers = styled.div`
  width: 70%;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  font-size: 1.4rem;
  margin: 0 auto;
  & svg {
    color: #e0e0e0;
  }
  & span,
  a {
    text-align: center;
    & p {
      margin-top: 5px;
      font-size: 0.7rem;
    }
  }
  @media (max-width: 600px) {
    margin-left: 15px;
  }
`
export const StyledProfileUserInfoBio = styled.div`
  width: 100%;
  height: 90px;
  margin: 15px 0;
  padding: 0 1rem;
  & h6 {
    font-size: 1.1rem;
    font-weight: 500;
    & span {
      font-size: 0.7rem;
      font-weight: normal;
    }
  }
  & p {
    font-size: 0.8rem;
    margin-top: 5px;
  }
`
export const StyledProfileUserInfoEditBtns = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  & button {
    width: 30%;
    height: 45px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    border: 1px solid #d0d0d0;
    transition: all 0.3s linear;
    :hover {
      background-color: #f0f0f0;
    }
  }
`

export const StyledProfileHighlights = styled.div`
  width: 100%;
  height: 120px;
  padding: 0 1rem;
  margin: 15px auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`
export const StyledProfileHighlight = styled.div`
  width: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  & p {
    font-size: 0.7rem;
    margin-top: 5px;
  }
  & span {
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => (props.color ? `#fff` : `#606060`)};
    background-color: ${props => (props.color ? props.color : `#fff`)};
    font-size: 1.5rem;
    overflow: hidden;
    border-radius: 50%;
    cursor: pointer;
    border: ${props => (props.color ? `none` : `1px solid #d0d0d0`)};
  }
  @media (max-width: 600px) {
    width: 110px;
    margin-right: 5px;
    & p {
      font-size: 0.5rem;
    }
    & span {
      width: 45px;
      height: 45px;
      font-size: 1.2rem;
    }
  }
`
export const StyledProfilePostsNav = styled.div`
  width: 100%;
  display: flex;
  padding: 0 1rem;
  & span {
    width: 50%;
    text-align: center;
    font-size: 1.4rem;
    border-bottom: 1px solid #d0d0d0;
    color: #909090;
    cursor: pointer;

    ${props => (props.isPostGrid ? `:nth-child(1)` : `:nth-child(2)`)} {
      color: #e73666;
      border-bottom: 1px solid #e73666;
    }
  }
`
export const StyledProfilePostsCt = styled.div`
  width: 100%;
  height: auto;
`

export const StyledProfilePostsCtImages = styled.div`
  width: 100%;
  height: auto;
  margin-top: 15px;
  padding: 0 1rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
`
export const StyledProfilePageSinglePost = styled.div`
  width: 33.33%;
  height: 127px;
  & img {
    width: 99%;
    height: 125px;
    margin: 0 2px 2px 0;
    object-fit: cover;
  }
`

export const StyledProfileSideBar = styled.ul`
  width: 100%;
  height: 80%;
  ${props =>
    props.isSetteingOpen
      ? ` transform: translateY(0%);`
      : `  transform: translateY(100%);`};
  bottom: 60px;
  left: 0;
  color: #222;
  font-size: 1rem;
  display: flex;
  position: absolute;
  flex-direction: column;
  transition: all 0.2s ease-in-out;
  border-radius: 30px 30px 0 0;
  background-color: #fff;
  overflow: hidden;
  z-index: 3;

  & li {
    width: 100%;
    height: 100%;
    padding: 15px;
    transition: all 0.15s linear;
    display: flex;
    flex-direction: row;
    align-items: center;
    & svg {
      margin-right: 15px;
      font-size: 1.3rem;
    }
    :hover {
      background-color: #e0e0e0;
      cursor: pointer;
    }
  }
`
export const StyledProfileShade = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  z-index: 2;
  background-color: #00000050;
  ${props => (props.isSetteingOpen ? `display:block` : `display:none;`)}
`
