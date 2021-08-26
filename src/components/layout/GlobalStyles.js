import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
body {
    background-color: #ece6f3;
}
*{
    border: 0;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
a {
    color: inherit;
    text-decoration: none;
    margin-bottom: 0;

}
li {
    list-style: none;
    margin-bottom: 0;

}
p {
    font-size: 1rem;
    margin-bottom: 0;
}
button{
    background-color: inherit;
    cursor: pointer;
}
`
export const LayoutCt = styled.main`
  width: 420px;
  height: 95vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2.5vh auto;
  border-radius: 40px;
  overflow: hidden;
  background-color: #fff;
  position: relative;
`
