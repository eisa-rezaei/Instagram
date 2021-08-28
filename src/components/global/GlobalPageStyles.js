import styled from "styled-components"

export const StyledGlobalPageCt = styled.main`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  overflow-y: scroll;
`

//dispalying the search box
export const StyledGlobalPageHeader = styled.header`
  width: 100%;
  min-height: 60px;
  padding: 0 20px;
  position: sticky;
  top: 0;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

//dispalying the search box
export const StyledGlobalPageHeaderSearchBox = styled.div`
  width: 90%;
  height: 40px;
  font-size: 1.5rem;
  background-color: #e0e0e0;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
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
    width: 300px;
    height: 260px;
    object-fit: fill;
  }
  & span {
    display: flex;
    flex-direction: column;
    margin-bottom: 2px;
    & img {
      width: 138px;
      height: 129px;
      object-fit: fill;
      margin: 0 2px 2px 0;
    }
  }
`
export const StyledGlobalPageSecoundContant = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
`
export const StyledGlobalPageSecoundContantSinlgeItem = styled.div`
  height: 127px;
  & img {
    width: 138px;
    height: 125px;
    margin: 0 2px 2px 0;
  }
`