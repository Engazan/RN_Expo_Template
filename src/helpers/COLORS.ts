const COLORS_LIGHT = {
    barStyle: 'dark-content',
    background: '#f3f4f6',
    background2: '#fafafa',
    primary: '#447ad4',

    text: {
        primary: '#151515',
        primaryDarker: '#4a4a4a',
        secondary: '#b5b5b5',
        interactive: '#3976dc',
    },

    buttons: {
        primary: {
            background: '#3775dc',
            text: '#fafafa',
        },
        primaryDashed: {
            border: '#3775dc',
            text: '#3775dc',
        },
        secondary: {
            background: '#e1e1e1',
            border: '#cbcbcb',
            text: '#151515',
        },
        secondaryInteractive: {
            background: '#e8e8e8',
            border: '#cbcbcb',
            text: '#3775dc',
        },
        important: {
            background: '#cb2f41',
            text: '#fafafa',
        },
    }
}

const COLORS_DARK = {
    barStyle: 'light-content',
    background: '#171717',
    background2: '#1b1b1b',
    primary: '#447ad4',

    text: {
        primary: '#f5f5f5',
        primaryDarker: '#f9f9f9',
        secondary: '#888888',
        interactive: '#447cd8',
    },

    buttons: {
        primary: {
            background: '#447ad4',
            text: '#fafafa',
        },
        primaryDashed: {
            border: '#3775dc',
            text: '#3775dc',
        },
        secondary: {
            background: '#282828',
            border: '#343434',
            text: '#fafafa',
        },
        secondaryInteractive: {
            background: '#282828',
            border: '#343434',
            text: '#3775dc',
        },
        important: {
            background: '#cb2f41',
            text: '#fafafa',
        }
    }
}

const COLORS = {
    light: COLORS_LIGHT,
    dark: COLORS_DARK,
}

export default COLORS;
