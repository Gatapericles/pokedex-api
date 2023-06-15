import React, { createContext, useState, useEffect } from "react"

export const themes = {

    light: {
        Color: "rgb(31, 127, 161)",
        backgroundColor: "#fff",
        border: "rgb(189, 226, 247), rgb(141, 210, 248), rgb(96, 153, 184), rgb(31, 127, 161), rgb(17, 102, 133), rgb(52, 81, 92), rgb(62, 74, 78), rgb(189, 226, 247), rgb(141, 210, 248), rgb(96, 153, 184), rgb(31, 127, 161), rgb(17, 102, 133)",
        PokemonName: "rgb(31, 127, 161)",
        shadowCard: "0px 0px 5px rgb(31, 127, 161)"
    },

    dark: {
        Color: "#fac705",
        backgroundColor: "#000",
        border: "#ffc736, #ffc746, #f3bb3a, #e7b02e, #daa520, #cd9a0e, #c18f00, #b58500, #ffc736, #ffc746, #f3bb3a, #e7b02e, #daa520, #cd9a0e, #c18f00, #b58500",
        PokemonName: "#fac705",
        shadowCard: "0px 0px 5px #fac705"

    }
}

export const ThemeContext = createContext({});

export const ThemeProvider = (props) => {

    const [ theme, setTheme ] = useState(themes.light)

    useEffect(() => {
        const saveTheme = localStorage.getItem("theme")
        if (saveTheme) {
            setTheme(JSON.parse(saveTheme))
        }
    }, [])

    const handleSetTheme = (newTheme) => {
        setTheme(newTheme)
        localStorage.setItem("theme", JSON.stringify(newTheme))
    }
    
    return (
        <ThemeContext.Provider value={{ theme, setTheme: handleSetTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}