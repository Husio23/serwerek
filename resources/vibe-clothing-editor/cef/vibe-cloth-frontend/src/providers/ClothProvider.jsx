import {createContext, useContext, useEffect, useReducer} from "react";
import {wardrobeReducer} from "../reducers/wardrobeReducer.js";
import {emitAlt} from "../utils/altUtils.js";

const ClothContext = createContext();

const initialState = {
    mode: 'clothes',
    gender: 'female',
    pickedComponent: {},
    clothes: {},
    tattoos: []
}

export const ClothProvider = ({children}) => {
    const [state, dispatch] = useReducer(wardrobeReducer, initialState)

    useEffect(() => {
        emitAlt('cef:clothChange', state.clothes)
    }, [state.clothes])

    useEffect(() => {
        emitAlt('cef:tattooChange', state.tattoos)
    }, [state.tattoos])

    return (
        <ClothContext.Provider value={{state: state, dispatch: dispatch}}>
            {children}
        </ClothContext.Provider>
    )
}

export const useClothContext = () => useContext(ClothContext);