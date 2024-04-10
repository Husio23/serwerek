export const wardrobeReducer = (state, action) => {
    switch (action.type) {
        case 'gender': {
            return {...state, gender: action.payload}
        }

        case 'componentPick': {
            return {...state, pickedComponent: action.payload}
        }

        case 'mode': {
            return {...state, mode: action.payload}
        }

        case 'dlc': {
            return { ...state, clothes: { ...state.clothes, [action.payload.key]: { ...state.clothes[action.payload.key], dlc: action.payload.dlc } } }
        }

        case 'drawable': {
            return {...state, clothes: { ...state.clothes, [action.payload.key]: { ...state.clothes[action.payload.key], drawableId: action.payload.value, isProp: action.payload.isProp } }}
        }

        case 'texture': {
            return {...state, clothes: {...state.clothes, [action.payload.key]: { ...state.clothes[action.payload.key], textureId: action.payload.value, isProp: action.payload.isProp }} }
        }

        case 'addTattoo': {
            return {...state, tattoos: [...state.tattoos, action.payload]}
        }

        case 'removeTattoo': {
            return { ...state, tattoos: state.tattoos.filter(x => x.hash !== action.payload)  }
        }

        default: return state;
    }
}