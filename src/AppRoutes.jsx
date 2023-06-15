import React from "react"
import { Navigate, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home"
import { SearchBar } from "./components/SearchBar"
import { SearchPage } from "./pages/SearchPage";
import { PokemonPage } from "./pages/PokePage";


const AppRouter = () => {
    return(
        <Routes>
          <Route path="/" element={<SearchBar/>}>
            <Route index element={<Home/>}/>
            <Route path="/pokemon/:id" element={<PokemonPage/>}/>
            <Route path="search" element={<SearchPage/>}/>
          </Route>
            <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
    )
}

export { AppRouter }