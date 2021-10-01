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

export const StyledHomeSinglePost = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`
export const StyledHomeSinglePostHead = styled.header`
  width: 100%;
  height: 80px;
  top: 0px;
  padding: 0px 20px;
  color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  z-index: 2;
  font-size: 1.6rem;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(84, 84, 84, 0.5) 100%
  );
  & svg {
    transition: all 0.15s linear;
    :hover {
      cursor: pointer;
      color: orange;
    }
  }
`
export const StyledHomeSinglePostHeadDetails = styled.div`
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
      background-color: royalblue;
      transition: all 0.15s linear;
      object-fit: contain;
      :hover {
        border: 1px solid orange;
      }
    }
  }
`
export const StyledHomeSinglePostHeadDetailsUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  & h5 {
    font-size: 1.5rem;
    :hover {
      text-shadow: 1px 1px 1px orange;
    }
  }
  & p {
    transition: all 0.15s linear;
    :hover {
      color: orange;
      cursor: pointer;
    }
  }
`

export const StyledHomeSinglePostLikesCommentsBox = styled.div`
  width: 250px;
  height: 70px;
  bottom: 10px;
  margin: 0 auto;
  position: absolute;
  font-size: 0.7rem;
  border-radius: 40px;
  color: #222;
  background-color: #ffffffdd;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  & svg {
    font-size: 1.4rem;
    margin: 10px;
    cursor: pointer;
    transition: all 0.15s linear;
    :hover {
      color: orange;
    }
  }

  & span {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    ${props =>
      props.isLiked &&
      `  :first-child {
      & svg {
        color: red;
      }
    }`}
  }
`
export const StyledHomeSinglePostImgCt = styled.div`
  width: 100%;
  height: 450px;
  position: relative;
  & img {
    width: 100%;
    height: 450px;
    object-fit: cover;
  }
`
export const StyledHomeSinglePostHeartAnimation = styled.div`
  width: 150px;
  height: 150px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
