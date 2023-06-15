import React, { useState, useEffect, useContext } from "react"
import styled from "styled-components"
import { ThemeContext } from "../context/Theme-Context"

export const PokeMoviesAndAbilities = ({moves, abilities}) => {
    const [abilitiesWithDescription, setAbilitiesWithDescription] = useState([])
    const { theme } = useContext(ThemeContext)

    useEffect(() => {
        const fetchAbilityDescription = async () => {
          const abilitiesWithDesc = [];
          for (const ability of abilities) {
            const response = await fetch(ability.ability.url);
            const data = await response.json();
            const englishDescription = data.effect_entries.find(
              (entry) => entry.language.name === "en"
            );
            const abilityWithDesc = {
              name: ability.ability.name,
              description: englishDescription.effect,
            };
            abilitiesWithDesc.push(abilityWithDesc);
          }
          setAbilitiesWithDescription(abilitiesWithDesc);
        };
    
        fetchAbilityDescription();
      }, [abilities]);

      return(
        <div style={{ color: theme.Color,
                      backgroundColor: theme.backgroundColor}}>
            <MovesAndAbilitiesContainer>
                <AbilitiesContainer>
                    <h2>Habilidades</h2>
                    <ul>
                     {abilitiesWithDescription.map((ability, index) =>(
                        <li key={index}>
                            <strong>{ability.name}:</strong> {ability.description}
                        </li>
                     ))}
                    </ul>
                </AbilitiesContainer>

                <MovesContainer>
                    <h2>Movimentos</h2>
                    <ul>
                        {moves.slice(0, 5).map((move, index) => (
                            <li key={index}>{move.move.name} </li>
                        ))}
                    </ul>
                </MovesContainer>
            </MovesAndAbilitiesContainer>
        </div>
      )
}

const MovesAndAbilitiesContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
  gap: 20px;
`

const AbilitiesContainer = styled.div`
  width: 100%;
  display:flex;
  flex-direction: column;
  & h2 {
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
  }
  & li {
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    text-transform: capitalize;
    line-height: 24px;
    gap: 7px;
    @media (max-width: 425px) {
      font-size: 10px;
    }
  }
`
const MovesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & h2 {
    margin-bottom: 10px;
  }

  & ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  & li {
    text-transform: capitalize;
    text-align: center;
    @media (max-width: 425px) {
      font-size: 13px;
    }
  }
`