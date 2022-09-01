import styled, { css } from 'styled-components'
interface IFlag {
  flag: string
}
export const ChangeLanguageComponentWrapper = styled.div`
  ${({ theme }) => css`
    padding: 1rem 3rem;
  `}
`
export const LanguageItem = styled.button`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 0.5fr 2fr;
    align-items: center;
    padding: 0.5rem;
    gap: 0.6rem;
    width: 100%;
    height: 4rem;
    cursor: pointer;
    border-radius: 1rem;
    & + & {
      margin-top: 1rem;
    }
    border: 0;
    color: ${theme.colors.secondary};
    font-family: ${theme.fonts.family.harabara_mais};
    background-color: transparent;
    :hover {
      background-color: ${theme.colors.secondary}30;
    }
  `}
`
export const Flag = styled.div<IFlag>`
  ${({ theme, flag }) => css`
    background-image: url(${flag});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 25px;
    border-radius: 50%;
    height: 25px;
  `}
`
