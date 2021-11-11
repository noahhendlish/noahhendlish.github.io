//import { fontFamily } from "styled-system";
//import Typography from "typography";
//import type { Theme } from 'theme-ui';



const theme = {
  config: {
     initialColorModeName: 'light',
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
  colors: {
    //#303030, #2b2b2b, #1f1f1f #1b1c1e
    blue: [
         "#8bbbd0",
         "#74a0b3",
         "#5e8799",
         "#4b7181",
         "#3b5e6c",
         "#2f4e5b",
         "#26424e",
         "#203943",
         "#1b333b",
         "#182d34",
       ],
    green: [
         "#a4c1be",
         "#8fbab4",
         "#7ab3ab",
         "#63aca1",
         "#4aa498",
         "#2a9b8e",
         "#238277",
         "#1d6a61",
         "#16534b",
         "#103c37",
       ],
       red: [
         "#d96069",
         "#c9515c",
         "#b6404d",
         "#a12d3d",
         "#89152b",
         "#6e0218",
         "#500009",
         "#390100",
         "#270000",
         "#130000",
       ],
       yellow: [
         "#e9c46a",
         "#ecc362",
         "#eec15b",
         "#f1c053",
         "#f4bf4a",
         "#f6be41",
         "#f8bc37",
         "#fbbb2c",
         "#fdba1e",
         "#ffb805",
       ],
       orange: [
         "#e5c4ab",
         "#e8bc9b",
         "#ebb48c",
         "#edab7c",
         "#efa36d",
         "#f09a5d",
         "#f0924d",
         "#f1893d",
         "#f0802b",
         "#f07713",
       ],
       red2: [
         "#e76f51",
         "#d66144",
         "#c35135",
         "#ad3e26",
         "#952915",
         "#7a0d03",
         "#5d0200",
         "#440000",
         "#2f0100",
         "#1e0000",
       ],
       gray: [
         "#c9cacf",
         "#babbc0",
         "#acadb1",
         "#9e9ea2",
         "#909093",
         "#828385",
         "#757576",
         "#676869",
         "#5b5b5b",
         "#4e4e4e",
       ],
       "white-black": [
         "#fdfffc",
         "#dfe2e1",
         "#c2c6c7",
         "#a5aaae",
         "#8a9095",
         "#6f767d",
         "#555d66",
         "#3d4550",
         "#252f3a",
         "#0f1a26",
       ],
    mint: "#87E7C5",//x
    lightGreen: "#9BC59D", //x
    mustard: "#e9c46a", //x
    vegasGold: "#C8AD55", //x
    terraCotta: "#e86a58", //x
    pineGreen: "#1A6A62", //xx
    russianGreen: "#7B9C80",
    grayGreen: "#5B7262", //xx
    prussianBlue: "#023047", //xxx
    charcoalBlue: "#264653", //x
    cadetBlue: "#9ea9bd", //x
    purpleMountain: "#967AA1",
    xiktec: "#200E16",
    paleCerulean: "#98c1d9", //x
    bdazzledBlue: "#3d5a80",
    jetGray: "#3b373a", //xxx*
    gunMetal: "#293241", //xx
    lightCyan: "#E0FBFC", //x
    grayWeb: "#7d7d82", //x
    middleBlue: "#93d6de", //?
    davysGray: "#4e4e4e", //xx
    beauBlue: "#bfced9", //x
    comfortGraphite: "#616469", //xx
    darkSlateGray: "#2F595F", //xx
    xanadu: "#748686", //xx.0
    cadetBluex: "#5D9B96", //xx.0
    spaceCadet: "#1c254a", //xx+
    orangePeel: "#FF9F1C", //x
    babyPowder: "#fdfffc", //X!
    roseMadder: "#E71D36", //X.
    romanSilver: "#878A98", //X.
    floralWhite: "#F5F1E8", //X!
    taupeGray: "#8d8c8e", //x.x
    richBlack: "#030304", //fogra //0A0A0B //xxx
    richBlackFogra292: "#0f1a26", //xxx**
    raisinBlackGray: "#222023", //xxx
    sandyBrown: "#F4A261", // orange x
    burntSienna: "#E76F51", //orange x
    tartOrange: "#ED4A44", //x
    persianGreen: "#2A9D8F", //x.x
    warmBlack: "#134240", //green/blue tint xx
    liverGray: "#4d494cff", //xx
    silverChalice: "#aba8a7", //x
    culturedGray: "#EEEEEE", //x
    culturedWhite: "#f6f6f6", //almost white
    raisinBlackBlue: "#191A24", //xxx
    eerieBlack: "#131316", //xxx
    jetGrayBlue: "#33333C", //xx.x
    bittersweetRed: "#FF6666", //x.x
    redWine: "#D60000", //rosso corsa xx
    pastelPink: "#e79c9c", //x
    greenAlert: "#1A6A62", //pinegreen
    redAlert: "#D60000", //redWine
    grayOutline: '#4e4e4e', //raisinBlackBlue
    //primaryBtnHover:"gray", //"#2F595F", //darkSlateGray
    //primaryBtn: "black", //"#023047", //prussian blue
    text: "#15191f", //'#131316', //eerieBlack alt rich black fogra? //Body foreground color
    background: "#efeeea", //'#EEEEEE', //cultured gray //Body background color
    primary: "#264653", //'#264653', // charcoal //Primary brand color for links, buttons, etc.
    //secondary: "#33333c", //'#33333c',//jetgrayblue //A secondary brand color for alternative styling
    //muted: "black", //'#f6f6f6', //culturedWhite //A faint color for backgrounds, borders, and accents that do not require high contrast with the background color
    accent: "#dfe2e1", //"#E0FBFC", //lightCyan //A contrast color for emphasizing UI = lightest gray
    //highlight: "black", //"#e9c46a", //mustard //A background color for highlighting text = light yellow
    
    //react select form
    reactSelectPrimary75: '#757576',
    reactSelectDanger: '#390100',
    reactSelectDangerLight: '#d96069',
    reactSelectOptionHover: '#c9cacf',
    reactSelectOptionFocus: '#acadb1',
    inputContainerFocusOutline: '#acadb1', //#676869
    inputContainerBg: '#fdfffc',
    modes: {
      dark: {
        reactSelectOptionHover: '#5b5b5b',
        reactSelectOptionFocus: '#757576',
        inputContainerFocusOutline: '#757576',
        inputContainerBg: '#3d4550',
        text: '#efeeea',
        background: '#15191f',
        
        //grayOutline: "lightgray",
        primary: "#5e8799", //'#264653ff',
        //secondary: '#E4EAE9',
        //muted: '#f6f6f6',
        accent: "3d4550", //"#e9c46aff", 
        //highlight: "darkblue",
        greenAlert: "#9BC59D", //lightGreen
        redAlert: "#FF6666", //bittersweetred
        //primaryBtnHover: "secondary",
        //primaryBtn: "primary"
      }

    }
  },
  layout:{
    section:{
      borderTop: '10px solid', borderColor: 'green', py: 4
    },
  },
  forms:{
    validInput:{
      borderColor: "greenAlert",
      outlineColor: "greenAlert"
    },
    invalidInput:{
      borderColor: "redAlert",
      outlineColor: "redAlert"
    },
    input:{
      outlineColor: "grayOutline",
      fontFamily: 'body',
    },
    textarea:{
      outlineColor: "grayOutline",
      fontFamily: 'body',
      resize: 'none',
    }
  },
  buttons:{
    primary: {
      color: 'background',
      bg: 'primaryBtn',
      '&:hover': {
        bg: 'primaryBtnHover',
        cursor: 'pointer',
      }
    },

  },
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
    },
    sectionHeading:{
      textAlign: 'center',
      marginBottom: 3,
     //width: '50%'
      //borderBottom: '5px solid', borderColor: 'green'
    },
    footer:{
      fontSize: 0,
      fontweight:'light',
    },
    invalidInputAlert: {
      fontWeight: 400,
      color: "redAlert", //red
      //bg: "#131316", //medium-black
      borderRadius: 5,
      fontSize: 0,
    },
    validInputAlert:{
      fontWeight: 400,
      color: "greenAlert",
      borderRadius: 5,
      fontSize: 0,
    }
  },
  links:{
    nav: {
      px: 2,
      py: 1,
      fontSize: 3,
      textTransform: 'uppercase',
      letterSpacing: '0.2em',
      color: 'text',
      ':hover': {
        color: 'accent',
      }
    },
  },
  styles: {
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
    a:{
      fontWeight: 'regular',
    },
    h5: {
      variant: 'text.heading',
      fontSize: 1,
    },
    span:{
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
    footer:{
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
    }
  },
};

export default theme;

/*
 color: {
   yellow: "#e9c46aff",
   orange: "#e86a58ff",
   green: "#1a6a62ff",
   darkblue: "#023047ff",
   blue: "#264653ff",
   lightblue: "#838B9B",
   darkgray: "#3b373aff",
   darkergray: "rgb(34, 32, 35)",
   gray: "#4d494cff",
   lightgray: "#9e9c9bff",
   white: "#eeeeeeff"
 }
 */