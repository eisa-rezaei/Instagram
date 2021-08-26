import styled from "styled-components"

export const StyledAddPostCt = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: baseline;
`

export const StyledHeader = styled.header`
  width: 100%;
  height: 60px;
  padding: 0 20px;
  margin-top: 20px;
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
    }
  }
  & span {
    & p {
      font-size: 1.2rem;
    }
    width: 150px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`
