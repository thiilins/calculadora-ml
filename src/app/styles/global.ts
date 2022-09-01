import { createGlobalStyle, css } from 'styled-components'

export default createGlobalStyle`  
${({ theme }) => css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }
  html {
    font-size: 62.5%;
    font-family: ${theme.fonts.family.harabara_mais};
    color: ${theme.colors.contentText};
  }
  fieldset {
    border: none;
  }

  #root {
    overflow: hidden;
  }

  h1 {
    font-size: ${theme.fonts.size.xLarge};
    font-weight: ${theme.fonts.weight.bold};
    color: ${theme.colors.titleText};
    margin: 0;
  }

  h2 {
    font-size: ${theme.fonts.size.large};
    font-weight: ${theme.fonts.weight.bold};
    color: ${theme.colors.titleText};
    margin: 0;
  }

  h3 {
    font-size: ${theme.fonts.size.medium};
    font-weight: ${theme.fonts.weight.bold};
    color: ${theme.colors.titleText};
    margin: 0;
  }

  h4 {
    font-size: ${theme.fonts.size.small};
    font-weight: ${theme.fonts.weight.bold};
    color: ${theme.colors.titleText};
    margin: 0;
  }

  h5 {
    font-size: ${theme.fonts.size.xSmall};
    font-weight: ${theme.fonts.weight.bold};
    color: ${theme.colors.titleText};
    margin: 0;
  }

  h6 {
    font-size: ${theme.fonts.size.xxSmall};
    font-weight: ${theme.fonts.weight.bold};
    color: ${theme.colors.titleText};
    margin: 0;
  }

  strong {
    font-weight: ${theme.fonts.weight.bold};
    color: ${theme.colors.titleText};
  }

  a {
    color: ${theme.colors.primary};
    text-decoration: none;

    &:hover {
      color: ${theme.colors.secondary};
    }
  }

  body {
    font-weight: ${theme.fonts.weight.regular};
    font-size: ${theme.fonts.size.xSmall};
    color: ${theme.colors.gray};
    line-height: 1;
  }
  @font-face {
    font-family: 'Harabara Mais';
    src: url('/assets/fonts/HarabaraMaisBold-HarabaraMaisBold.woff2')
        format('woff2'),
      url('/assets/fonts/HarabaraMaisBold-HarabaraMaisBold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }
`}
   `
