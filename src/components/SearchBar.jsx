import React, { useContext, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom"
import { PokeContext } from "../context/PokeContext";
import  styled  from "styled-components"
import { ThemeContext } from "../context/Theme-Context";
import ThemeButton from "./ThemeButton";

export const SearchBar = () => {

    const { onInputChange, valueSearch, onResetForm } = useContext(PokeContext)

    const LogoImg = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"

    const onSearchSubmit = (e) => {
        e.preventDefault()
        navigate("/search", {
            state: valueSearch,
        })
        onResetForm()
    }

    const  {theme}  = useContext(ThemeContext)
    const navigate = useNavigate()

    return(
   <>
    <Container style={{ color: theme.Color, backgroundColor: theme.backgroundColor}}>
      <DivLogo style={{ display: "flex", alignItems: "center", gap: "30px" }}>
        <Link to="/">
            <img src={LogoImg} alt="Pokemon-logo-api" />
        </Link>
      </DivLogo>
        <div style={{ display: "flex", gap: "30px" }}>
           <Form onSubmit={onSearchSubmit}>
            <DivButton>
              <ThemeButton/>
            </DivButton>
               <FormGroup>
                    <IconSearch
                       theme={theme}
                       xmlns="http://www.w3.org/2000/svg"
                       fill="none"
                       viewBox="0 0 24 24"
                       strokeWidth="1.5"
                       stroke="currentColor"
                    >
                     <path
                       strokeLinecap="round"
                       strokeLinejoin="round"
                       d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                     
                     />
                    </IconSearch>


                    <InputSearch
                       theme={theme}
                       type="search"
                       name="valueSearch"
                       id=""
                       value={valueSearch}
                       onChange={onInputChange}
                       placeholder="Pesquise por um Pokémon"
                       style={{ backgroundColor: theme.backgroundColor }}
                    ></InputSearch>
                    
               </FormGroup>           
                <SearchButton 
                theme={theme} 
                style={{color: theme.backgroundColor}}
                >Pesquisar</SearchButton>
           </Form>

        </div>
    </Container>
    
    <Outlet/>
  </>
    )
}


const Container = styled.header`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 425px) {
        justify-content: center;
    }
`
const DivLogo = styled.div`
    @media (max-width: 768px) {
        margin-bottom: 15px;
    }
`

const Form = styled.form`
    display: flex;
    align-content: center;
    justify-content: center;
    gap: 15px;
    margin-right: 30px;
    @media (max-width: 768px) {
        margin-left: 100px;
    }
    @media(max-width: 425px) {
        flex-direction: column;
        margin-left: 30px;
    }
`
const DivButton = styled.div`
    @media (max-width: 425px) {
        display: flex;
        justify-content: center;
        margin-left: 45px;
    }
`


const FormGroup = styled.div`
    display: flex; 
    align-content: center;
    justify-content: center;
    gap: 10px;
    padding: 5px 20px;
    border-radius: 15px;
    border: 2px solid ${(props) => props.theme.Color}
`

const SearchButton = styled.button`
    border: none; 
    outline: none;
    border-radius: 15px;
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
    font-weight: bold;
    padding: 5px 20px;
    color: ${(props)  => props.theme.backgroundColor};
    cursor: pointer;    
    background-color: ${(props)  => props.theme.Color};
`


const InputSearch = styled.input`
    font-family: 'Poppins', sans-serif;
    width: 218px;
    border: none;
    outline: none;
    font-size: 15px;
    color: ${(props) => props.theme.Color};
`

const IconSearch = styled.svg`
    width: 20px;
    stroke: ${(props)  => props.theme.Color};
`

