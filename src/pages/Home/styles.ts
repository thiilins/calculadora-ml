import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.grayDark};
    width: 100vw;
    height: 100vh;
    color: white;
    font-size: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .welcome {
      background-color: ${theme.colors.blueDark};
      padding: 3rem;
      border-radius: 2rem;
    }
    .welcome__subtitle {
      background-color: ${theme.colors.black};
      padding: 1rem 2rem;
      border-radius: 0 0 1rem 1rem;
      font-size: 1.3rem;
    }
  `}
`
