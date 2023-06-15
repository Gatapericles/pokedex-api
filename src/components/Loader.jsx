import React, { useContext } from "react";
import { ThreeBody } from "@uiball/loaders";
import styled from "styled-components";
import { ThemeContext } from "../context/Theme-Context";

export const Loader = () => {
    const { theme } = useContext(ThemeContext);
    return(
        <div style={{ color: theme.Color, backgroundColor: theme.backgroundColor }}>
            <ContainerLoader>
               <ThreeBody theme={theme} 
                          size={35} 
                          speed={1.1} 
                          color={theme.Color}
                />
            </ContainerLoader>
        </div>
    )
}

const ContainerLoader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 200px 0px;
`