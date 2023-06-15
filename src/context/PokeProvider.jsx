import { useEffect, useState } from "react";
import { PokeContext } from "./PokeContext";
import { useForm } from "../hooks/form";

export const PokeProvider = ({children}) => {
    const [offset, setOffset] = useState(0)
    const [allPokemons, setAllPokemons] = useState([])

    const [loading, setLoading] = useState(true)
    const [active, setActive] = useState(true)

    const { valueSearch, onInputChange, onResetForm } = useForm({
        valueSearch: ""
    })
 
    const getAllPokemons = async (limit = 10) => {
        const baseUrl = "https://pokeapi.co/api/v2/"
        const res = await fetch(
            `${baseUrl}pokemon?limit=${limit}&offset=${offset}`
        );
        const data = await res.json()

        const promises = data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url)
            const data = await res.json()
            return data
        });

        const results = await Promise.all(promises)
        setAllPokemons([...allPokemons, ...results])
        setLoading(false)
        };

        const getPokemonByID = async (id) => {
            const baseUrl = "https://pokeapi.co/api/v2/"
            const res = await fetch(`${baseUrl}pokemon/${id}`)
            const data = await res.json()
            return data
        };

        const getPokemonsByName = async (name) => {
            const baseUrl = "https://pokeapi.co/api/v2/"
            const res = await fetch(`${baseUrl}pokemon/${name}`)
            const data = await res.json()
            return[data]
        }

        const getPokemonsByType = async (type) => {
            const baseUrl = "https://pokeapi.co/api/v2/"
            const res = await fetch(`${baseUrl}pokemon/${type}`)
            const data = await res.json()
            const filterResults = data.pokemon.map((pokemon) => pokemon.pokemon)
            setFilterPokemons(filterResults)
        }

        useEffect(() => {
            getAllPokemons()
        }, [offset])

        const handleClickLoadMore = () => {
            setOffset(offset + 10)
        }

        const [ElementSelected, setElementSelected] = useState({
            bug: false,
            dark: false,
            dragon: false,
            electric: false,
            fairy: false,
            fighting: false,
            fire: false,
            flying: false,
            ghost: false,
            grass: false,
            ground: false,
            ice: false,
            normal: false,
            poison: false,
            psy: false,
            rock: false,
            steel: false,
            water: false,
            unknow: false,
          });

          const [filterPokemons, setFilterPokemons] = useState([])

        const handleSelectCheckBox = (e) => {
            const { name } = e.target;
            const label = document.querySelector(`label[for="${name}"]`);
            label.classList.toggle("selected");
        
            setElementSelected({
              ...ElementSelected,
              [e.target.name]: e.target.checked,
            });
            if (e.target.checked) {
              const filterResults = allPokemons.filter((pokemon) =>
                pokemon.types.map((type) => type.type.name).includes(e.target.name)
              );
              setFilterPokemons([...filterPokemons, ...filterResults]);
            } else {
              const filterResults = filterPokemons.filter(
                (pokemon) =>
                  !pokemon.types.map((type) => type.type.name).includes(e.target.name)
              );
              setFilterPokemons([...filterResults]);
            }
          };

          return(
            <PokeContext.Provider
                value={{
                    allPokemons,
                    getPokemonsByName,
                    getPokemonByID,
                    getPokemonsByType,
                    handleClickLoadMore,
                    handleSelectCheckBox,
                    loading,
                    setLoading,
                    active, 
                    setActive,
                    filterPokemons,
                    valueSearch,
                    onInputChange,
                    onResetForm,
                }}

            >
                {children}
            </PokeContext.Provider>
          )
};