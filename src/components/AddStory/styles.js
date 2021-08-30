import styled from "styled-components"

export const StyledStoryPageCt = styled.main`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: scroll;

  & span {
    width: 70px;
    height: 70px;
    bottom: 170px;
    cursor: pointer;
    left: 40%;
    z-index: 5;
    border-radius: 50%;
    position: absolute;
    border: 1px solid #fff;
    color: #fff;
    font-size: 1.6rem;
    display: flex;
    align-items: center;
    justify-content: center;

    & p {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background-color: #fff;
    }
  }
`
export const StyledStoryPageheader = styled.header`
  width: 100%;
  top: 0;
  z-index: 2;
  padding: 25px 40px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & svg {
    color: #222;
    cursor: pointer;
    background-color: #ffffff80;
    border-radius: 50%;
    font-size: 2rem;
    padding: 5px;
    :hover {
      color: orange;
    }
  }
`

export const StyledStoryPageCamera = styled.video`
  width: 100%;
  min-height: 90vh;
  object-fit: cover;
  z-index: 1;
`
export const StyledStoryPageCameraGallary = styled.div`
  width: 100%;
  height: auto;
  min-height: 160px;
  position: absolute;
  top: 78%;
  z-index: 4;
  overflow: hidden;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.01) 0%,
    rgba(0, 0, 0, 0.46) 5%,
    rgba(0, 0, 0, 1) 25%
  );
  & img {
    width: 130px;
    height: 120px;
    margin: 0 5px;
  }
`

export const StyledStoryPageCameraGallaryLinks = styled.div`
  width: 100vw;
  height: 40px;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  padding: 5px 0;
  color: #e0e0e0;

  & p {
    width: 110px;
    height: 20px;
    text-align: center;
    font-size: 0.7rem;

    :hover {
      color: #a0a0a0;
      cursor: pointer;
    }
  }
`

export const StyledStoryPageCameraResult = styled.canvas`
  width: 100%;
  height: 90vh;
  top: 0;
  right: ${props => (props.taken ? `0%` : `100%`)};
  position: absolute;
  z-index: 4;
  object-fit: cover;
  background-color: #22222299;
`
