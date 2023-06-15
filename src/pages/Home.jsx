import React, { useContext, useRef } from "react"
import { PokeList } from "../components/PokeList"
import { PokeContext } from "../context/PokeContext"
import { ElementsBar } from "../components/Elements"
import styled from "styled-components"
import { ThemeContext } from "../context/Theme-Context"

export const Home = () => {
    const {theme} = useContext(ThemeContext)
    const { handleClickLoadMore } = useContext(PokeContext)
    const topRef = useRef(null)

    return(
       <div style={{ color: theme.Color,
                     backgroundColor: theme.backgroundColor
                   }}
       >  
        {/* <ContainerElements ref={topRef}>
            <ElementsIcon>
                <span>Todos os Elementos</span>
            </ElementsIcon>
        </ContainerElements> */}

        <PokeList />
        {/* <ElementsBar/> */}
         <MorePokemons theme={theme}>
            <Button theme={theme} onClick={handleClickLoadMore}>
                Ver mais Pokémons 
            </Button>
         </MorePokemons>
       </div>

    )
}

const ContainerElements = styled.div`
    height: 150px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 50px;
    @media(max-width: 425px) {
        padding: 20px
    }
`

const ElementsIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
    cursor: pointer;
    & span {
        color: ${(props) => props.theme.backgroundColor};
        font-weight: bold;
        font-size: 18px;
    }
`

const MorePokemons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px
`
const Button = styled.div`
    border: 2px solid;
    border-radius: 10px;
    background-color: ${(props) => props.theme.Color};
    color: ${(props) => props.theme.backgroundColor};
    font-weight: bold;
    font-size: 16px;
    padding: 10px 20px;
    margin-bottom: 20px;
    cursor: pointer;
`
