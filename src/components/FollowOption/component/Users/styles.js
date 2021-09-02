import styled from "styled-components"

export const StyledFollowPageContentListItem = styled.li`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  & img {
    width: 65px;
    height: 65px;
    border-radius: 50%;
    margin-right: 20px;
    object-fit: contain;
    background-color: lightcoral;
    transition: all 0.15s linear;
    :hover {
      border: 2px solid orange;
    }
  }
  @media (max-width: 600px) {
    & img {
      width: 55px;
      height: 55px;
    }
  }
`
export const StyledFollowPageListItemInfo = styled.div`
  min-width: 75%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  & span {
    width: 100%;
    padding-right: 10px;
    display: flex;
    flex-direction: column;
    & a {
      font-weight: bold;
      :hover {
        text-shadow: 0px 0px 2px orange;
      }
    }
  }
`
export const StyledFollowPageListItemInfoButton = styled.button`
  width: 170px;
  height: 40px;
  ${props =>
    props.isFollowing
      ? `color:#2f93f5;background-color: #fff;border:1px solid #2f93f5;`
      : `color: #fff; background-color: #2f93f5 ;`}
  border-radius: 10px;
  transition: all 0.15s linear;
  :hover {
    background-color: #6fc3ff;
    color: #fff;
    border: none;
  }
`
