import React from "react"
import { createGlobalStyle } from "styled-components";
import { PokeProvider } from "./context/PokeProvider";
import { ThemeProvider } from "./context/Theme-Context"
import { AppRouter } from "./AppRoutes";

function App() {
  return (
    <>
    <ThemeProvider>
      <PokeProvider>
       <GlobalStyle/>
       <AppRouter/>
      </PokeProvider>
    </ThemeProvider>
    </>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`

  html {
    font-family: 'Poppins', sans-serif;
    overflow-x: hidden;
  }

  body { 
    width: 100vw;
    height: 100vh;
    margin: 0 auto;
  }

  *{
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  ul {
    list-style: none;
  }

  ::-webkit-scrollbar  {
    width: 5px;
    background-color: rgb(189, 226, 247);

  }
`  
