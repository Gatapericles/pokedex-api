import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from 'styled-components';
import { images } from "../context/Types";
import { ThemeContext } from "../context/Theme-Context";

export const CardPoke = ({pokemon}) => {
    const {theme} = useContext(ThemeContext)

    const getFirtsElement = () => {
        if(pokemon.types && pokemon.types.length > 0 ){
            return pokemon.types[0].type.name;
        }
        return "";
    }

    const getBackgroundColor = () => {
        const firstElement = getFirtsElement()
        return firstElement ? firstElement : "unknown";
    }

    const getTypeImage = (type) => {
        switch(type) {
            case "bug":
              return <img src={images.bug}
                          alt="Bug"         />
            case "dark":
              return <img src={images.dark}
                          alt="Dark"        />
            case "dragon":
              return <img src={images.dragon}
                          alt="Dragon"      />
            case "electric":
              return <img src={images.electric}
                          alt="Electric"    />
            case "fighting":
              return <img src={images.fighting}
                          alt="Fighting"    />
            case "fire":
              return <img src={images.fire}
                          alt="Fire"        />
            case "fairy":
              return <img src={images.fairy}
                          alt="Fire"        />
            case "flying":
              return <img src={images.flying}
                          alt="Flying"      />
            case "ghost":
              return <img src={images.ghost}
                          alt="Ghost"       />
            case "grass":
              return <img src={images.grass}
                          alt="Grass"       />    
            case "ground":
              return <img src={images.ground}
                          alt="Ground"      />
            case "ice":
              return <img src={images.ice}
                          alt="Ice"         />
            case "normal":
              return <img src={images.normal}
                          alt="Normal"      />
            case "poison":
              return <img src={images.poison}
                          alt="Poison"      />
            case "psychic":
              return <img src={images.psychic}
                          alt="Psychic"         />
            case "rock":
              return <img src={images.rock}
                          alt="Rock"         />
            case "steel":
              return <img src={images.steel}
                          alt="Steel"      />
            case "water":
              return <img src={images.water}
                          alt="Water"      />
            default:
              return null;
        }
    }

    return(
        <Link to={`/pokemon/${pokemon.id}`}>
          {" "}
         <AnimateBorderDiv style={{ backgroundColor: theme.border }}> 
          <ContainerCard style={{ border: theme.border}}> 
            <Header style={{ color: theme.Color}}>
                <PokemonId key={pokemon.id}>#{pokemon.id}</PokemonId>
                <StatsBox>
                    {pokemon.stats
                      .filter((stat) => stat.stat.name === "hp")
                      .map((stat) => (
                        <PokeStats key={stat.stat.name}>
                          <span>HP</span>
                          {stat.base_stat}
                        </PokeStats>
                      ))}
                </StatsBox>
            </Header>
            <CardPokeImage className={getBackgroundColor()}>
              <img 
                src={pokemon.sprites.other.dream_world.front_default}
                alt={pokemon.name}
              />
            </CardPokeImage>
            <CardPokeInfo>
              <CardPokeName style={{ color: theme.Color }}>{pokemon.name}</CardPokeName>
                <ElementsBox>
                  {pokemon.types.map((type) => (
                    <PokeElements key={type.type.name} className={type.type.name}>
                      <ElementIcon>{getTypeImage(type.type.name)}</ElementIcon>
                      <ElementsName>{type.type.name}</ElementsName>
                    </PokeElements>
                  ))}
                </ElementsBox>
            </CardPokeInfo>
          </ContainerCard>
         </AnimateBorderDiv> 
        </Link>
    )
}

const AnimatedBorder = keyframes`
  0% {
    background: linear-gradient(90deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #2e2b5f, #8b00ff) ;
  }
  50% {
    background: linear-gradient(45deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #2e2b5f, #8b00ff) ;
  }
  100% {
    background: linear-gradient(22deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #2e2b5f, #8b00ff);
  }
`

const AnimateBorderDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #000;
  padding: 9px;
  border-radius: 12px;
  animation: ${AnimatedBorder} 1s linear alternate infinite;
`

const ContainerCard = styled.div`
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  // border: 10px solid ${(props) => props.theme.border};
  border-radius: 12px;

  padding: 0 20px 20px;

  @media (max-width> 375px) {
    width: 280px;
    height: 380px;
  }

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

const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px;
  color: ${(props) => props.theme.Color};
`

const PokemonId = styled.span`
  font-size: 14px;
  font-weight: bold;
`

const StatsBox = styled.div`
  display: flex; 
  align-items: center;
  justify-content: center;
`

const PokeStats = styled.span`
  font-style: normal;
  font-size: 14px;
  font-weight: bold;
  & span {
    font-weight: bold;
  }
`

const CardPokeImage = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  & img {
    width: 220px;
    height: 220px;
    margin-bottom: 10px;
    padding: 10px;
  }
`

const CardPokeInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
`

const CardPokeName = styled.div`
  font-size: 24px;
  text-transform: capitalize;
  font-weight: bold;
  margin-top: 10px;
  color: ${(props) => props.theme.Color}
`

const ElementsBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`
const ElementIcon = styled.span`
  & img {
    width: 25px;
    height: 25px;
  }
`

const PokeElements = styled.div`
  width: 95px;
  box-shadow: 1px 1px 1px #999;
  padding: 3px 5px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`

const ElementsName = styled.span`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  text-shadow: 1px 1px 1px #000;
`