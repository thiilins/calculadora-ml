import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${() => css`
    display: flex;
    gap: 1rem;
    flex-direction: column;
    justify-content: center;
    padding: 3rem 2rem 0 2rem;
  `}
`

export const Header = styled.div`
  ${({ theme }) => css`
    position: relative;

    & button {
      position: absolute;
      right: 0;
      top: 0;
      border: 0;
      background-color: transparent;
      color: ${theme.colors.primary};
      cursor: pointer;
    }
    h2 {
      font-weight: ${theme.fonts.weight.bold};
      color: ${theme.colors.primary};
      margin-bottom: ${theme.spacings.base};
    }
  `}
`

export const Content = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .column-3-items {
      display: flex;
      gap: 2rem;

      label {
        width: 33.33%;
      }
    }
  `}
`

export const Footer = styled.div`
  ${() => css`
    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: flex-end;
    & button {
      width: 150px;
    }
  `}
`
