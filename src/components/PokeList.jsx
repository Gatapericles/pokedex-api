import React, { useContext } from "react";
import { PokeContext } from "../context/PokeContext";
import styled from "styled-components";
import { CardPoke } from "./CardPokemon";
import { Loader } from "./Loader"
import { ThemeContext } from "../context/Theme-Context";

export const PokeList = () => {
    const {allPokemons, loading, filterPokemons } = useContext(PokeContext)

    const { theme } = useContext(ThemeContext)

    return(
        <>
          {loading ? (
            <Loader/>
          ) : (
            <CardPokeList style={{ color: theme.Color, 
                          backgroundColor: theme.backgroundColor }}
            >
              {filterPokemons.lenght ? (
                <>
                  {filterPokemons.map((pokemon) => (
                    <CardPoke pokemon={pokemon} key={pokemon.id}/>
                  ))}
                </>
              ) : (
                <>
                  {allPokemons.map((pokemon) => (
                    <CardPoke pokemon={pokemon} key={pokemon.id}/>
                  ))}
                </>
              )}

            </CardPokeList>
          )}
        </>
    )
}

const CardPokeList = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 30px;
    gap: 30px;
`