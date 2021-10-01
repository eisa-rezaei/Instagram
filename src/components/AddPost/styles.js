import styled from "styled-components"

export const StyledAddPostCt = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  overflow: auto;
  padding: 1rem 0;
`

export const StyledHeader = styled.header`
  width: 100%;
  min-height: 50px;
  padding: 0 20px;
  font-size: 1.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #d0d0d0;
  & svg {
    :hover {
      color: orange;
      cursor: pointer;
      margin-bottom: 0;
    }
  }
  & span {
    & p {
      font-size: 1.2rem;
    }
    width: 150px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`
export const StyledImagesCt = styled.div`
  width: 100%;
  height: 50vh;
  background-color: #e0e0e0;
  position: relative;
  & img {
    width: 100%;
    height: 50vh;
    object-fit: ${props => (props.imageCover ? `cover` : `contain`)};
  }
  & span {
    left: 40px;
    bottom: 40px;
    padding: 5px;
    color: #fff;
    z-index: 2;
    font-size: 1.7rem;
    position: absolute;
    background-color: #00000080;
    cursor: pointer;
    border-radius: 50%;
    display: flex;
    align-items: center;
  }
`
export const StyledImgLocation = styled.div`
  width: 100%;
  min-height: 60px;
  top: 0;
  position: sticky;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px 0 20px;
  & p {
    display: flex;
    align-items: center;
    svg {
      margin-left: 8px;
      :hover {
        color: orange;
        cursor: pointer;
      }
    }
  }
  & span {
    width: 90px;
    display: flex;
    justify-content: space-between;
    & svg {
      border-radius: 50%;
      background-color: #00000050;
      color: #fff;
      padding: 5px;
      font-size: 1.8rem;
      :hover {
        background-color: #00000080;
        cursor: pointer;
      }
    }
  }
`

export const StyledImgList = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  & img {
    width: 100px;
    height: 100px;
    cursor: pointer;
    margin-bottom: 5px;
  }
`
