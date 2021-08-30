import styled from "styled-components"

export const StyledProfilePageCt = styled.main`
  width: 100%;
  height: 100%;
  margin: 0px auto;
  padding: 1rem;
  padding-bottom: 60px;
  background-color: #fff;
  font-size: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  text-transform: capitalize;
`

export const StyledProfileHeader = styled.header`
  width: 100%;
  height: 50px;
  padding: 0 5px;
  font-size: 1.6rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
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
  & img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 50%;
    border: 1px solid #d0d0d0;
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
  & span {
    text-align: center;
    & p {
      margin-top: 5px;
      font-size: 0.7rem;
    }
  }
`
export const StyledProfileUserInfoBio = styled.div`
  width: 100%;
  height: 90px;
  margin: 15px 0;
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
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 15px auto;
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
`
export const StyledProfilePostsNav = styled.div`
  width: 100%;
  display: flex;
  & span {
    width: 50%;
    text-align: center;
    font-size: 1.4rem;
    border-bottom: 1px solid #d0d0d0;
    color: #909090;
    cursor: pointer;
    :nth-child(1) {
      color: #e73666;
      border-bottom: 1px solid #e73666;
    }
  }
`
export const StyledProfilePostsCt = styled.div`
  width: 100%;
  height: auto;
  overflow-x: scroll;
`

export const StyledProfilePostsCtImages = styled.div`
  width: 100%;
  height: auto;
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: left;
  flex-wrap: wrap;
`
export const StyledProfilePageSinglePost = styled.div`
  width: 126px;
  height: 127px;
  & img {
    width: 120px;
    height: 125px;
    margin: 0 2px 2px 0;
    object-fit: cover;
  }
`
