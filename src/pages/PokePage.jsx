import React, { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { PokeContext } from "../context/PokeContext"
import { PokeMoviesAndAbilities } from "../components/PokeMoviesAndAbilities"
import styled from "styled-components"
import { images } from "../context/Types"
import { ThemeContext } from "../context/Theme-Context"
import { Loader } from "../components/Loader"
import {
    BsFillArrowDownCircleFill,
    BsFillArrowUpCircleFill,
  } from "react-icons/bs";

export const PokemonPage = () => {
    const {theme} = useContext(ThemeContext)
    const { getPokemonByID } = useContext(PokeContext)
    const { id } = useParams()

    const [loading, setLoading] = useState(true)
    const [pokemon, setPokemon] = useState({})
    const [showMovesAbilities, setShowMovesAbilities] = useState(false)

    const getTypeImage = (type) => {
        const typeImages = {
          bug: images.bug,
          dark: images.dark,
          dragon: images.dragon,
          electric: images.electric,
          fairy: images.fairy,
          fighting: images.fighting,
          fire: images.fire,
          flying: images.flying,
          ghost: images.ghost,
          grass: images.grass,
          ground: images.ground,
          ice: images.ice,
          normal: images.normal,
          poison: images.poison,
          psychic: images.psychic,
          rock: images.rock,
          steel: images.steel,
          water: images.water,
        }

        return <img src={typeImages[type]} alt={type}/>
    }

    useEffect(() => {
        const fetchPokemon = async () => {
          const data = await getPokemonByID(id);
          setPokemon(data);
          setLoading(false);
        };
    
        fetchPokemon();
      }, [id]);

        return(
            <div style={{ color: theme.Color,
                          backgroundColor: theme.backgroundColor }}
            >
                <Main>
                    <Container>
                        {loading ? (
                            <Loader/>
                        ) : (
                            <>
                               <ContainerHeader>
                                  <ContainerPokeImage>
                                      <img 
                                      src={pokemon.sprites.other.dream_world.front_default}
                                      alt={pokemon.name}/>

                                      <ContainerPokeInfo>
                                        <div 
                                        style={{display: "flex",
                                                alignItems: "center",
                                                gap: "25px",
                                               }}
                                        >
                                            <PokeID>#{pokemon.id}</PokeID>
                                            <PokeName>{pokemon.name}</PokeName>
                                        </div>
                                        <div className="card-type info-pokemon-type">
                                          <ElementsDecoration>
                                             {pokemon.types.map((type) =>(
                                                <Elements
                                                 key={type.type.name}
                                                 className={type.type.name}
                                                >
                                                 <ElementsIcon>{getTypeImage(type.type.name)}</ElementsIcon>
                                                 <ElementsName>{type.type.name}</ElementsName>
                                                </Elements>
                                             ))}
                                          </ElementsDecoration>   
                                        </div>
                                      </ContainerPokeInfo>
                                  </ContainerPokeImage>
                               </ContainerHeader>

                               <StatsPower>
                                 <h2>Estatísticas</h2>
                                 <Stats>
                                    {pokemon.stats.map((stat,index) => (
                                        <AllStats key={index}>
                                            <span>{stat.stat.name}</span>
                                            <StatsBar 
                                             theme={theme}
                                             style={{ width: `${stat.base_stat}%`}}></StatsBar>
                                             <p>{String(stat.base_stat).padStart(3, "0")}</p>
                                        </AllStats>
                                    ))}
                                 </Stats>
                               </StatsPower>
                            </>
                        )}
                    </Container>
                    <ButtonMovesAndAbilities>
                        <Button 
                          theme={theme}
                          style={{color: theme.backgroundColor}}
                          onClick={() => setShowMovesAbilities(!showMovesAbilities)}
                        >
                          Habilidades e Movimentos
                          {showMovesAbilities ? (
                            <BsFillArrowUpCircleFill/>
                          ) : (
                            <BsFillArrowDownCircleFill/>
                          )}
                        </Button>

                        {showMovesAbilities && (
                            <PokeMoviesAndAbilities
                                moves={pokemon.moves}
                                abilities={pokemon.abilities}
                            />
                        )}
                    </ButtonMovesAndAbilities>
                </Main>

            </div>
        )
}

const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  padding: 30px;
`
const Container = styled.section`
  height: 100%;
  position: relative;
  width: 100%;
  padding: 30px 50px;
  gap: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 425px) {
    gap: 0;
    flex-wrap: wrap;
    padding: 20px;
  }
`

const ContainerHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40%;
  @media (max-width: 425px) {
    width: 100%;
  }
`

const ContainerPokeImage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & img {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const ContainerPokeInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
`

const PokeID = styled.span`
  font-size: 30px;
  font-weight: 700;
`

const PokeName = styled.h1`
  font-size: 34px;
  text-transform: capitalize;
`

const ElementsDecoration = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  & .normal {
    background: radial-gradient(
      circle,
      rgba(200, 204, 208, 1) 0%,
      rgba(187, 188, 190, 1) 35%,
      rgba(145, 148, 150, 1) 100%
    );
  }

  & .grass {
    background: radial-gradient(
      circle,
      rgba(176, 217, 178, 1) 0%,
      rgba(137, 196, 131, 1) 35%,
      rgba(64, 149, 70, 1) 100%
    );
  }

  & .fire {
    background: radial-gradient(
      circle,
      rgba(251, 188, 109, 1) 0%,
      rgba(255, 156, 84, 1) 35%,
      rgba(249, 140, 3, 1) 100%
    );
  }

  & .water {
    background: radial-gradient(
      circle,
      rgba(114, 162, 215, 1) 0%,
      rgba(80, 144, 214, 1) 35%,
      rgba(13, 123, 242, 1) 100%
    );
  }

  & .electric {
    background: radial-gradient(
      circle,
      rgba(241, 225, 154, 1) 0%,
      rgba(236, 212, 106, 1) 35%,
      rgba(242, 205, 40, 1) 100%
    );
  }

  & .ground {
    background: radial-gradient(
      circle,
      rgba(217, 167, 141, 1) 0%,
      rgba(217, 144, 106, 1) 35%,
      rgba(217, 120, 69, 1) 100%
    );
  }

  & .bug {
    background: radial-gradient(
      circle,
      rgba(203, 233, 141, 1) 0%,
      rgba(176, 217, 94, 1) 35%,
      rgba(145, 193, 47, 1) 100%
    );
  }

  & .flying {
    background: radial-gradient(
      circle,
      rgba(202, 216, 247, 1) 0%,
      rgba(170, 187, 226, 1) 35%,
      rgba(146, 170, 222, 1) 100%
    );
  }

  & .fighting {
    background: radial-gradient(
      circle,
      rgba(231, 128, 158, 1) 0%,
      rgba(219, 100, 136, 1) 35%,
      rgba(206, 65, 107, 1) 100%
    );
  }

  & .poison {
    background: radial-gradient(
      circle,
      rgba(170, 107, 200, 1) 0%,
      rgba(163, 80, 203, 1) 35%,
      rgba(150, 46, 200, 1) 100%
    );
  }

  & .ice {
    background: radial-gradient(
      circle,
      rgba(141, 226, 212, 1) 0%,
      rgba(115, 206, 192, 1) 35%,
      rgba(70, 187, 169, 1) 100%
    );
  }

  & .dark {
    background: radial-gradient(
      circle,
      rgba(52, 62, 58, 1) 0%,
      rgba(33, 37, 36, 1) 35%,
      rgba(9, 9, 9, 1) 100%
    );
  }

  & .steel {
    background: radial-gradient(
      circle,
      rgba(149, 175, 162, 1) 0%,
      rgba(122, 163, 142, 1) 35%,
      rgba(94, 126, 110, 1) 100%
    );
  }

  & .rock {
    background: radial-gradient(
      circle,
      rgba(201, 191, 158, 1) 0%,
      rgba(197, 183, 140, 1) 35%,
      rgba(164, 153, 118, 1) 100%
    );
  }

  & .psychic {
    background: radial-gradient(
      circle,
      rgba(250, 173, 178, 1) 0%,
      rgba(250, 147, 153, 1) 35%,
      rgba(250, 113, 121, 1) 100%
    );
  }

  & .ghost {
    background: radial-gradient(
      circle,
      rgba(82, 105, 173, 1) 0%,
      rgba(66, 83, 136, 1) 35%,
      rgba(41, 53, 87, 1) 100%
    );
  }

  & .shadow {
    background: radial-gradient(
      circle,
      rgba(75, 74, 74, 1) 0%,
      rgba(42, 42, 42, 1) 35%,
      rgba(19, 19, 19, 1) 100%
    );
  }

  & .fairy {
    background: radial-gradient(
      circle,
      rgba(198, 109, 198, 1) 0%,
      rgba(172, 82, 172, 1) 35%,
      rgba(149, 47, 149, 1) 100%
    );
  }

  & .dragon {
    background: radial-gradient(
      circle,
      rgba(58, 149, 134, 1) 0%,
      rgba(37, 107, 113, 1) 35%,
      rgba(37, 47, 113, 1) 100%
    );
  }

  & .unknown {
    background-color: var(--unknown);
  }
`

const Elements = styled.div`
  width: 95px;
  box-shadow: 1px 1px 1px #000;
  padding: 3px 5px; 
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`
const ElementsIcon = styled.span`
  & img {
    width: 25px;
    height: 25px;
  }
`
const ElementsName = styled.span`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  text-shadow: 1px 1px 1px #000;
`

const StatsPower = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  gap: 50px;
  margin-top: 15px;
  & h2 {
    font-size: 28px;
  }
  & p {
    text-align: right;
  }
`
const Stats = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`
const AllStats = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 15px;
  & span {
    flex: 20%;
    font-weight: 500;
    font-size: 16px;
    text-transform: capitalize; 
  }
`
const StatsBar = styled.div`
  width: 100%;
  height: 15px;
  background-color: ${(props) => props.theme.Color};
`

const ButtonMovesAndAbilities = styled.div`
  width: 100vw;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 90px;
  @media (max-width: 425px) {
    margin-top: 230px;
    font-size: 10px;
  }
  color: ${(props) => props.theme.backgroundColor};
  background-color: ${(props) => props.theme.backgroundColor};
`
const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 5px 15px;
  border-radius: 7px;
  font-size: 30px;
  font-weight: 700;
  cursor: pointer;
  @media (max-width: 425px) {
    font-size: 20px;
  }
  background-color: ${(props) => props.theme.Color}
`
