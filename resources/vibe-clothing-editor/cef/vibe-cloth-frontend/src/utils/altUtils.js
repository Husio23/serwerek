export const emitAlt = (name, payload) => {
    if ('alt' in window) {
        alt.emit(name, payload)
    }
}