import styled from "styled-components";
import { Link } from "react-router-dom";
import ThemeButton from "./ThemeButton";
import { ThemeContext } from "../context/Theme-Context";
import { useContext } from "react";

const NavBar = () => {
      const LogoImg = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"

      const { theme } = useContext(ThemeContext)

    return(
        <Header style={{ background: theme.backgroundColor}}>

            <DivLogo>  
               <Link to="/"> 
                {/* <Logo
                    alt="poke-api-logo"
                    src={LogoImg}
                 /> */}
               </Link> 
            </DivLogo>
            
             <DivButtonTheme>
                {/* <ThemeButton/>  */} 
            </DivButtonTheme>


        </Header>
    )
}

export default NavBar

const DivLogo = styled.div`
    height: 10px;
`

const Logo = styled.img`
    width: 250px;
`

const DivButtonTheme = styled.div`
    
 
`

const Header = styled.header`
    width: 100%;
    height: 120px;
    padding-bottom: 
`