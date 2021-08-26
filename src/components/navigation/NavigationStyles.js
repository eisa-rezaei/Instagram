import styled from "styled-components"

export const NavContainer = styled.div`
  width: 100%;
  height: 60px;
  font-size: 1.5rem;
  text-align: center;
  border-top: 1px solid #d0d0d0;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  bottom: 0;
  & svg:hover {
    color: orange;
  }
`
