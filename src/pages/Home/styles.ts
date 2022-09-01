import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.background};
    max-width: 100%;
    max-height: 100%;
    color: white;
    font-size: 2rem;
    display: grid;
    grid-template-columns: 20% 80%;
    grid-template-rows: 100%;
    padding: 2rem;
    gap: 2rem;
    .aside {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      align-items: center;
    }
    .content {
      padding-right: 2rem;
    }
  `}
`
