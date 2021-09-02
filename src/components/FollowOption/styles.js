import styled from "styled-components"

export const StyledFollowOptionPageCt = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
`

export const StyledFollowOptionHeader = styled.header`
  width: 100%;
  min-height: 70px;
  top: 0;
  z-index: 2;
  display: flex;
  padding: 0 20px;
  font-size: 1.5rem;
  position: absolute;
  align-items: center;
  background-color: #fff;
  & span {
    width: 30px;
    font-size: 2rem;
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
export const StyledFollowOptionTogglePagesBar = styled.div`
  width: 100%;
  height: 50px;
  top: 70px;
  z-index: 2;
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 2px solid gray;
  background-color: #fff;
  & button {
    width: 50%;
    height: 50px;
    font-size: 1rem;
    ${props => (props.isFollowingPage ? `:last-child` : `:first-child`)} {
      border-bottom: 2px solid black;
    }
  }
`

export const StyledFollowOptionSearchBox = styled.div`
  width: 90%;
  min-height: 40px;
  font-size: 1.5rem;
  background-color: #e0e0e0;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 135px;
  margin-bottom: 15px;
`

export const StyledFollowOptionInput = styled.input`
  width: 80%;
  height: 100%;
  background-color: inherit;
  font-size: 1.1rem;
  padding-left: 5px;
  outline: none;
`

export const StyledUsersListCt = styled.ul`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 16px;
  margin-bottom: 60px;
  & h3 {
    font-size: 1.1rem;
    font-weight: 600;
    margin: 5px 0;
  }
`
