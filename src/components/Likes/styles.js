import styled from "styled-components"

export const StyledLikePageCt = styled.main`
  width: 100%;
  height: 100%;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 60px;
`
export const StyledLikePageHeader = styled.header`
  width: 100%;
  min-height: 70px;
  font-size: 1.3rem;
  font-weight: 700;
  border-bottom: 1px solid #d0d0d0;
  display: flex;
  align-items: center;
  padding: 0 16px;
`
export const StyledLikePageContent = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 16px;
  & h3 {
    font-size: 1.1rem;
    font-weight: 600;
    margin: 5px 0;
  }
`
export const StyledLikePageContentHead = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #d0d0d0;
  & span {
    width: 70px;
    height: 70px;
    margin: 15px;
    font-size: 2rem;
    border-radius: 50%;
    color: #808080;
    border: 1px solid #808080;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 600px) {
    & span {
      width: 100px;
      height: 70px;
      margin: 10px;
    }
  }
`
export const StyledLikePageContentHeadInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 30px;
  font-size: 0.8rem;
`

export const StyledLikePageContentListItem = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  & img {
    min-width: 65px;
    height: 65px;
    border-radius: 50%;
    margin-right: 20px;
    object-fit: contain;
    background-color: lightcoral;
  }
`
export const StyledLikePageListItemInfo = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  & p {
    width: 100%;
    padding-right: 10px;
    & span {
      font-weight: bold;
    }
  }
`
export const StyledLikePageListItemInfoButton = styled.button`
  width: 120px;
  height: 40px;
  color: #fff;
  background-color: #2f93f5;
  border-radius: 10px;
  :hover {
    background-color: #4fb3ff;
  }
`
