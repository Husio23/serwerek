import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/index.css'
import {ChakraProvider, ColorModeScript} from "@chakra-ui/react";
import theme from "./theme/theme.js";
import {ClothProvider} from "./providers/ClothProvider.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <ChakraProvider theme={theme}>
            <ClothProvider>
                <App/>
            </ClothProvider>
        </ChakraProvider>
    </React.StrictMode>,
)
