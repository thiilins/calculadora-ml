import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.background};
    width: 100%;
    height: 100vh;
    color: white;
    font-size: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `}
`
