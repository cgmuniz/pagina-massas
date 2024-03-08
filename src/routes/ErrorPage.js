import { Center } from "@chakra-ui/react";
import React from "react";
import '../styles/errorpage.css'
import Logo from '../img/Unifesp_logo2.png'

function ErrorPage(){
    return(
        <Center className="CenterError">
            <img
                alt="Logo UNIFESP"
                src={Logo}
                height="100"
            />
            <h3>Página não encontrada</h3>
        </Center>
    )
}

export default ErrorPage