import styled from 'styled-components';

const theme = {
    colors: {
        // Primary colors
        dark_blue: '#060836',
        primary_blue: '#1c24f2',
        mid_blue: '#4e55f5',
        light_blue: '#abb1f4',

        // Secondary colors
        color_black: '#000000',
        color_dark_space: '#202135',
        color_gray: '#b9b9b9',
        color_snow: '#f4f4f4',
        color_white: '#ffffff',

        // Alert colors
        color_success: '#15ff93',
        color_warning: '#f1c40f',
        color_failure: '#f04f8d',
    },
    shadows: {
        btnActiveBoxShadow: `-4px -4px 8px #f4f4f4, 4px 4px 8px #b9b9b9`,
        btnDesactiveBoxShadow: `inset -4px -4px 8px #f4f4f4, inset 4px 4px 8px #b9b9b9`,
    },
    fonts: ['Fugaz One', 'Roboto'],
    fontSizes: {
        // Typos
        h1: '5rem',
        h2: '3rem',
        h3: '2rem',
        span: '1.8rem',
        placeholder: '1.6rem',
        p: '1.4rem',
        small: '1rem',

        // Typo Bolds
        bolder: 700,
        medium: 500,
        normal: 400,
        light: 300,
    },
    spacing: {
        // Units
        space: '1rem',

        space_half: '5px',
        space_x2: '20px',
        space_x3: '30px',
        space_x4: '40px',

        // Width
        max_width_grid: '120rem',

        // Border radius
        btnBorderRadius: '50%',
    },
    breakpoints: {
        breakpointXsmall: 'only screen and (min-width: 48rem)',
        breakpointSmall: 'only screen and (min-width: 60rem)',
        breakpointMedium: 'only screen and (min-width: 96rem)',
        breakpointLarge: 'only screen and (min-width: 128rem)',
        breakpointXlarge: 'only screen and (min-width: 192rem)',
        xsmall: 480,
        small: 600,
        medium: 960,
        large: 1280,
        xlarge: 1920,
    },
};

const ThemeProvider = styled.ThemeProvider;

const Theme = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default Theme;
