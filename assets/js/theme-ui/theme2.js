import colorSystems from './color_systems';
let lch_monotone = colorSystems.lch.monotone;
let lch_monotone_colors = lch_monotone.colors;
//let lch_monotone_modes = lch_monotone.modes;


import {
    deep,
    base, //tailwind, swiss
} from '@theme-ui/presets';

//https://theme-ui.com/packages/color#theme-uicolor
//import {
    //lighten, darken
    //darken, desaturate, saturate, lighten, lightness, hue, rotate, shade, tint, alpha, transparentize, mix, complement, invert, greyscale
//} from '@theme-ui/color';

const theme = {
    ...base,

    config: {
        initialColorModeName: 'light',
        printColorModeName: 'light',
    },
    breakpoints: ['40em', '52em', '64em'],
    space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
    fonts: {
        systemUi: "system- ui",
        defaults: "-apple-system, BlinkMacSystemFont, 'Segoe UI','Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
        monospace: "'Space Mono', 'Oxygen Mono', 'Noto Sans', 'Menlo', monospace",
        sansSerif: "'Asap', 'Chivo', 'Dosis', 'Exo 2', 'Inter', 'Josefin Sans', 'Karla', 'Lato', 'Montserrat', 'Noto Sans', 'Nunito', 'Open Sans', 'Oswald','Overpass', 'Encode Sans', 'Quicksand', 'Raleway', 'Roboto', 'Rubik', 'Source Sans Pro', 'Syne', 'Ubuntu', 'Work Sans', 'Epilogue', 'IBM Plex Sans', 'Montserrat Alternates', 'Oxygen', 'PT Sans', 'Quattrocento Sans', 'Recursive', 'Sora', 'Space Grotesk', sans-serif",
        serif: "'Arvo','BioRhyme','Bitter','Josefin Slab', 'Libre Baskerville', 'Merriweather', 'Coustard', 'Playfair Display', 'Roboto Slab', 'Spectral', 'PT Serif', 'Quattrocento', 'Source Serif Pro', 'Zilla Slab', serif",
        cursive: "'Abril Fatface','Bebas Neue', 'Comfortaa', 'Big Shoulders Text', cursive",
        h1: "'Coustard', sans-serif",
        heading: "'Space Grotesk', 'Sora', Epilogue', 'Montserrat', 'Syne', 'Overpass', 'Work Sans', 'Raleway', 'Nunito', 'Dosis', 'Open Sans', 'Source Sans Pro', 'Roboto', 'Rubik', 'Exo 2', sans-serif",
        body: "'Montserrat', 'Lato', 'Karla', 'Nunito', 'Raleway', 'Rubik', 'Quicksand', 'Inter', 'Overpass', 'Chivo', 'Open Sans', 'Dosis',  -apple-system, BlinkMacSystemFont, 'Segoe UI','Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    },
    fontSizes: [10, 12, 14, 16, 20, 24, 32, 48, 64, 96],
    fontWeights: {
        thin: 100,
        extraLight: 200,
        light: 300,
        regular: 400,
        body: 400,
        heading: 700,
        headline: 900,
        title: 600,
        subtitle: 300,
        medium: 500,
        semiBold: 600,
        bold: 700,
        extraBold: 800,
        black: 900,
    },
    lineHeights: {
        body: 1.5,
        heading: 1.125,
    },
    ...lch_monotone_colors,
    colors: {
        ...base.colors,
        greenAlert: "#1A6A62", //pinegreen
        redAlert: "#D60000", //redWine




        text: lch_monotone_colors.indigo[0], //"#0d1311",
        background: lch_monotone_colors.cyan[11], //"#eff4f5",
        primary: lch_monotone_colors.teal[2], //Primary brand color for links, buttons, etc.
        secondary: lch_monotone_colors.cyan[3], //A secondary brand color for alternative styling
        accent: lch_monotone_colors['slate-gray'][1], //A contrast color for emphasizing UI = lightest gray
        //primaryAccent: "",
        //secondaryAccent: "",
        navBg: lch_monotone_colors["slate-gray"][8], 
        navTextAccent: lch_monotone_colors.gray[8],
        footerBg: lch_monotone_colors["slate-gray"][10],
        footerTextAccent: lch_monotone_colors.cyan[4],
        highlight: lch_monotone_colors.yellow[9], //A background color for 8ighlighting text = light yellow
       //border: "#f0f4f2",
        muted: lch_monotone_colors.gray[5], //A faint color for backgrounds, borders, and accents that do not require high contrast with the background color
        // var(--theme-ui-colors-secondary);
        grayOutline: '#4e4e4e', //raisinBlackBlue


        //react select form
        //lightBtnHover, darkBtnHover,
        reactSelectPrimary75: '#757576',
        reactSelectDanger: '#390100',
        reactSelectDangerLight: '#d96069',
        reactSelectOptionHover: '#c9cacf',
        reactSelectOptionFocus: '#acadb1',

        inputContainerBorder: lch_monotone_colors.gray[5],
        inputContainerFocusOutline: '#acadb1', //#676869
        inputContainerBg: '#fdfffc',
        //...lch_monotone.colors.modes,
        modes: {
            dark: {
                ...deep.colors,
                background: lch_monotone_colors.indigo[0],
                text: lch_monotone_colors['slate-gray'][11],

                primary: lch_monotone_colors['slate-gray'][7], //lch_monotone_colors.teal[4],
                secondary: lch_monotone_colors.blue[9],
                accent: lch_monotone_colors.blue[9], //cyan[9]
                muted: lch_monotone_colors.gray[6],

                border: lch_monotone_colors['slate-gray'][1],
                navBg: lch_monotone_colors.gray[1],
                navTextAccent: lch_monotone_colors.indigo[10],
                footerBg: lch_monotone_colors.gray[2],
                footerTextAccent: lch_monotone_colors.indigo[10],
                reactSelectOptionHover: '#5b5b5b',
                reactSelectOptionFocus: '#757576',
                inputContainerFocusOutline: '#757576',
                inputContainerBg: '#3d4550',
                greenAlert: "#9BC59D", //lightGreen
                redAlert: "#FF6666", //bittersweetred
            },
        }
    },
    images: {
        headshot: {
            maxWidth: '150px',
            borderRadius: 9999,
            borderColor: 'primary',
            borderWidth: 1,
            borderStyle: 'solid',
        }
    },
    layout: {
        section: {
            //borderTop: '10px solid',
            //borderColor: 'primary',
            py: 4,
        },
    },
    forms: {
        validInput: {
            borderColor: "greenAlert",
            outlineColor: "greenAlert",
        },
        invalidInput: {
            borderColor: "redAlert",
            outlineColor: "redAlert",
        },
        input: {
            outlineColor: "grayOutline",
            fontFamily: 'body',
            backgroundColor: 'inputContainerBg',
            borderColor: 'inputContainerBorder',
            '&:focus': {
                outline: 'inputContainerFocusOutline',
            },
            '&:autofill': {
                //backgroundColor: 'inputContainerBg',
            }
        },
        switch:{
            backgroundColor: 'primary',
            // This will not be visible since the input is hidden
            // '&:checked': {
            //   backgroundColor: 'primary'
            // },
            // This will be visible
            'input:checked ~ &': {
                backgroundColor: 'secondary',
            },
        },
        modeSwitch:{
            backgroundColor: 'text',
        },
        textarea: {
            outlineColor: "grayOutline",
            fontFamily: 'body',
            backgroundColor: 'inputContainerBg',
            borderColor: 'inputContainerBorder',
            resize: 'none',
            '&:focus': {
                outline: 'inputContainerFocusOutline',
            }
        }
    },
    buttons: {
        primary: {
            color: 'background',
            bg: 'primary',
            '&:hover': {
                boxShadow: '1px 1px 3px 0 rgba(90,90,100,0.5), 1px 0px 3px 0 rgba(250,250,250,0.5)',
                //bg: 'secondary', //darken('primary', 0.1),
                cursor: 'pointer',
            }
        },
        secondary:{
            color: 'background',
            bg: 'secondary'
        },
        footer: {
            color: 'text',
            px: 0,
            '&:hover': {
                cursor: 'pointer',
            }
        },
        icon:{
            '&:hover': {
                cursor: 'pointer',
            }
        }

    },
    text: {
        heading: {
            fontFamily: 'heading',
            lineHeight: 'heading',
            fontWeight: 'heading',
        },
        sectionHeading: {
            textAlign: 'center',
            marginBottom: 3,
            fontSize: 6,
            //width: '50%'
            //borderBottom: '5px solid', borderColor: 'green'
        },
        footer: {
            fontSize: 0,
            fontWeight: 'light',
            color: 'accent',
        },
        invalidInputAlert: {
            fontWeight: 400,
            color: "redAlert", //red
            //bg: "#131316", //medium-black
            borderRadius: 5,
            fontSize: 0,
        },
        validInputAlert: {
            fontWeight: 400,
            color: "greenAlert",
            borderRadius: 5,
            fontSize: 0,
        }
    },
    links: {
        nav: {
            px: 2,
            py: 1,
            paddingLeft: 3,
            fontSize: 3,
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            color: 'text',
            '&:hover': {
                color: 'navTextAccent',
                bg: 'primary',
            }
        },
        footer: {
            px: 1,
            color: 'accent',
            '&:hover': {
                color: 'footerTextAccent',
            },
        },
    },
    styles: {
        ...base.styles,
        root: {
            fontFamily: 'body',
            lineHeight: 'body',
            fontWeight: 'body',
            fontSize: 1,
        },
        h1: {
            variant: 'text.heading',
            fontWeight: 'extraBold',
            fontSize: 5,
        },
        h2: {
            variant: 'text.heading',
            fontSize: 4,
        },
        h3: {
            variant: 'text.heading',
            fontSize: 3,
        },
        h4: {
            variant: 'text.heading',
            fontSize: 2,
        },
        a: {
            fontWeight: 'regular',
            textDecoration: 'none',
            color: 'text',
            '&:hover': {
                color: 'muted',
                cursor: 'pointer',
            },
            '&:visited': {
                //color: 'text',
            },
            '&:link': {
                //color: 'text',
            }
        },
        h5: {
            variant: 'text.heading',
            fontSize: 1,
        },
        span: {
            fontWeight: 'light'
        },
        h6: {
            variant: 'text.heading',
            fontSize: 0,
        },
        pre: {
            fontFamily: 'monospace',
            overflowX: 'auto',
            code: {
                color: 'inherit',
            },
        },
        code: {
            fontFamily: 'monospace',
            fontSize: 'inherit',
        },
        table: {
            width: '100%',
            borderCollapse: 'separate',
            borderSpacing: 0,
        },
        th: {
            textAlign: 'left',
            borderBottomStyle: 'solid',
        },
        td: {
            textAlign: 'left',
            borderBottomStyle: 'solid',
        },
        footer: {
            position: 'fixed',
            left: '0',
            bottom: '0',
            width: '100%',
            height: '40',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            px: '10',
            //bg: desaturate('primary', 0.25),
        }
    },
};

export default theme;