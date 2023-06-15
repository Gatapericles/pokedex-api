import React, { useContext, useEffect, useState } from "react"
import { PokeContext } from "../context/PokeContext"
import { useLocation } from "react-router-dom"
import  styled  from "styled-components"
import { CardPoke } from "../components/CardPokemon"
import { ThemeContext } from "../context/Theme-Context"


export const SearchPage = () => {
    const { theme } = useContext(ThemeContext)
    const location = useLocation()
    const { getPokemonsByName } = useContext(PokeContext)
    const [ filterPokemons, setFilterPokemons ] = useState([])

    useEffect(() => {
        const searchPokemon = async () => {
            const pokemons = await getPokemonsByName(location.state)
            setFilterPokemons(pokemons)
        }

        searchPokemon()

    },[ location.state, getPokemonsByName])

    return(
        <Container style={{ color: theme.Color, 
                      backgroundColor: theme.backgroundColor }}
        >
          <p>
            <span theme={theme}>Resultados:  {filterPokemons.length}</span>
          </p>

          <PokeCardList>
            {filterPokemons.map((pokemon) => (
                <CardPoke pokemon={pokemon} key={pokemon.id}/>
            ))}
          </PokeCardList>
            
        </Container>
    )
}

const Container = styled.div`
  height: 100vh;
  padding: 30px;
  & p {
    font-size: 18px;
    font-weight: 500;
    color: ${(props) => props.theme.backgroundColor}
  } 
`

const PokeCardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  jsutify-content: center;
  padding: 30px;
  gap: 30px;
`