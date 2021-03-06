import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: #ece6f3;
    user-select: none;
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

::-webkit-scrollbar {
  width: 10px;
  z-index: 1;
}

::-webkit-scrollbar-track {
  background: inherit; 
  border-radius: 20px;
  z-index: 1;
  :hover {
  background: #f1f1f1; 
  border-radius: 20px;
  }
}
::-webkit-scrollbar-thumb {
  background: #888; 
  border-radius: 20px;
  z-index: 1;
  :hover{
  background: #555; 
  }
}

  @media (max-width: 600px) {
    ::-webkit-scrollbar {
     width: 0;
    }
    p {
      font-size: 0.8rem;
    }
  }

`
export const LayoutCt = styled.section`
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
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);

  @media (max-width: 600px) {
    width: 100%;
    height: 100vh;
    margin: 0;

    border-radius: 0px;
  }

  @media (min-height: 1000px) {
    width: 600px;
  }
`
