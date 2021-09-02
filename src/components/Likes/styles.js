import styled from "styled-components"

export const StyledLikePageCt = styled.main`
  width: 100%;
  height: 100%;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
  padding-bottom: 60px;
`
export const StyledLikePageHeader = styled.header`
  width: 100%;
  min-height: 50px;
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
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid #d0d0d0;
  & span {
    width: 70px;
    height: 70px;
    margin: 16px;
    font-size: 2rem;
    border-radius: 50%;
    color: #808080;
    border: 1px solid #808080;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
export const StyledLikePageContentHeadInfo = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 30px;
  font-size: 0.8rem;
`
