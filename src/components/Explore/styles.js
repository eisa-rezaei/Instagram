import styled from "styled-components"

export const StyledGlobalPageCt = styled.main`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 60px;
  overflow: auto;
`

// displaying the search box
export const StyledGlobalPageHeader = styled.header`
  width: min(100%, 100vw);
  min-height: 70px;
  padding: 20px;
  position: sticky;
  top: 0;
  z-index: 2;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`

// displaying the search box
export const StyledGlobalPageHeaderSearchBox = styled.div`
  width: 90%;
  height: 40px;
  z-index: 2;
  font-size: 1.5rem;
  background-color: #e0e0e0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`

export const StyledGlobalPageHeaderInput = styled.input`
  width: 80%;
  height: 100%;
  background-color: inherit;
  font-size: 1.1rem;
  padding-left: 5px;
  outline: none;
`
export const StyledGlobalPageFirstContant = styled.div`
  width: 100%;
  height: 262px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  & img {
    width: 280px;
    height: 260px;
    object-fit: fill;
  }
  & span {
    width: 33.33%;
    a {
      display: flex;
      flex-direction: column;
      margin-bottom: 2px;
      & img {
        width: 100%;
        height: 128px;
        object-fit: fill;
        margin: 0 2px 2px 0;
      }
    }
  }
  @media (max-width: 600px) {
    justify-content: space-between;
    & span {
      & img {
        min-width: 120px;
        height: 260px;
        object-fit: fill;
      }
    }
  }
`
export const StyledGlobalPageSecoundContant = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
`
export const StyledGlobalPageSecoundContantSinlgeItem = styled.div`
  width: 33.333%;
  height: 127px;
  & img {
    width: 99%;
    height: 125px;
    margin: 0 2px 2px 0;
  }
`
