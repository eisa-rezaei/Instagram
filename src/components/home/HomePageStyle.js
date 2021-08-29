import styled from "styled-components"

export const StyledHomeCt = styled.main`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 1rem;
  padding-bottom: 60px;
  position: relative;
  font-size: 3rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  text-transform: capitalize;
`
export const StyledHomeHeader = styled.header`
  width: 100%;
  height: 50px;
  margin: 10px auto;
  padding: 0 5px;
  font-size: 1.6rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  & span {
    font-family: "Style Script", cursive;
    font-weight: 600;
  }
  & svg {
    cursor: pointer;
    transition: all 0.15s linear;
    :hover {
      color: orange;
    }
  }
`
export const StyledHomeHeaderIcons = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
`

export const StyledHomeStories = styled.div`
  width: 200%;
  height: 120px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-left: 5px;
`
export const StyledHomeStory = styled.div`
  width: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  margin-bottom: 20px;
  & img {
    width: 56px;
    height: 56px;
    border: 2px solid #fff;
    border-radius: 50%;
  }
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
    font-size: 1.5rem;
    overflow: hidden;
    border-radius: 50%;
    cursor: pointer;
    background: rgb(214, 41, 118);
    background: linear-gradient(
      34deg,
      rgba(214, 41, 118, 1) 12%,
      rgba(254, 218, 117, 1) 37%,
      rgba(249, 210, 119, 1) 46%,
      rgba(185, 106, 143, 1) 66%,
      rgba(150, 47, 191, 1) 82%
    );
  }
`
export const StyledHomeUserStory = styled.span`
  width: 100px;
  background: #fff !important;
  border: 2px solid #e0e0e0;
  color: #606060;
`
export const StyledHomePosts = styled.div`
  overflow: scroll;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: start;
  border-radius: 30px 30px 0 0;
`
export const StyledHomeSinglePost = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  & img {
    width: 100%;
    height: 450px;
    object-fit: cover;
  }
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
  & span {
    width: 150px;
    display: flex;
    flex-direction: column;
    margin-left: 20px;
  }
  & img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  & h5 {
    font-size: 1.5rem;
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
  }
`
export const StyledHomeSinglePostPostOption = styled.div`
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

  & span {
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
export const StyledHomeShade = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  z-index: 2;
  background-color: #00000050;
  ${props => (props.postOptionIsOpen ? `display:block` : `display:none;`)}
`
