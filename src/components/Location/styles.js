import styled from "styled-components"

export const StyledLocationPageCt = styled.main`
  width: 100%;
  height: 100%;
  padding-bottom: 60px;
  overflow: auto;
  .leaflet-container {
    height: 30vh;
  }
`
export const StyledLocationPageHeader = styled.header`
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
export const StyledLocationPageContantTop = styled.div`
  width: 100%;
  min-height: 150px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  & span {
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    border-radius: 50%;
    border: 1px solid #d0d0d0;
  }
`
export const StyledLocationPageContantTopInfo = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  & h5 {
    color: #a0a0a0;
  }
`
export const StyledLocationPageSecoundContantToggle = styled.div`
  width: 100%;
  min-height: 50px;
  display: flex;
  align-items: center;
  & span {
    width: 50%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    ${props =>
      props.isTopPage
        ? ":first-child {border-bottom: 3px solid #222;}"
        : ":last-child {border-bottom: 3px solid #222;}"}
  }
`

export const StyledLocationPageSecoundContant = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
`
export const StyledLocationPageSecoundContantSinlgeItem = styled.div`
  width: 33.333%;
  height: 127px;
  & img {
    width: 99%;
    height: 125px;
    margin: 0 2px 2px 0;
  }
`
