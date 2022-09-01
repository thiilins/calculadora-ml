import { createTheme } from '@mui/material/styles'
export default {
  title: 'light',
  colors: {
    primary: '#FFE600',
    secondary: '#283380',
    titleText: '#004346',
    contentText: '#A3A6B4',
    contentTextDark: '#495057',
    background: '#EBEBEB',
    red: '#f44336',
    redLight: '#f6685e',
    redDark: '#8a1c1c',
    pink: '#e91e63',
    pinkLight: '#ed4b82',
    pinkDark: '#a31545',
    purple: '#9c27b0',
    purpleLight: '#af52bf',
    purpleDark: '#4a126b',
    deepPurple: '#4527a0',
    deepPurpleLight: '#8561c5',
    deepPurpleDark: '#301b70',
    indigo: '#283593',
    indigoLight: '#535da8',
    indigoDark: '#1c2566',
    blue: '#1565c0',
    blueLight: '#2196f3',
    blueDark: '#0D2E59',
    blueViolet: '#8a2be2',
    lightBlue: '#0276aa',
    lightBlueLight: '#35baf6',
    lightBlueDark: '#015384',
    cyan: '#00bcd4',
    cyanLight: '#33c9dc',
    cyanDark: '#005b64',
    teal: '#009688',
    tealLight: '#33ab9f',
    tealDark: '#00695f',
    green: '#25B860',
    greenLight: '#66bb6a',
    greenDark: '#209E53',
    greenLime: '#72b626',
    lightGreen: '#77a258',
    lightGreenLight: '#a2cf6e',
    lightGreenDark: '#3b6120',
    lime: '#cddc39',
    limeLight: '#d7e360',
    limeDark: '#8f9a27',
    yellow: '#ffeb3b',
    yellowLight: '#ffef62',
    yellowDark: '#ffb400',
    amber: '#ffc107',
    amberLight: '#ffcd38',
    amberDark: '#b28704',
    orange: '#ff6f00',
    orangeLight: '#ff8b33',
    orangeDark: '#b24d00',
    deepOrange: '#ff5722',
    deepOrangeLight: '#ff784e',
    deepOrangeDark: '#b23c17',
    gray: '#67656B',
    grayLight: '#838285',
    grayDark: '#4B4852',
    disabled: '#C6C6C6',
    white: '#ffffff',
    black: '#0e0e0e'
  },
  fonts: {
    family: {
      ubuntu: "'Ubuntu', sans-serif",
      quickSand: "'Quicksand', sans-serif",
      harabara_mais: "'Harabara Mais'"
    },
    weight: {
      extraLight: 300,
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700
    },
    size: {
      xxSmall: '1.2rem',
      xSmall: '1.4rem',
      small: '1.6rem',
      medium: '1.8rem',
      large: '2.0rem',
      xLarge: '2.4rem',
      xxLarge: '4.8rem'
    },
    colors: {
      primaryText: '#1f1f1f',
      secondaryText: '#212121'
    }
  },
  borders: {
    small: '0.4rem',
    medium: '.8rem',
    large: '2rem',
    full: '10rem'
  },
  spacings: {
    xSmall: '0.5rem',
    small: '1rem',
    base: '2rem',
    medium: '3rem',
    large: '4rem',
    xLarge: '5rem'
  }
}

export const MUIDefaultTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#005356',
      contrastText: 'white'
    },
    secondary: {
      main: '#80C340',
      contrastText: '#005356'
    }
  }
})
