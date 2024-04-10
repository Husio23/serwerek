import {extendTheme} from "@chakra-ui/react";

const sizes = {
    sizes: {
        max: 'max-content',
        min: 'min-content',
        full: '100%',
        '3xs': '14rem',
        '2xs': '16rem',
        xs: '20rem',
        sm: '24rem',
        md: '28rem',
        lg: '32rem',
        xl: '36rem',
        '2xl': '42rem',
        '3xl': '48rem',
        '4xl': '56rem',
        '5xl': '64rem',
        '6xl': '72rem',
        '7xl': '80rem',
        '8xl': '90rem',
        container: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
        },
    },
}

const spacing = {
    space: {
        px: '1px',
        0: '0',
        0.5: '2px',
        1: '4px',
        1.5: '6px',
        2: '8px',
        2.5: '10px',
        3: '12px',
        3.5: '14px',
        4: '16px',
        5: '20px',
        6: '24px',
        7: '28px',
        8: '32px',
        9: '36px',
        10: '40px',
        12: '48px',
        14: '56px',
        16: '64px',
        20: '80px',
        24: '96px',
        28: '112px',
        32: '128px',
        36: '144px',
        40: '160px',
        44: '176px',
        48: '192px',
        56: '224px',
        60: '240px',
        64: '256px',
        72: '288px',
        80: '320px',
        96: '384px',
    },
};


const config = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
}

const theme = extendTheme({sizes, space: { ...spacing },  config, fonts: {
        body: `'Inter', sans-serif`,
        mono: `'Inter', sans-serif`,
    }, styles: {
        global: {
            'html, body, #root': {
                margin: 0,
                padding: 0,
                width: '100%',
                height: '100%',
                background: 'transparent'
            }
        }
    }})

export default theme;