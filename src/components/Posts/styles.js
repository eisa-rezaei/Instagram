import styled, { keyframes } from "styled-components"

const like = keyframes`
0%{
      visibility: visible; 
        font-size : 4rem
}
30%{
      visibility: visible; 
        font-size : 6rem;
}
60%{
      visibility: visible; 
        font-size : 5rem;
}
100%{
      visibility: hidden; 
        font-size : 5rem;
}
`

export const StyledPostPageCt = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  padding-bottom: 60px;
`
export const StyledPostPageHeader = styled.header`
  width: 100%;
  min-height: 70px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  font-size: 2rem;
  border-bottom: 1px solid #d0d0d0;
  & a {
    display: flex;
    align-items: center;
    margin-right: 50px;
    transition: all 0.15s linear;
    cursor: pointer;
    :hover {
      color: orange;
    }
  }
`
export const StyledPostCt = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  overflow: scroll;

  & img {
    width: 100%;
    height: 400px;
    object-fit: fill;
  }
`
export const StyledPostHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 1.4rem;
  padding: 10px 20px;
  border-bottom: 1px solid #d0d0d0;

  & img {
    width: 100%;
    object-fit: cover;
  }

  & svg {
    transition: all 0.15s linear;
    :hover {
      cursor: pointer;
      color: orange;
    }
  }
`

export const StyledPostHeadDetails = styled.div`
  width: 200px;
  display: flex;
  flex-direction: row;
  align-items: center;

  & a {
    display: flex;
    align-items: center;
    & img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      cursor: pointer;
      :hover {
        border: 1px solid orange;
      }
    }
  }
`
export const StyledPostHeadDetailsUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  & h5 {
    font-size: 1rem;
    :hover {
      text-shadow: 0px 0px 1px orange;
    }
  }
  & p {
    font-size: 0.8rem;
    transition: all 0.15s linear;
    :hover {
      color: orange;
      cursor: pointer;
    }
  }
`
export const StyledPostIconsBar = styled.div`
  width: 100%;
  min-height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  font-size: 1.5rem;
  border-bottom: 1px solid #d0d0d0;

  & svg {
    :hover {
      color: orange;
      cursor: pointer;
    }
  }

  & span {
    width: 120px;
    display: flex;
    justify-content: space-between;
    ${props =>
      props.isLiked &&
      `svg:first-child {
      color: red;
    }`}
  }
`

export const StyledPostCaption = styled.div`
  width: 100%;
  min-height: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 20px;
  font-size: 1rem;
  & h4 {
    margin: 10px 0;
    :hover {
      text-shadow: 0px 0px 1px steelblue;
      cursor: pointer;
    }
  }
  & a {
    font-weight: bold;
    margin-right: 20px;
    :hover {
      text-shadow: 0px 0px 1px orange;
      cursor: pointer;
    }
  }
`

export const StyledPostOptions = styled.ul`
  width: 100%;
  height: 310px;
  ${props =>
    props.postOptionIsOpen
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
    padding: 20px;
    transition: all 0.15s linear;
    :hover {
      background-color: #e0e0e0;
      cursor: pointer;
    }
  }
`
// display shade on screen
export const StyledPostOptionShade = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  z-index: 2;
  background-color: #00000050;
  ${props => (props.postOptionIsOpen ? `display:block` : `display:none;`)}
`

export const StyledPostImgCt = styled.div`
  width: 100%;
  height: 400px;
  position: relative;
  & img {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }
`
export const StyledPostHeartAnimation = styled.div`
  width: 150px;
  height: 150px;
  top: 130px;
  left: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  visibility: hidden;
  animation: ${props => (props.isLiked ? like : null)} 1s ease;
  z-index: 2;
  & svg {
    color: #fff;
  }
`
